var request = require('superagent');
const axios = require('axios');


module.exports = function(app) {
  app.get('/about', (req, res) => {
    res.render('about.ejs');
  });
}