$(document).ready(() => {
    $('#enviar-btn').on('click', sendCuestionario);
});

function sendCuestionario() {
    var json = $('#object').val();
    var cuestionario = JSON.parse(json);
    
    cuestionario.preguntaList.forEach(pregunta => {
        respuesta = {
            idRespuesta: 0,
            idLlenado: 0
        }

        if (pregunta.isOpen) {
            respuesta.textoRespuesta = $(`#answer-${pregunta.idPregunta}`).val();
        } else {
            respuestaOpcionList = [];

            pregunta.opcionList.forEach(opcion => {
                respuestaOpcion = {
                    idOpcion: opcion.idOpcion,
                    opcionText: opcion.nombre,
                    selecionado: $(`#answer-${pregunta.idPregunta}-${opcion.idOpcion}`).is(':checked')
                }

                respuestaOpcionList.push(respuestaOpcion);
            });

            if (pregunta.isOpen)
                delete pregunta.isOpen;
            if (pregunta.isMultipleOption)
                delete pregunta.isMultipleOption;
            if (pregunta.isMultipleSelection)
                delete pregunta.isMultipleSelection;

            respuesta.respuestaOpcionList = respuestaOpcionList;
        }

        pregunta.respuesta = respuesta;
    });

    let data = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(cuestionario)
    }

    console.log('Now POSTing...');
    console.log(data);
    console.log(data.body);
    

    fetch('/answer', data)
    .then(response => console.log(response));
}