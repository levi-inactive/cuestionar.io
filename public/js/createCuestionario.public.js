const QuestionType = {
    OPEN: 1,
    OPTION: 2,
    SELECTION: 3
}
let questionList = [];
let nextQuestionId = 1;

$(document).ready(() => {
    const addQuestionBtn = $('#add-question-btn');

    addQuestionBtn.on('click', addQuestion);
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
    <div id=${question.id} class="row"> 
        <div class="col s6 m6 offset-s3 offset-m3 center-align">
            <div class="card">
                <div class="cart-content">
                    <div class="row">
                        <div class="input-field col s10 offset-m1">
                            <input 
                                id="question-title-${question.id}" 
                                name="question-title-${question.id}" 
                                type="text" 
                            >
                            <label for="question-title-${question.id}">Texto de la pregunta</label>
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
    .done(initializeSelect(question));

    nextQuestionId++;
    questionList.push(question);
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
                    class="btn-floating btn-small btn-color waves-effect waves-light"
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
            id: question.nextOptionId
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
                            <button 
                                id="option-delete-btn-question-${question.id}-option-${option.id}"
                                class="btn-floating btn-small red lighten-2 waves-effect waves-light"
                            >
                                <i class="material-icons">delete</i>
                            </button>
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