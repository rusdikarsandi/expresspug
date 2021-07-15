var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', (req, res) => {
    res.send('yametefrom axios hit');
});

module.exports = router;