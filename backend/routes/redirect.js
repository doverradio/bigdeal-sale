const express = require('express');
const router = express.Router();
const { redirectUrl } = require('../controllers/redirect');

router.get('/:urlCode', redirectUrl);

module.exports = router;
