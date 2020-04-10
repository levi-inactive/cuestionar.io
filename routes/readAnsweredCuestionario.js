var express = require('express');
var router = express.Router();
var fetch = require('node-fetch'); 
var session = require('express-session');
router.use(session({secret: 'secret'}));
var sess;

/* GET home page. */
router.get('/', function(req, res, next) {
  sess = req.session;
  var questions = [
    "Tu opinion acerca de las empresas que manufacturan telefonos respecto a la bateria no removible.",
    "Selecciona una marca de telefono preferida.",
    "Selecciona la(s) características que más valor le da a un teléfono en tu opinión."
];
  const data = {
    title: "Mi primer cuestionario", 
    pagination: "3",
    usuario: "Enrique Favila",
    questions: questions
  };
  res.render('read-answered-cuestionario', data);
  fetch("http://localhost/api/answers/10")
  .then(function(response) {return response.json()})
  .then(function(json) {
    
    
  })
});

router.delete('/:pin', function(req, res, next){
  sess = req.session;
  fetch()
});

module.exports = router; 
