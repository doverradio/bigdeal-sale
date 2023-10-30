
const log = console.log;


exports.getStats = async (req, res) => {
    const url = await Url.findOne({ urlCode: req.params.urlCode });
    if (url) {
        res.json({
            originalUrl: url.originalUrl,
            shortenedUrl: `https://bigdeal.sale/${url.urlCode}`,
            clicks: url.clicks
        });
    } else {
        res.status(404).send('URL not found');
    }
};
