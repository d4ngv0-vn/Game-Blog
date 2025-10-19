const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Blog = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String },
    images: { type: Array, maxLength: 10 },
    content: { type: String, maxLength: 1000 },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    likes: { type: Array },
});

module.exports = mongoose.model('Blog', Blog);
