var express = require('express');
var router = express.Router();
var session = require('express-session');
router.use(session({secret: 'secret'}));
var sess;
/* GET home page. */
router.get('/', function(req, res, next) {
  sess = req.session;
  res.render('index', { title: 'Express' });
});

module.exports = router;
