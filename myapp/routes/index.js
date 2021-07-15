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

router.get('/index', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/anjing', (req, res) => {
  res.send('anjingos!')
})

router.get('/hitapi', (req, res) => {
  // res.send('cetak!');
  // var url = 'http://api.grevialabs.com/';
  var url = 'http://localhost/greviacom/api/user';
  // var hitapi = 'http://localhost/greviacom/api/user';

  res.render('ejs/modular/hitapi', {
    hitapi: url,
    ayam: 'goreng'
  });

  // let tes, message;

  // console.log(tes);
  // fetchData(url).then(aa => {
  //   // console.log(response);
  //   res.send(aa);
  // });

  // res.send('ayam ');
  // res.send(fetchData(url));
})

router.get('/sampleloop', (req, res) => {
  // index page
  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";
  console.log(tagline);
  res.render('ejs/modular/sampleloop', {
    mascots: mascots,
    tagline: tagline
  });

})

router.get('/mantab', (req, res) => {
  res.send('ini adalah mantab jiwa html')
})

router.get('/mantab/:id', (req, res) => {
  var check = req.params.id;
  if (!check) {
    next();
    res.send('mantab: param' + check)
    return;
  }
  res.send('biasa aja ');
})

module.exports = router;
