const express = require('express');
const transactionRoutes = require('./routes/transactionRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const sequelize = require('./config/db');

// Initialize the app
const app = express();

// Middleware
app.use(express.json());
app.use('/api', transactionRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Export the app instance
module.exports = app;
