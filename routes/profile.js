var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var session = require('express-session');
router.use(session({secret: 'secret'}));
var sess;

/* GET home page. */
router.get('/', function(req, res, next) {
    sess=req.session;
    var cuestionarioList;
    var data;
    fetch('http://localhost:8080/rest/service/cuestionariosBy/' + sess.username)
    .then(response => response.json())
    .then(response => { 
      cuestionario = response;
      data = {
        usuario: sess.username,
        cuestionarioList: cuestionarioList
      };
      res.render('profile', data)
    });
  });
  
  router.delete('/:pin', function(req, res, next){
    sess = req.session;
    fetch("http://localhost:8080/rest/service/deleteCuestionario/"+req.body)
    .then( response => response.json())
    .then(response => {
      if (response == true){
        //TODO respuesta aqui? Recergar la pagina aqui?
      }
    })
  });
  module.exports = router; 




/*
  function getCuestionariosByUser(username) {
    var json = fetch('http://localhost:8080/rest/service/cuestionariosByUser/'+ sess.username)
    .then(response => response.json())
    
    var jsonParseAsync = (jsonFile) => {
      console.log(jsonFile);
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(JSON.parse(jsonFile));
        })
      });
    }

    return jsonParseAsync(json);
  }
  */