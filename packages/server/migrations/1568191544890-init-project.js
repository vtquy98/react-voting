import mongoose from 'mongoose';
import { Users } from '../services';
import { MALE } from '../enums/userGender';
import { USER_ACTIVE } from '../enums/userStatus';
import { ADMIN } from '../enums/userRole';

const systemUser = {
  username: 'admin',
  password: '123456',
  first_name: 'Thanh Quy',
  last_name: 'Vo',
  email: 'vtquy98@gmail.com',
  gender: MALE,
  birth_date: '19/10/1998',
  status: USER_ACTIVE,
  role: ADMIN,
  profession: 'Student'
};

const insertSystemUser = () => new Users(systemUser).save();

const { MONGO_URL, MONGO_DB, MONGO_OPTIONS } = process.env;

const mongoUrl = MONGO_URL || 'mongodb://localhost:27017';
const dbName = MONGO_DB || 'ReactVoting';
const option = MONGO_OPTIONS
  ? JSON.parse(MONGO_URL)
  : {
      useNewUrlParser: true
    };

const connectDb = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(mongoUrl + '/' + dbName, option, err => {
      if (err) {
        reject(err);
      }
      resolve(mongoose);
    });
  });
};

module.exports.up = async function() {
  const db = await connectDb();
  await insertSystemUser();
  await db.disconnect();
};

module.exports.down = async function() {
  const db = await connectDb();

  await Promise.all([Users.deleteOne({ username: systemUser.username })]);

  await db.disconnect();
};
