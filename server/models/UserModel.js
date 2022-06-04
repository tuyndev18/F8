import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    fullName: {
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
    PostSaved: [{ type: mongoose.Types.ObjectId, ref: 'Users', default: [] }],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Users = mongoose.model('Users', userSchema);
export default Users;
