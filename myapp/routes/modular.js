const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();
// var axios = require('axios');

// declare 
var axioshitRoutes = require('./modularRoutes/axioshit');

router
    .get('/', function() {

    })
    .use('/axioshit', axioshitRoutes);

router.get('/about', function(req, res) {
    res.render('ejs/modular/about');
})

router.get('/hitapi', (req, res) => {
    // res.send('cetak!');
    var url = 'http://api.grevialabs.com/';
    // var url = 'http://localhost/greviacom/api/user';
    // var hitapi = 'http://localhost/greviacom/api/user';

    var resdata;
    var apimessage;

    async function hitdata() {
      try {
        const {data: resp} = await axios.get(url);
        return resp.data.message;
      } catch (error) { 
        console.log(error);
      }
    }

    // axios
    // .get(url)
    // .then(function (response) {
    //   // console.log(response);
    //   var resdata = response.data.message ;
    //   // resdata = JSON.stringify(response);
    //   console.log('ini resdata');
    //   console.log(resdata);
    //   apimessage = response.data;
    // })
    // .catch(function (error) {
    //   consol e.log(error)
    // });

    // console.log(hitdata()); 
    resdata = hitdata();
  
    // console.log('tes hitapi ');
    // console.log('resdata');
    // console.log(resdata);
    // console.log(resdata);
    // console.log(resdata);
    res.render('ejs/modular/hitapi', {
      hitapi: url,
      ayam: 'goreng',
      apimessage: apimessage,
      resdata: resdata
    });
  
});

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