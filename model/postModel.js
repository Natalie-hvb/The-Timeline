const mongoose = require('mongoose');
const schema = mongoose.Schema;

const postModel = new schema({
    message : {
        type: String,
        required: true,
        minlength: 25
    },
    name : {
        type: String,
        required: true
    }

},{timestamps: true});


module.exports = mongoose.model('post', postModel);