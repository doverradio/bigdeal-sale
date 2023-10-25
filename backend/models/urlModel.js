const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    originalUrl: String,
    shortUrl: String,
    urlCode: String,
    clicks: { type: Number, default: 0 }
});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
