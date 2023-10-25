const express = require('express');
const router = express.Router();
const urlController = require('../controllers/shorten');

router.post('/shorten', urlController.shortenUrl);
router.get('/:urlCode', urlController.redirectUrl);

module.exports = router;
