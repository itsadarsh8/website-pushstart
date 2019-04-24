const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs'); // set up ejs for templating
require('./routes/routes.js')(app); // load our routes and pass in our app and fully configured passport

app.set('About us', 'ejs'); // set up ejs of About us
require('./routes/about.js')(app); // load our routes and pass in our app and fully configured passport

const PORT = process.env.PORT || 5003;

app.listen(PORT, console.log(`Server started on ${PORT}`));
