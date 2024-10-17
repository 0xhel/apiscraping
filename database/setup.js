// You should close this file and not modify it 😉

const mongoose = require('mongoose');
const connectionString = require('../connection');

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));

const fruitSchema = mongoose.Schema({
	name: String,
	family: String,
	carbohydrates : Number,
	protein: Number,
	fat: Number,
	calories: Number,
	sugar: Number,
});

const Fruit = mongoose.model('fruits', fruitSchema);

module.exports = Fruit;
