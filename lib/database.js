"use strict"

const MongoClient = require('mongodb').MongoClient;
const mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017';

let db = null;

module.exports.init = () => {

  return MongoClient.connect(mongoUrl).then(
    (client) => {
      db = client.db("Portfolio");
      console.log(`Connected to MongoDB at : ${mongoUrl}`);
    }
  ).catch((err) => {
    if (err) {
      console.log(`Error connecting to mongo : ${err}`);
      process.exit(1);
      return;
    }
  })
}

module.exports.retrieveComments = () => {
  return db.collection('Comments').find({}).toArray();
}

module.exports.insertComment = (email, comment) => {
  return db.collection('Comments').insert({
    email: email,
    comment: comment
  })
}