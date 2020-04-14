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
    .then(function(response) {
        //console.log(response);
        return response.json();
    })
    .then(function(fillList) {
        let i = 0;
        while (fillList[i]) {
            const fill = fillList[i];

            let j = 0;
            while (fill.preguntaList[j]) {
                const pregunta = fill.preguntaList[j];
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

                

                j++;
            }
            i++;
        }

        console.log(fillList[0].preguntaList[1].respuesta);

        let data = {
            title: fillList[0].nombre,
            fillList: fillList
        }
    
        res.render('read-answered-cuestionario', data);
    });
});


module.exports = router; 
