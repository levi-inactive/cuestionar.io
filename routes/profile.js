var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var session = require('express-session');

router.use(session({secret: 'secret'}));

/* GET home page. */
router.get('/', function(req, res, next) {
    var sess=req.session;
    const data = {
      title: "Mi primer cuestionario", 
      username: "efavila",
      firstName: "Enrique",
      lastName: "Favila",
      tituloCuestionario: "Titulo de cuestionario"
    };
    console.log(sess);
    console.log("Este es el usuario que llega al perfil: " +sess.usernames)
    if (sess.username)
    res.render('profile', data);
    else{
      res.redirect('/');
    }
    /*
    
    fetch("http://localhost/api/answers/10")
    .then(function(response) {return response.json()})
    .then(function(json) {
      
      
    })
    */
  });
  
  router.delete('/:pin', function(req, res, next){
    fetch()
  });
  
  module.exports = router; 