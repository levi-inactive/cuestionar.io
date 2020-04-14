var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var session = require('express-session');
router.use(session({secret: 'secret'})); 
var sess;

/* GET home page. */
router.get('/', function(req, res, next) {
    sess=req.session;
    console.log("idUsuario:  "+sess.idUsuario);
    var data;
    fetch('http://localhost:8080/rest/service/cuestionariosBy/' + sess.username)
    .then(response => response.json())
    .then(response => { 
      var cuestionario = response;
      data = {
        usuario: sess.username,
        cuestionarioList: cuestionario
      };
      res.render('profile', data)
    });
  });
  
  router.delete('/:idCuestionario', function(req, res, next){
    sess = req.session;

    console.log("Deleting cuestionario.io:", req.params.idCuestionario);

    let data = {
      method:"delete"
    }

    var URI = "http://localhost:8080/rest/service/cuestionario/"+req.params.idCuestionario;
    console.log("URI de delete: " + URI);

    fetch(URI, data)
    .then( response => response.json())
    .then(response => {
      if (response == true){
        //TODO respuesta aqui? Recergar la pagina aqui?
      }
    })
  });

  module.exports = router; 