const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getAllBooks);
router.get('/:isbn', bookController.getBookByISBN);
router.get('/author', bookController.getBooksByAuthor);
router.get('/title', bookController.getBooksByTitle);

module.exports = router;
