// import TagModel from '../models/TagModel.js';
// import postModel from '../models/PostModel.js';
// import { QueryMethod } from '../Utils/QueryMethod.js';
// const tagCtrl = {

// 	getAllTag: async (req, res, next) => {
// 		try {
// 			const queryMethod = new QueryMethod(req.query, TagModel.find({})).search(TagModel);
// 			const tag = await queryMethod.method.lean();
// 			const post = await postModel.find({}, { tags: 1 });
// 			const quanityTags = post.reduce((pre, val) => {
// 				val.tags.map((val) => {
// 					pre[val] = pre[val] + 1 || 1;
// 				});
// 				return pre;
// 			}, {});
// 			const listTag = tag.map((val) => {
// 				return {
// 					...val,
// 					postCount: quanityTags[val.title] || 0,
// 				};
// 			});
// 			res.status(200).json(listTag);
// 		} catch (error) {
// 			next(error);
// 		}
// 	},
	
// };
// export default tagCtrl;
