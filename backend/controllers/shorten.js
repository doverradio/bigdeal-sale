const Url = require('../models/urlModel');
const crypto = require('crypto')

const log = console.log

exports.shortenUrl = async ( req, res ) =>
{
    try {
        const { originalUrl } = req.body;

        const urlCode = crypto.randomBytes(4).toString('hex') // Generate a unique code for the url

        const url = new Url({
            originalUrl,
            shortUrl: `bigdeal.sale/${urlCode}`,
            urlCode
        })

        await url.save()

        res.json(url)

    } catch ( e ) {
        log( `shorten e : `, e)
        res.status( 400 ).json({ error: e })
    }
}


exports.redirectUrl = async (req, res) => {
    const url = await Url.findOne({ urlCode: req.params.urlCode });

    if (url) {
        res.redirect(url.originalUrl);
    } else {
        res.status(404).send('URL not found');
    }
};