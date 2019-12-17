const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect("mongodb://mymongo:27017/testdb");
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;