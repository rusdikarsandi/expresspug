var express = require('express');
var axios = require('axios');
var router = express.Router();

router.get('/axioshit', (req, res) => {
    // res.send('cetak!');
    // var url = 'http://api.grevialabs.com/';
    var url = 'http://localhost/greviacom/api/user';
    // var hitapi = 'http://localhost/greviacom/api/user';
  
    console.log('doing hit to local');
    console.log(url);
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

  module.exports = router;