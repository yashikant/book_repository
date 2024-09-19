const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/review', userController.addOrModifyReview);
router.delete('/review/:reviewId', userController.deleteReview);

module.exports = router;
