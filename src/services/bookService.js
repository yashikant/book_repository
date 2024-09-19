const axios = require('axios');
const { API_BASE_URL } = require('../config');

const api = axios.create({
    baseURL: API_BASE_URL
});

const getAllBooks = async () => {
    const response = await api.get('/books');
    return response.data;
};

const getBookByISBN = async (isbn) => {
    const response = await api.get(`/books/${isbn}`);
    return response.data;
};

const getBooksByAuthor = async (author) => {
    const response = await api.get(`/books?author=${author}`);
    return response.data;
};

const getBooksByTitle = async (title) => {
    const response = await api.get(`/books?title=${title}`);
    return response.data;
};

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};
