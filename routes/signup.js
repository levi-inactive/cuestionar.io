var express = require('express');
var router = express.Router();

/* GET signup page. */
router.get('/', function(req, res, next) {

    res.render('signup', { });
    
});

/* POST signup information. */
router.post('/', function(req, res, next) {
    // TODO: post to DB API.
    console.log(req.body);
    res.redirect('/login');
});

module.exports = router;
