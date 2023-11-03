const mongoose = require('mongoose');

module.exports = {
    URL: process.env.DB_HOST,
    MONGOOSE: mongoose
};