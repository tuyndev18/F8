import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';
const options = {
  separator: '',
  lang: 'en',
  truncate: 100,
};
mongoose.plugin(slug, options);

const postSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: 'Users' },
    title: { type: String },
    content: { type: String },
    draft: { type: Boolean, default: false },
    banner: {
      type: String,
      required: true,
    },
    tags: { type: Array },
    slug: { type: String, slug: 'title', slug_padding_size: 3, unique: true },
    likes: [{ type: mongoose.Types.ObjectId }],
    descriptions: { type: String },
    heading: { type: String },
    saver: [{ type: String }],
  },

  {
    timestamps: true,
    versionKey: false,
  },
);
postSchema.index({ title: 'text' });

const Posts = mongoose.model('Posts', postSchema);
export default Posts;
