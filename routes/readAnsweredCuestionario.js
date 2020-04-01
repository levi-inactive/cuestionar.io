var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('read-answered-cuestionario', { title: 'Titulo Cuestionario' });
});

module.exports = router;
