var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var session = require('express-session');
router.use(session({secret: 'secret'})); 
var sess;

/* GET home page. */
router.get('/', function(req, res, next) {
    sess=req.session;
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

    
    fetch("http://localhost:8080/rest/service/deleteCuestionario/"+req.params.idCuestionario, data)
    .then( response => response.json())
    .then(response => {
      if (response == true){
        //TODO respuesta aqui? Recergar la pagina aqui?
      }
    })
  });

  module.exports = router; 