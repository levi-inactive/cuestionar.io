import React, { Component } from 'react';

class CreateQuestion extends Component {
    state = {  
        questionText: '',
        isObligatory: false
    }

    createQuestion = () => {
        
    }

    setQuestionText = (questionText) => {
        this.setState({ questionText });
    }

    render() { 
        return ( <div></div> );
    }
}
 
export default CreateQuestion;