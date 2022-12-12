// Assignment link:- https://docs.google.com/document/d/1fsz27ekIG7l_FBSL1mIw-1vXTDNJun3HNrP-EG4oR94/edit


const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(3000, function() {
    console.log('Express app running on port ' + 3000)
});

