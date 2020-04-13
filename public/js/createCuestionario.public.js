// const Swal = require('sweetalert2')

const QuestionType = {
    OPEN: "Pregunta Abierta",
    OPTION: "Pregunta Opcion Multiple",
    SELECTION: "Pregunta Seleccion Multiple"
}
 
let cuestionario = {
    nombre: '',
    descripcion: ''
};
let questionList = [];
let nextQuestionId = 1;

$(document).ready(() => {
    const addQuestionBtn = $('#add-question-btn');
    const createBtn = $('#create-btn');

    addQuestionBtn.on('click', addQuestion);
    createBtn.on('click', createCuestionario);
})

function addQuestion() {
    question = {
        fkCatalogoPregunta: 0,
        fkCuestionario: 0,
        fkTipoPregunta: 0,
        idPregunta: nextQuestionId.valueOf(),
        nombre: '',
        tipoPregunta: QuestionType.OPEN,
        opcionList: [],
        nextOptionId: 1
    }

    $('#new-question-container').append(`
    <div id=question-${question.idPregunta} class="row"> 
        <div class="col s6 m6 offset-s3 offset-m3 center-align">
            <div class="card">
                <div class="cart-content">
                    <div class="row">
                        <div class="input-field col s8 offset-m1">
                            <input 
                                id="question-title-${question.idPregunta}" 
                                name="question-title-${question.idPregunta}" 
                                type="text" 
                            >
                            <label for="question-title-${question.idPregunta}">Texto de la pregunta</label>
                        </div>
                        <div class="col s3">
                            <a 
                                id="question-delete-btn-${question.idPregunta}"
                                class="btn btn-small white red-text text-lighten-2 waves-effect waves-dark"
                            >
                                <i class="material-icons">close</i>
                            </a>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s10 offset-m1">
                            <select 
                                id="type-question-${question.idPregunta}" 
                                class="type-question-select"
                                name="type-question-${question.idPregunta}"
                            >
                                <option value="Pregunta Abierta" selected>Pregunta abierta</option>
                                <option value="Pregunta Opcion Multiple">Opción múltiple</option>
                                <option value="Pregunta Seleccion Multiple">Selección múltiple</option>
                            </select>
                            <label for="type-question-${question.idPregunta}">Tipo de la pregunta</label>
                        </div>
                    </div>

                    <div id="option-container-${question.idPregunta}">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    `)
    .promise()
    .then(initializeQuestionDeleteBtn(question))
    .done(initializeSelect(question));

    nextQuestionId++;
    questionList.push(question);
}

function initializeQuestionDeleteBtn(question) {
    $(`#question-delete-btn-${question.idPregunta}`).on('click', (event) => {
        $(`#question-${question.idPregunta}`).remove();   
        questionList = questionList.filter(q => q.idPregunta !== question.idPregunta);
    });
}

function initializeSelect(question) {
    $('select').formSelect();

    $(`#type-question-${question.idPregunta}`).on('change', (event) => {
        $(`#option-container-${question.idPregunta}`).empty();
        question.opcionList = [];

        if (event.target.value === QuestionType.OPEN)
            return;
        else if (event.target.value === QuestionType.OPTION)
            question.tipoPregunta = QuestionType.OPTION;
        else if (event.target.value === QuestionType.SELECTION)
            question.tipoPregunta = QuestionType.SELECTION;

        $(`#option-container-${question.idPregunta}`).append(`
        <div class="row">
            <div class="input-field col s10 offset-m1">
                <div id="options-${question.idPregunta}"></div>
            </div>

            <div class="input-field col s10 offset-m1">
                <button 
                    id="add-option-btn-${question.idPregunta}"
                    class="btn-floating btn-small green lighten-2 waves-effect waves-light"
                >
                    <i class="material-icons">add</i>
                </button>
            </div>
        </div>
        `)
        .promise()
        .done(addOption(question));
    });
}

function addOption(question) {
    $(`#add-option-btn-${question.idPregunta}`).on('click', () => {
        option = {
            fkCatalogoOpcion:0,
            fkPregunta:0,
            idOpcion: question.nextOptionId,
            nombre: '',
        }

        let multipleContent = `
            <label>
                <input 
                    type="${ question.tipoPregunta === QuestionType.OPTION ? "radio" : "checkbox" }"
                    disabled="disabled" 
                />
                <span></span>
            </label>
        `;

        $(`#options-${question.idPregunta}`).append(`
            <div 
                id="question-${question.idPregunta}-option-${option.idOpcion}"
                class="card"
            >
                <div class="card-content">
                    <div class="row">
                        <div class="col s2">
                            ${multipleContent}
                        </div>
                        <div class="text-input col s8">
                            <input 
                                id="option-text-question-${question.idPregunta}-option-${option.idOpcion}" 
                                type="text"
                                placeholder="Opción" 
                            />
                        </div>
                        <div class="col s2">
                            <a 
                                id="option-delete-btn-question-${question.idPregunta}-option-${option.idOpcion}"
                                class="red-text text-lighten-2 waves-effect waves-light"
                            >
                                <i class="material-icons">close</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `)
        .promise()
        .done(initializeOption(question, option));

        question.nextOptionId++;
        question.opcionList.push(option);
    });
};

function initializeOption(question, option) {
    $(`#option-delete-btn-question-${question.idPregunta}-option-${option.idOpcion}`).on('click', () => {
        $(`#question-${question.idPregunta}-option-${option.idOpcion}`).remove();   
        question.opcionList = question.opcionList.filter(o => o.id !== option.idOpcion);
    });
}

function createCuestionario() {
    console.log('creating cuestionar.io');
    cuestionario.nombre = $(`#cuestionario-title`).val();
    cuestionario.descripcion = $(`#cuestionario-description`).val();

    for (let i = 0; i < questionList.length; i++) {
        const question = questionList[i];
        question.nombre = $(`#question-title-${question.idPregunta}`).val();
        for (let j = 0; j < question.opcionList.length; j++) {
            const option = question.opcionList[j];
            option.nombre = $(`#option-text-question-${question.idPregunta}-option-${option.idOpcion}`).val();
        }
    }

    cuestionario.preguntaList = questionList;

    data = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(cuestionario)
    }
    
    fetch('/create', data)
    .then(response => {
        if (response.status != 200) {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un error al crear tu Cuestionar.io',
                icon: 'error',
                showConfirmButton: false,
                timer: 2000
            });
        } else {
            console.log(`idCuestionario creado: ${response.body}`)
            console.log(`Response status: ${response.status}`);
        }
    });
}