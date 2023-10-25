const Url = require('../models/urlModel');
const crypto = require('crypto')

const log = console.log


exports.redirectUrl = async (req, res) => {
    const url = await Url.findOne({ urlCode: req.params.urlCode });


    if (url) {
        console.log(`Found URL: ${url.originalUrl} with clicks: ${url.clicks}`);
        
        if (req.get('Purpose') !== 'prefetch') {
            // Increment the click count for this URL
            url.clicks = url.clicks + 1;
            await url.save();
            console.log(`Updated clicks count: ${url.clicks}`);
        }

        res.redirect(url.originalUrl);
    } else {
        res.status(404).send('URL not found');
    }
};