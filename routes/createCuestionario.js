var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var session = require('express-session');
router.use(session({secret: 'secret'}));
var sess;

/* GET home page. */
router.get('/', function(req, res, next) {
  sess = req.session;
  res.render('create-cuestionario', {  });
  // if (sess.username && typeof sess.username != undefined)
  //   res.render('create-cuestionario', { title: 'Crear cuestionar.io' });
  // else{
  //   res.redirect('/');
  // }
}); 

router.post('/', function(req, res, next) {
  sess = req.session;

  data = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(req.body)
  }

  fetch('http://www.mocky.io/v2/5185415ba171ea3a00704eed', data)
  .then(response => {
      console.log(response);
      if (response.status == 200) {
        response.status = 201; // Del BACK para FRONT
        res.status = 201; // Del FRONT para CLIENT
        console.log('redirecting...');
        res.redirect('/profile');
      } else {
        console.log('error...');
        res.send(response);
      }
  })
  .catch(exception => console.log(exception));
});

module.exports = router;
