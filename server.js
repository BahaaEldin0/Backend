const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./models/users/userRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

//Constants
const PORT = process.env.PORT || 3000;

//Routes
app.use('/api/users', userRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

