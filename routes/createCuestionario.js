var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('create-cuestionario', { title: 'Crear cuestionar.io' });
});

module.exports = router;
