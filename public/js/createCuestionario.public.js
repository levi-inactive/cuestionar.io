// const Swal = require('sweetalert2')

const QuestionType = {
    OPEN: 1,
    OPTION: 2,
    SELECTION: 3
}

let cuestionario = {
    cuestionarioTitle: '',
    description: ''
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
        id: nextQuestionId.valueOf(),
        questionTitle: '',
        type: QuestionType.OPEN,
        optionList: [],
        nextOptionId: 1
    }

    $('#new-question-container').append(`
    <div id=question-${question.id} class="row"> 
        <div class="col s6 m6 offset-s3 offset-m3 center-align">
            <div class="card">
                <div class="cart-content">
                    <div class="row">
                        <div class="input-field col s8 offset-m1">
                            <input 
                                id="question-title-${question.id}" 
                                name="question-title-${question.id}" 
                                type="text" 
                            >
                            <label for="question-title-${question.id}">Texto de la pregunta</label>
                        </div>
                        <div class="col s3">
                            <a 
                                id="question-delete-btn-${question.id}"
                                class="btn btn-small white red-text text-lighten-2 waves-effect waves-dark"
                            >
                                <i class="material-icons">close</i>
                            </a>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s10 offset-m1">
                            <select 
                                id="type-question-${question.id}" 
                                class="type-question-select"
                                name="type-question-${question.id}"
                            >
                                <option value="1" selected>Pregunta abierta</option>
                                <option value="2">Opción múltiple</option>
                                <option value="3">Selección múltiple</option>
                            </select>
                            <label for="type-question-${question.id}">Tipo de la pregunta</label>
                        </div>
                    </div>

                    <div id="option-container-${question.id}">
                        
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
    $(`#question-delete-btn-${question.id}`).on('click', (event) => {
        $(`#question-${question.id}`).remove();   
        questionList = questionList.filter(q => q.id !== question.id);
    });
}

function initializeSelect(question) {
    $('select').formSelect();

    $(`#type-question-${question.id}`).on('change', (event) => {
        $(`#option-container-${question.id}`).empty();
        question.optionList = [];

        if (event.target.value === "1")
            return;
        else if (event.target.value === "2")
            question.type = QuestionType.OPTION;
        else if (event.target.value === "3")
            question.type = QuestionType.SELECTION;

        $(`#option-container-${question.id}`).append(`
        <div class="row">
            <div class="input-field col s10 offset-m1">
                <div id="options-${question.id}"></div>
            </div>

            <div class="input-field col s10 offset-m1">
                <button 
                    id="add-option-btn-${question.id}"
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
    $(`#add-option-btn-${question.id}`).on('click', () => {
        option = {
            id: question.nextOptionId,
            optionText: ''
        }

        let multipleContent = `
            <label>
                <input 
                    type="${ question.type === QuestionType.OPTION ? "radio" : "checkbox" }"
                    disabled="disabled" 
                />
                <span></span>
            </label>
        `;

        $(`#options-${question.id}`).append(`
            <div 
                id="question-${question.id}-option-${option.id}"
                class="card"
            >
                <div class="card-content">
                    <div class="row">
                        <div class="col s2">
                            ${multipleContent}
                        </div>
                        <div class="text-input col s8">
                            <input 
                                id="option-text-question-${question.id}-option-${option.id}" 
                                type="text"
                                placeholder="Opción" 
                            />
                        </div>
                        <div class="col s2">
                            <a 
                                id="option-delete-btn-question-${question.id}-option-${option.id}"
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
        question.optionList.push(option);
    });
};

function initializeOption(question, option) {
    $(`#option-delete-btn-question-${question.id}-option-${option.id}`).on('click', () => {
        $(`#question-${question.id}-option-${option.id}`).remove();   
        question.optionList = question.optionList.filter(o => o.id !== option.id);
    });
}

function createCuestionario() {
    console.log('creating cuestionar.io');
    cuestionario.cuestionarioTitle = $(`#cuestionario-title`).val();
    cuestionario.description = $(`#cuestionario-description`).val();

    for (let i = 0; i < questionList.length; i++) {
        const question = questionList[i];
        question.questionTitle = $(`#question-title-${question.id}`).val();
        for (let j = 0; j < question.optionList.length; j++) {
            const option = question.optionList[j];
            option.optionText = $(`#option-text-question-${question.id}-option-${option.id}`).val();
        }
    }

    cuestionario.questionList = questionList;

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
            console.log(`Response status: ${response.status}`);
        }
    });
}