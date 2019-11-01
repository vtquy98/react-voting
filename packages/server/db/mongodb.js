import mongoose from 'mongoose';

const { MONGO_URL, MONGO_DB, NODE_ENV, MONGO_OPTIONS } = process.env;

const mongoUrl = MONGO_URL || 'mongodb://localhost:27017';
const dbName = MONGO_DB || 'YoungRadio';

const options = MONGO_OPTIONS
  ? JSON.parse(MONGO_OPTIONS)
  : { useNewUrlParser: true };

module.exports = mongoose
  .connect(mongoUrl + '/' + dbName, options)
  .then(resp => {
    if (NODE_ENV !== 'test' && resp) {
      console.log('mongo is running on: ', mongoUrl);
      console.log('mongodb connected successfully');
    }

    return mongoose;
  })
  .catch(error => {
    console.error(error);
    process.exit();
  });
