var request = require('superagent');
const axios = require('axios');


module.exports = function(app) {
  app.get('/', (req, res) => {
    res.render('index.ejs');
  });
  
  app.get('/index', (req, res) => {
    res.render('index.ejs');
  });
  app.get('/about', (req, res) => {
    res.render('about.ejs');
  });
  

  var mailchimpInstance   = 'us7',
      listUniqueId        = '505034982f',
      mailchimpApiKey     = '50291e8d77d32a29c5dd3d882fafb123-us7';
  
    app.post('/signup', function (req, res) {
      request
          .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
          .set('Content-Type', 'application/json;charset=utf-8')
          .set('Authorization', 'Basic ' + mailchimpApiKey)
          .send({
            'email_address': req.body.email,
            'status': 'subscribed'
          })
              .end(function(err, response) {
                if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
                  res.redirect('/index');
                } else {
                  res.send('Sign Up Failed :(');
                }
            });
  });
  
  // Signup Route
  // app.post('/signup', (req, res) => {
  //   const email = req.body.email;

  //   const PostData = {
  //     email_address: email,
  //     status: 'subscribed'
  //   }



    // axios({
    //   method: 'post',
    //   url: 'https://us7.api.mailchimp.com/3.0/lists/505034982f',
    //   data: {
    //     "email_address": email,
    //     "status": 'subscribed',
    //     "merge_fields": {}
    //   },
    //   Auth: {
    //     password: '50291e8d77d32a29c5dd3d882fafb123' 
    //   },
    //   headers: {
    //     'Authorization': '50291e8d77d32a29c5dd3d882fafb123-us7'
    //   }
    // }).then(res => {
    //   console.log('res: ' + res)
    // }).catch(err => {
    //   console.log('error hai bhai: ', err)
    // })

    // if (!email) {
      
    //   res.send('fail');
    //   console.log('--------working fail 0-------');
    //   return;
    // }
  
    // const data = {
    //   members: [
    //     {
    //       email_address: email,
    //       status: 'subscribed'
    //     }
    //   ]
    // };
  
    // const postData = JSON.stringify(data);
    //   console.log('post data' + postData);
    // const options = {
    //   url: 'https://us7.api.mailchimp.com/3.0/lists/c980fffd9c',
    //   method: 'POST',
    //   headers: {
    //     Authorization: 'auth 50291e8d77d32a29c5dd3d882fafb123-us7'
    //   },
    //   body: postData
    // };
  
    // request(options, (err, response) => {
    //   if (err) {
    //     console.log('--------working fail-------');
    //     res.send('fail');
    //     console.log(err);
    //   } else {
    //     if (response.statusCode === 200) {
    //       // res.redirect('/');
    //       console.log('status 200');
    //     } else {
    //       console.log('--------working fail 2-------');
    //       res.send('fail');
    //     }
    //   }
    // });
  // });
  // 
}