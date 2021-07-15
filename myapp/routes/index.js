var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */

function fetchData(urltarget) {
  // var url = 'http://api.grevialabs.com/';
  var url = urltarget;

  axios
    .get(url)
    .then(function (resp) {
      tes = resp;
      message = resp.data.message;
      // return message;
      console.log(message);
    });


  // const cetak = await fetch(url);

  // const str = await cetak.json();
}

router.get('/', (req, res) => {
  res.send('Hello from Express!')
})

module.exports = router;
