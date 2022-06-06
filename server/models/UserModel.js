import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';
const options = {
  separator: '-',
  lang: 'en',
  truncate: 120,
};

mongoose.plugin(slug, options);

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      trim: true,
      slug: 'fullName',
      slug_padding_size: 2,
      unique: true,
    },
    fullName: {
      required: true,
      type: String,
    },
    socialId: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '404 bio not found',
    },
    avatar: {
      type: String,
      default:
        'https://res.cloudinary.com/tuyndev/image/upload/v1654309152/default/avatars-000424500066-nchc3n-t500x500_dwtmmw.jpg',
    },
    location: {
      type: String,
    },
    PostSaved: [{ type: mongoose.Types.ObjectId, ref: 'Posts', default: [] }],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Users = mongoose.model('Users', userSchema);
export default Users;
