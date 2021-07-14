var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var dotenv = require('dotenv').config();

// REGISTER ROUTES   
// like a controllers
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// REGISTER DATABASE CONNECTION
// NO NEED IF USING API
var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Mysql Connected!");

  // var sql = "SELECT * FROM wal_absence LIMIT 10"

  con.query("SELECT * FROM wal_absence LIMIT 10", function (err, result) {
    if (err) throw err;
    // console.log("Result: " + result);
    result.forEach((row) => {
      console.log(`${row.absence_id} is in ${row.input_date}`);
    });
  });
});

// con.end((err) => {
// // The connection is terminated gracefully
// // Ensures all previously enqueued queries are still
// // before sending a COM_QUIT packet to the MySQL server.
// });

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.get('/mantab', (request, response) => {
  response.send('ini adalah mantab jiwa html')
})

app.get('/mantab/:id', (request, response) => {
  var check = request.params.id;
  if (!check) {
    next();
    response.send('mantab: param' + check)
    return;
  }
  response.send('biasa aja ');
})

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${process.env.PORT}`)
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Oopooopsy daisy... Page Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
