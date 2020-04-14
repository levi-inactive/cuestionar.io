var express = require('express');
var router = express.Router();
var fetch = require('node-fetch'); 
var session = require('express-session');
router.use(session({secret: 'secret'}));
var sess;
 
/* GET home page. */
router.get('/:codigo', function(req, res, next) {
    sess = req.session;
    let code = req.params.codigo;
  
    let uri = `http://localhost:8080/rest/service/cuestionarioConsultableRespondido/${code}`;

    fetch(uri)
    .then(function(response) {return response.json()})
    .then(function(json) { return JSON.parse(json) })
    .then(function(fillList) {  
        fillList.forEach(fill => {
            fill.preguntaList.forEach(pregunta => {
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
    
                pregunta.opcionList.forEach(opcion => {
                    if (pregunta
                        .respuesta
                        .respuestaOpcionList
                        .includes(opcion.idOpcion)) {
                            opcion.selected = true;
                    }
                });
            });
        });

        let data = {
            title: fillList[0].nombre,
            fillList: fillList
        }
    
        res.render('read-answered-cuestionario', data);
    });
});


module.exports = router; 
