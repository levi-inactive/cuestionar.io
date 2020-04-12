var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var session = require('express-session');
router.use(session({secret: 'secret'}));
var sess;

/* GET home page. */
router.get('/', function(req, res, next) {
    sess = req.session;
    
    console.log('Now in profile');
    console.log(sess);

    // TODO: Delete line 16.
    res.render('profile', { });

    // if (sess.username && typeof sess.username != undefined)
    //   res.render('profile', data);
    // else{
    //   res.redirect('/');
    // }

    /*
    
    fetch("http://localhost/api/answers/10")
    .then(function(response) {return response.json()})
    .then(function(json) {
      
      
    })
    */
  });
  
  router.delete('/:pin', function(req, res, next){
    sess = req.session;
    fetch()
  });
  
  module.exports = router; 