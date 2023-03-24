const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    title: {
        type:String,
        required:true,
    },
    snippet: {
        type:String,
        required:true,
    },
    body: {
        type:String,
        required: true,
    },
}, {timestamps: true});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;