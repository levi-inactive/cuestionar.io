var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { });
});

/* POST to handle login. */
router.post('/', function(req, res, next) {
  // TODO: handle login via DB API.
  // TODO: not logging request body.
  console.log('yo im handling post');
  console.log(req.body);
  
  // TODO: create profile view and router.
  // TODO: pass user object.
  
  //res.redirect('/profile');
});

module.exports = router;
