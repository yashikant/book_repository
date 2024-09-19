const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use('/books', bookRoutes);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
