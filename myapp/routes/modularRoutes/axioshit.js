var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', (req, res) => {
    res.render('./ejs/modular/axioshit');
});

module.exports = router;