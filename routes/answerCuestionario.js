var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var session = require('express-session');
router.use(session({secret: 'secret'}));
var sess;
var cuestionario;

/* GET cuestionar.io answering page. */
router.get('/:codigo', function(req, res, next) {
  sess = req.session;

  let code = req.params.codigo;

  fetch(`http://localhost:8080/rest/service/cuestionarioConsultable/${code}`)
  .then(response => response.json())
  .then(response => {
    cuestionario = response;
    cuestionario.usuario = sess.username;
    cuestionario.preguntaList.forEach(pregunta => {
      switch (pregunta.tipoPregunta) {
        case 'Pregunta Abierta':
          pregunta.isOpen = true;
          break;
        case 'Pregunta Opcion Multiple':
          pregunta.isMultipleOption = true;
          break;
        case 'Pregunta Seleccion Multiple':
          pregunta.isMultipleSelection = true;
          break;
      }
    });
    cuestionario.object = JSON.stringify(cuestionario);

    return res.render('answer-cuestionario', cuestionario);
  });
});

router.post('/', function(req, res, next) {
  console.log('Received in POST:');
  console.log(req.body);
  console.log('Now POSTing...');

  var resquestObject = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(req.body)
  }

  fetch('http://localhost:8080/rest/service/respuestas', requestObject)
  .then(response => {
    console.log(response);
    res.send(response);
  });
});

module.exports = router;
