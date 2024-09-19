const userService = require('../services/userService');

const registerUser = async (req, res) => {
    try {
        const user = await userService.registerUser(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const user = await userService.loginUser(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addOrModifyReview = async (req, res) => {
    try {
        const review = await userService.addOrModifyReview(req.body);
        res.json(review);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteReview = async (req, res) => {
    try {
        const result = await userService.deleteReview(req.params.reviewId);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    registerUser,
    loginUser,
    addOrModifyReview,
    deleteReview
};
