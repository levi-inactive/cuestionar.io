var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var session = require('express-session');
router.use(session({secret: 'secret'}));
var sess;


/* GET signup page. */
router.get('/', function(req, res, next) {
    sess = req.session;
    res.render('signup', { });
    
});

/* POST signup information. */
router.post('/', function(req, res, next) {
    sess = req.session;
    // TODO: post to DB API.
    console.log(req.body);
    var data={
        method: "post",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(
            {
                usuario:req.body.username,
                contrasena: req.body.password,
                idUsuario:0,
                nombre:""
            }
        )
    }
    console.log("data: ");
    console.log(data);
    fetch("http://localhost:8080/rest/service/usuario", data)
    
    .then(function(response){
        console.log(response);
        if(response != 0){
            sess.idUsuario = response;
            res.redirect('/login');
        }else{
            res.render('signup', {error: "wrong_user"});
        }
    });
});

module.exports = router; 
