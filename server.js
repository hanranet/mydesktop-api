const express = require('express');
require('dotenv').config();
const logger = require('./middleware/logger');

// Route files
const receipts = require('./routes/receipts');

const app = express();

app.use(logger);

// Mount routers
app.use('/api/v1/receipts', receipts);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);