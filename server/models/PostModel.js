import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';
const options = {
	separator: '-',
	lang: 'en',
	truncate: 100,
};
mongoose.plugin(slug, options);

const postSchema = new mongoose.Schema(
	{
		userId: { type: mongoose.Types.ObjectId, ref: 'Users' },
		title: { type: String, required: true },
		content: { type: String, default: 'đây là nội dung' },
		banner: {
			type: String,
			default: 'https://res.cloudinary.com/tuy-n-beat/image/upload/v1652102581/default/6hqmcjaxbgbon8ydw93z_ir4bet.png',
		},
		tags: [{ type: String }],
		slug: { type: String, slug: 'title', slug_padding_size: 3, unique: true },
		likes: [{ type: mongoose.Types.ObjectId, default: [] }],
		saver: [{ type: mongoose.Types.ObjectId, default: [] }],
		comments: [{ type: mongoose.Types.ObjectId, default: [] }],
	},
	{
		timestamps: true,
		versionKey: false,
	},
);
postSchema.index({ title: 'text'});

const Posts = mongoose.model('Posts', postSchema);
export default Posts;
