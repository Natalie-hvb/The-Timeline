// Connect to MongoDB
const mongoose = require('mongoose'); 

const dbURI = 'mongodb+srv://timeline:timeline@timeline.82fpwnf.mongodb.net/';

mongoose.connect(dbURI)
  .then((result) => console.log('connected to the db'))
  .catch((err) => console.log(err)
);