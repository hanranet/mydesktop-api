const express = require('express');
require('dotenv').config();
const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require('./db');

// Connect to database
connectDB();

// Route files
const receipts = require('./routes/receipts');

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/receipts', receipts);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);