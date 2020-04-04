var express = require('express');
var router = express.Router();

//var fetch = require("node-fetch");

/* GET home page. */
router.get('/', function(req, res, next) {
  //fetch("http://localhost/api/answres/10")
  //.then(function(response) {return response.json()})
  //.then(function(json) {
    const data = {
      title: "Mi primer cuestionario", 
      pagination: "3",
      usuario: "Enrique Favila"
    };
    res.render('read-answered-cuestionario', data);
  //})

  //res.render('read-answered-cuestionario', { title: 'Titulo Cuestionario' });
});

module.exports = router; 
