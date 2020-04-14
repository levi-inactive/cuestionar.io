var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var session = require('express-session');
router.use(session({secret: 'secret'}));
var sess;


/* GET login page. */
router.get('/', function(req, res, next) {
  sess = req.session;

  res.render('login', { });
});

/* POST to handle login. */
router.post('/', function(req, res, next) {
  sess = req.session;
  console.log(req.body);
  fetch("http://localhost:8080/rest/service/validarUsuario", {
    method:"post",
    body: req.body.username
  })
  .then(response => response.json())
  .then( function (response){
    if(response == true){
      var body = {
        usuario: req.body.username,
        contrasena: req.body.password
      }  

      fetch("http://localhost:8080/rest/service/validarSesion", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response > 0){
          req.session.username=body.usuario;
          req.session.idUsuario=response;
          res.redirect('/profile');
        }
        else
          res.render('login', {error: "invalid_session"})
      })
    }else{
      res.render('login', {error: "wrong_user"}); 
    }
  }
  );
  
  
});

module.exports = router;
