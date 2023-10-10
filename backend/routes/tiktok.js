const express = require("express");
const router = express.Router();


const { getTikTokCode } = require('../controllers/tiktok');

router.get('/tiktokaccepted', getTikTokCode)

module.exports = router;