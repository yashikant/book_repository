const bookService = require('../services/bookService');

const getAllBooks = async (req, res) => {
    try {
        const books = await bookService.getAllBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getBookByISBN = async (req, res) => {
    try {
        const book = await bookService.getBookByISBN(req.params.isbn);
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getBooksByAuthor = async (req, res) => {
    try {
        const books = await bookService.getBooksByAuthor(req.query.author);
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getBooksByTitle = async (req, res) => {
    try {
        const books = await bookService.getBooksByTitle(req.query.title);
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};
