var express = require('express');
var router = express.Router();

//var fetch = require("node-fetch");

/* GET home page. */
router.get('/', function(req, res, next) {
  //fetch("http://localhost/api/answres/10")
  //.then(function(response) {return response.json()})
  //.then(function(json) {
    var questions = [
      "Tu opinion acerca de las empresas que manufacturan telefonos respecto a la bateria no removible.",
      "Selecciona una marca de telefono preferida.",
      "Selecciona la(s) características que más valor le da a un teléfono en tu opinión."
  ];
    const data = {
      title: "Mi primer cuestionario", 
      pagination: "3",
      usuario: "Enrique Favila",
      preguntas: questions
    };
    res.render('read-answered-cuestionario', data);
  //})

  //res.render('read-answered-cuestionario', { title: 'Titulo Cuestionario' });
});

module.exports = router; 
