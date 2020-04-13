var express = require('express');
var router = express.Router();
var fetch = require('node-fetch'); 
var session = require('express-session');
router.use(session({secret: 'secret'}));
var sess;
 
/* GET home page. */
router.get('/', function(req, res, next) {
  sess = req.session;
  
  let data = {
    title: "Opinion Celular",
    fillList: [
      {
        usuario: "root",
        answeredQuestionList: [
          {
            questionText: "Tu opinion acerca de las empresas que manufacturan telefonos respecto a la bateria no removible.",
            answerText: "Yo pienso que la estrategia detrás de esto es mayor integridad estructural al telefono y garantizar que el usuario promedio termine comprando uno nuevo cuando la bateria empiece a fallar"
          },
          {
            questionText: "Selecciona una marca de telefono preferida.",
            multipleOption: true,
            optionList: [
              { optionText: "OnePlus", selected: true },
              { optionText: "Apple" },
              { optionText: "HTC" },
              { optionText: "Samsung" },
              { optionText: "Motorolateam" }
            ]
          },
          {
            questionText: "Selecciona la(s) características que más valor le da a un teléfono en tu opinión.",
            multipleSelection: true,
            optionList: [
              { optionText: "Camara" },
              { optionText: "Autonomia", selected: true },
              { optionText: "Rapidez" },
              { optionText: "Ecosistema", selected: true },
              { optionText: "Caracteristicas", selected: true }
            ]
          }
        ]
      },
      {
        usuario: "kiks",
        answeredQuestionList: [
          {
            questionText: "Tu opinion acerca de las empresas que manufacturan telefonos respecto a la bateria no removible.",
            answerText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum mollis ipsum. Proin sed finibus arcu. Suspendisse blandit interdum dolor. Etiam eu semper velit."
          },
          {
            questionText: "Selecciona una marca de telefono preferida.",
            multipleOption: true,
            optionList: [
              { optionText: "OnePlus"},
              { optionText: "Apple", selected: true  },
              { optionText: "HTC" },
              { optionText: "Samsung" },
              { optionText: "Motorolateam" }
            ]
          },
          {
            questionText: "Selecciona la(s) características que más valor le da a un teléfono en tu opinión.",
            multipleSelection: true,
            optionList: [
              { optionText: "Camara", selected: true  },
              { optionText: "Autonomia"},
              { optionText: "Rapidez", selected: true },
              { optionText: "Ecosistema" },
              { optionText: "Caracteristicas", selected: true }
            ]
          }
        ]
      },
      {
        usuario: "epicLevi",
        answeredQuestionList: [
          {
            questionText: "Tu opinion acerca de las empresas que manufacturan telefonos respecto a la bateria no removible.",
            answerText: "Consectetur adipiscing elit. Lorem ipsum dolor sit amet. Ut interdum mollis ipsum. Proin sed finibus arcu. Suspendisse blandit interdum dolor. "
          },
          {
            questionText: "Selecciona una marca de telefono preferida.",
            multipleOption: true,
            optionList: [
              { optionText: "OnePlus" },
              { optionText: "Apple" },
              { optionText: "HTC" },
              { optionText: "Samsung", selected: true },
              { optionText: "Motorolateam" }
            ]
          },
          {
            questionText: "Selecciona la(s) características que más valor le da a un teléfono en tu opinión.",
            multipleSelection: true,
            optionList: [
              { optionText: "Camara" },
              { optionText: "Autonomia", selected: true},
              { optionText: "Rapidez", selected: true },
              { optionText: "Ecosistema", selected: true },
              { optionText: "Caracteristicas" }
            ]
          }
        ]
      }
    ]
  };

  res.render('read-answered-cuestionario', data);
  
  // fetch("http://localhost/api/answers/10")
  // .then(function(response) {return response.json()})
  // .then(function(json) {  
    
  // });
});

router.delete('/:pin', function(req, res, next){
  sess = req.session;
  fetch()
});

module.exports = router; 
