import { QueryMethod } from '../Utils/QueryMethod.js';
import postModel from '../models/PostModel.js';
import commentModel from '../models/CommentModel.js';
import UserModel from '../models/UserModel.js';
// import tagModel from '../models/TagModel.js';
import { ConvertDate, RecentTimes } from '../Utils/ConvertDate.js';

const postController = {
  getAll: async (req, res, next) => {
    try {
      const page = Number.parseInt(req.query.page);
      const queryMethod = new QueryMethod(req.query, postModel.find({}))
        .pagination()
        .populate('userId', 'avatar fullName')
        .sort()
        .lean();
      const data = await queryMethod.method;
      const total = await postModel.count({});
      res.json({ data: { list: data, total, page } });
    } catch (error) {
      next(error);
    }
  },
  getLatest: async (req, res, next) => {
    try {
      const queryMethod = new QueryMethod(
        req.query,
        postModel
          .find({
            createdAt: {
              $lte: new Date(),
              $gte: new Date(new Date().setDate(new Date().getDate() - 5)),
            },
          })
          .populate('userId', 'userName avatar')
          .sort({ createdAt: -1 }),
      )
        .pagination()
        .lean();
      const data = await queryMethod.method;
      res.json(data);
    } catch (error) {
      next(error);
    }
  },

  getPopulate: async (req, res, next) => {
    try {
      const tags = ['webdev', 'beginners', 'css', 'react', 'javascript'];
      const result = await postModel
        .find({
          tags: { $in: tags },
          createdAt: {
            $lte: new Date(),
            $gte: new Date(new Date().setDate(new Date().getDate() - 30)),
          },
        })
        .populate('userId', 'userName')
        .limit(5)
        .lean();
      let data = result.reduce((pre, val) => {
        val.tags.map((tag) => {
          if (tags.includes(tag)) {
            pre[tag] = pre.hasOwnProperty(tag) ? [...pre[tag], val] : [val];
          }
        });
        return pre;
      }, {});

      const sort = Object.keys(data).map((val) => {
        return { [val]: data[val] };
      });
      res.json(sort);
    } catch (error) {
      next(error);
    }
  },

  // getSearch: async (req, res, next) => {
  // 	try {
  // 		let findQuery = null;
  // 		const { q, sort } = req.query;
  // 		const { type } = req.params;
  // 		let result = [];
  // 		switch (type) {
  // 			case 'posts':
  // 				findQuery = postModel
  // 					.find({ $or: [{ tags: { $in: [q] } }, { title: { $regex: q, $options: 'i' } }] })
  // 					.populate('userId', 'userName avatar');
  // 				break;
  // 			case 'tags':
  // 				findQuery = tagModel.find({ title: { $regex: q, $options: 'i' } });
  // 				break;
  // 			case 'comments':
  // 				findQuery = commentModel.find({ content: { $regex: q, $options: 'i' } });
  // 				break;
  // 			case 'myposts':
  // 				if (req.userId) {
  // 					findQuery = postModel
  // 						.find({
  // 							userId: req.userId,
  // 							$or: [{ tags: { $in: [q] } }, { title: { $regex: q, $options: 'i' } }],
  // 						})
  // 						.populate('userId', 'userName avatar');
  // 				}
  // 				break;
  // 		}
  // 		if (sort) {
  // 			result = await findQuery.sort({ createdAt: sort });
  // 		} else result = await findQuery;
  // 		res.json(result);
  // 	} catch (error) {
  // 		next(error);
  // 	}
  // },

  getRelevant: async (req, res, next) => {
    try {
      let followerArr = [];
      let tagArr = [];
      if (req.userId) {
        const result = await UserModel.find({ _id: req.userId }).lean();
        followerArr = result[0].followingUsers || [];
        tagArr = result[0].followingTags || [];
      }
      let findQuery = null;
      if (followerArr.length === 0) {
        findQuery = postModel.find({
          createdAt: {
            $lte: new Date(),
            $gte: new Date(new Date().setDate(new Date().getDate() - 5)),
          },
        });
      } else {
        findQuery = postModel.find({
          $or: [{ userId: { $in: followerArr } }, { tags: { $in: tagArr } }],
          createdAt: {
            $lte: new Date(),
            $gte: new Date(new Date().setDate(new Date().getDate() - 5)),
          },
        });
      }
      const queryMethod = new QueryMethod(
        req.query,
        findQuery.sort({ createdAt: -1 }).populate('userId', 'userName avatar'),
      )
        .pagination()
        .lean();
      const data = await queryMethod.method;
      res.json(data);
    } catch (error) {
      next(error);
    }
  },

  getTopPost: async (req, res, next) => {
    try {
      const { type } = req.params;
      const { StartAndEndPoint } = ConvertDate;
      const end = StartAndEndPoint(type);
      const queryMethod = new QueryMethod(
        req.query,
        postModel.find({
          createdAt: {
            $lte: new Date(),
            $gte: end,
          },
        }),
      )
        .populate('userId', 'userName avatar')
        .pagination()
        .lean();

      const data = await queryMethod.method;
      const scoreArr = data.map((val) => {
        const time = Math.abs(new Date() - new Date(val.createdAt)) / 3600000;
        const score = (val.likes.length - 1) / Math.pow(time + 2, 1.8);
        return {
          ...val,
          score,
        };
      });

      const negativeNumber = scoreArr.filter((val) => val.score < 0).sort((a, b) => a.score - b.score);
      const positiveNumber = scoreArr.filter((val) => val.score >= 0).sort((a, b) => b.score - a.score);

      res.json([...positiveNumber, ...negativeNumber]);
    } catch (error) {
      next(error);
    }
  },

  getPostBySlug: async (req, res, next) => {
    try {
      const { slug } = req.params;

      const data = await postModel.find({ slug }).populate('userId', 'fullName avatar description').lean();
      const myPosts = await postModel
        .find({ userId: data[0].userId._id, _id: { $ne: data[0]._id } }, { title: 1, slug: 1 })
        .sort({ createdAt: 'desc' })
        .limit(4);
      res.json({ data: { ...data[0], myPosts } });
    } catch (error) {
      next(error);
    }
  },

  getTags: async (req, res, next) => {
    try {
      const data = (await postModel.find({}, { tags: 1, _id: 0 })) || [];
      const newData = data.reduce((pre, val) => {
        const obj = { ...pre };
        val['tags'].map((item) => {
          obj[item] = (obj[item] || 0) + 1;
        });
        return obj;
      }, {});
      res.status(200).json(newData);
    } catch (error) {
      next(error);
    }
  },

  getCommentsByPostId: async (req, res, next) => {
    try {
      const { id } = req.params;
      const queryMethod = new QueryMethod(req.query, commentModel.find({ postId: id }))
        .populate('userId', ['userName', 'avatar'])
        .pagination()
        .sort();
      const data = (await queryMethod.method) || [];
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  },

  likePost: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await postModel.updateOne({ _id: id }, { $addToSet: { likes: req.userId } });
      res.status(201).json({ message: 'like post' });
    } catch (error) {
      next(error);
    }
  },

  unlikePost: async (req, res, next) => {
    try {
      const { id } = req.params;
      await postModel.updateOne({ _id: id }, { $pull: { likes: req.userId } });
      res.status(201).json({ message: 'unlike post' });
    } catch (error) {
      next(error);
    }
  },
  likeComment: async (req, res, next) => {
    try {
      const { id, idc } = req.params;
      await commentModel.updateOne({ postId: id, _id: idc }, { $addToSet: { likes: req.userId } });
      res.status(200).json({ mess: 'like comment' });
    } catch (error) {
      next(error);
    }
  },

  unlikeComment: async (req, res, next) => {
    try {
      const { id, idc } = req.params;
      await commentModel.updateOne({ postId: id, _id: idc }, { $pull: { likes: req.userId } });
      res.status(200).json({ mess: 'unlike comment' });
    } catch (error) {
      next(error);
    }
  },

  addComment: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { content } = req.body;
      const data = await commentModel.create({
        userId: req.userId,
        postId: id,
        content,
        replyToId: req.body?.replyToId,
      });
      await postModel.updateOne({ _id: id }, { $addToSet: { comments: data._id } });
      res.status(201).json({ mess: 'add new comment successfully' });
    } catch (error) {
      next(error);
    }
  },

  editComment: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { content } = req.body;
      const data = await commentModel.updateOne({ userId: req.userId, _id: id }, { content });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  },

  deleteComment: async (req, res, next) => {
    try {
      const { id, idc } = req.params;
      await commentModel.deleteOne({ userId: req.userId, _id: idc });
      await commentModel.deleteMany({ replyToId: idc });
      await postModel.updateOne({ _id: id, userId: req.userId }, { $pull: { comments: idc } });
      res.status(201).json('delete comment');
    } catch (error) {
      next(error);
    }
  },
};

export default postController;
