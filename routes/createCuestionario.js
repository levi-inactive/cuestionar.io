var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var session = require('express-session');
var RandExp = require('randexp');

router.use(session({secret: 'secret'}));
var sess;

/* GET home page. */
router.get('/', function(req, res, next) {
  sess = req.session;

  //if (sess.username && typeof sess.username != undefined)
    res.render('create-cuestionario', { title: 'Crear cuestionar.io' });
  //else{
   //  res.redirect('/');
  //} 
}); 


router.post('/', function(req, res, next) {
  sess = req.session;
  req.body.codigo = new RandExp(/[a-zA-Z]{5}/).gen();
  req.body.fkUsuario = 3;
  req.body.idCuestionario = 0;
  console.log(req.body);
  var data={
    //usuario: 'root',//sess.username,
    cuestionario: req.body    
  }
  var requestObject = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(req.body)
  }

  fetch('http://localhost:8080/rest/service/cuestionarioConsultable', requestObject)
  .then(response => {
      console.log(response);
      if (response.body && response.body != 0) {
        console.log('redirecting...');
        res.redirect('/profile');
      } else {
        console.log('error al insertar el cuestionario');
        res.send(response);
      }
  })
  .catch(exception => console.log(exception));
});

module.exports = router;
