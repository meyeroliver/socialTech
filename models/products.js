const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Sequelize = require('sequelize');

//produc schema
const ProductSchema = Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Products = mongoose.model('product', ProductSchema);
