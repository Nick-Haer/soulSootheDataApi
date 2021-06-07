const mongoose = require('mongoose');

async function dbConnect() {
  try {
    console.log('connecting...');
    await mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://localhost/sootheSayer',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
    console.log('db connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = dbConnect;
