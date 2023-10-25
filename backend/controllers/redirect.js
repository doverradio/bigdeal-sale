const Url = require('../models/urlModel');
const crypto = require('crypto')

const log = console.log


exports.redirectUrl = async (req, res) => {
    const url = await Url.findOne({ urlCode: req.params.urlCode });

    if (url) {
        res.redirect(url.originalUrl);
    } else {
        res.status(404).send('URL not found');
    }
};