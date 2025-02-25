import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const mongo_url = process.env.MONGO_URI;

mongoose.connect(mongo_url)
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => {
    console.log(err);
  });
