const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/dandelion_game_blog');

        console.log('Database connect successfully');
    } catch(err) {
        console.log('Database error!', err);
    }
}

module.exports = { connect };