const Review = require('../models/review');

const movie_review = (req,res) => {
    Review.find().sort({createdAt: -1})
        .then(result => {
            res.render('movie',{reviews: result, title:'Movie'})
        })
        .catch(err => {
            console.log(err);
        });
}

const movie_create_get = (req,res) => {
    res.render('create', {title: 'Create new movie reviews'});
}


const movie_create_post = (req,res) => {
    const review = new Review(req.body);

    review.save()
        .then(result => {
            res.redirect('/movie');
        })
        .catch(err => {
            console.log(err);
        });
}


const movie_details = (req,res) => {
    const id = req.params.id;

    Review.findById(id)
        .then(result => {
            res.render('details', {review: result, title: 'Movie Review Details'});
        })
        .catch(err => {
            console.log(err);
        });
}

const movie_delete = (req,res) => {
    const id = req.params.id;

    Review.findByIdAndDelete(id)
        .then(result => {
            res.json({redirect: '/movie'});
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = {
    movie_review,
    movie_create_get,
    movie_create_post,
    movie_delete,
    movie_details
}