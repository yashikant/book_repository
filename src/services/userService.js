const axios = require('axios');
const { API_BASE_URL } = require('../config');

const api = axios.create({
    baseURL: API_BASE_URL
});

const registerUser = async (userData) => {
    const response = await api.post('/users/register', userData);
    return response.data;
};

const loginUser = async (credentials) => {
    const response = await api.post('/users/login', credentials);
    return response.data;
};

const addOrModifyReview = async (reviewData) => {
    const response = await api.post('/reviews', reviewData);
    return response.data;
};

const deleteReview = async (reviewId) => {
    const response = await api.delete(`/reviews/${reviewId}`);
    return response.data;
};

module.exports = {
    registerUser,
    loginUser,
    addOrModifyReview,
    deleteReview
};
