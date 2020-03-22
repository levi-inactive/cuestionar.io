import React, { Component } from 'react';
import CreateQuestion from './createQuestion'

import { Row, Col, Card, TextInput, Icon, Button } from 'react-materialize';

class CreateCuestionario extends Component {
    state = { 
        title: 'CuestionarioTitle',
        createQuestionList: []
    }

    handleTitleChange = (event) => {
        const title = event.target.value;
        this.setState({ title });
    }

    handleDeleteQuestion = id => {
        const createQuestionList = this.state.createQuestionList.filter(cq => cq.id !== id);
        this.setState({ createQuestionList });
    }

    handleQuestionTextChange = (event, createQuestion) => {
        let questionText = event.target.value;
        createQuestion.questionText = questionText;
        const createQuestionList = this.state.createQuestionList.filter(cq => cq.id !== createQuestion.id ? cq : createQuestion);
        this.setState({ createQuestionList });
    }

    handleAddQuestion = () => {
        const createQuestionList = this.state.createQuestionList;
        createQuestionList.push({
            id: createQuestionList.length,
            questionText: '',
            isObligatory: false,
            mode: 'open',
            createMultiple: {
                handleAddOption: this.handleAddOption
            },
            handleDelete: this.handleDeleteQuestion,
            handleQuestionTextChange: this.handleQuestionTextChange,
            handleQuestionModeChange: this.handleQuestionModeChange
        });

        this.setState({ createQuestionList });
    }

    handleAddOption = (questionId) => {
        const createQuestion = this.state.createQuestionList.filter(q => q.id === questionId)[0];
        
        if ("optionList" in createQuestion.createMultiple) {
            const optionList = createQuestion.createMultiple.optionList;
            const newLength = optionList.length+1;
            optionList.push({
                id: newLength,
                optionText: `Opción ${newLength}`,
                handleDeleteOption: this.handleDeleteOption
            });

            createQuestion.createMultiple.optionList = optionList;
            const createQuestionList = this.state.createQuestionList.filter(q => q.id === questionId ? createQuestion : q);
            this.setState({ createQuestionList });
        }
    }

    handleDeleteOption = (questionId, optionId) => {
        const createQuestion = this.state.createQuestionList.filter(q => q.id === questionId)[0];
        
        if ("optionList" in createQuestion.createMultiple) {
            
            const optionList = createQuestion.createMultiple.optionList.filter(o => o.id !== optionId);
            console.log('new optionList', optionList);  
            createQuestion.createMultiple.optionList = optionList;
            const createQuestionList = this.state.createQuestionList.filter(q => q.id === questionId ? createQuestion : q);
            this.setState({ createQuestionList });
        }
    }

    handleQuestionModeChange = (event, createQuestion) => {
        createQuestion.mode = event.target.value;
        
        if (createQuestion.mode !== 'open') {
            createQuestion.createMultiple.optionList = [
                {
                    id: 1, 
                    optionText: 'Opción 1',
                    handleDeleteOption: this.handleDeleteOption
                }
            ]
        } else {
            if ("optionList" in createQuestion) {
                delete createQuestion.optionList;
            }
        }

        const createQuestionList = this.state.createQuestionList.filter(cq => cq.id !== createQuestion.id ? cq : createQuestion);;
        this.setState({ createQuestionList });
    }

    render() { 
        return ( 
            <React.Fragment>
                <Row>
                    <Col s={12} m={12}>
                        <Card>
                            <Row>
                                <Col s={12} m={12}>
                                    <TextInput 
                                        style={{width:'100%', fontSize:'30px'}}  
                                        label="Título de Cuestionario" 
                                        className="validate" 
                                        onChange={this.handleTitleChange}
                                    />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

                { this.state.createQuestionList.map(cq => <CreateQuestion createQuestion={cq} />) }

                <Row>
                    <Col s={12} m={12}>
                        <Card className="center">
                            <Button 
                                large
                                waves="light"
                                onClick={this.handleAddQuestion}>
                                Añadir pregunta

                                <Icon left>add</Icon>
                            </Button>

                            <Button 
                                large
                                waves="light"
                                className='green darken-1'
                                onClick={() => {}}>
                                Crear Cuestionario

                                <Icon left>send</Icon>
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}
 
export default CreateCuestionario;