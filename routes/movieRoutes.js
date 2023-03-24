const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

router.get('/create', movieController.movie_create_get);

router.get('/', movieController.movie_review);

router.post('/',movieController.movie_create_post);

router.get('/:id',movieController.movie_details)

router.delete('/:id',movieController.movie_delete)

module.exports = router;
