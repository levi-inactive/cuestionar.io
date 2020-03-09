import React, { Component } from 'react';

class CreateCuestionario extends Component {
    state = { 
        title: '',
        createQuestionList: []
    }

    setTitle = (title) => {
        this.setState({ title });
    }

    createQuestion = (question) => {
        const createQuestionsList = this.state.createQuestionList;
        createQuestionsList.push(question);
        this.setState({ createQuestionsList });
    }

    submit = () => {
        
    }

    render() { 
        return ( <div></div> );
    }
}
 
export default CreateCuestionario;