import mongoose from 'mongoose';

export default async function () {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('successful connection to database');
  } catch (error) {
    console.log('error', error);
  }
}
