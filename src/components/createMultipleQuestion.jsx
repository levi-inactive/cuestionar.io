import React, { Component } from 'react';
import CreateQuestion from './createQuestion'

class CreateMultipleQuestion extends CreateQuestion {
    state = {  
        options: []
    }

    addOption = (option) => {
        const options = this.state.options;
        options.push(option);
        this.setState({ options });
    }

    render() { 
        return ( <div></div> );
    }
}
 
export default CreateMultipleQuestion;