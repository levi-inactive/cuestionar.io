var express = require('express');
var router = express.Router();
var session = require('express-session');
router.use(session({secret: 'secret'}));
var sess;
/* GET signup page. */
router.get('/', function(req, res, next) {
    sess = req.session;
    res.render('signup', { });
    
});

/* POST signup information. */
router.post('/', function(req, res, next) {
    sess = req.session;
    // TODO: post to DB API.
    console.log(req.body);
    res.redirect('/login');
});

module.exports = router;
