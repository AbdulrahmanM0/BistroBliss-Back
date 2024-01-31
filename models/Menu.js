const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema =  new Schema({
    title: String,
    body: String,
    price: Number
})

const Menu = mongoose.model("Menu",menuSchema)

module.exports = Menu