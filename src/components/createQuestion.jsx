import React, { Component } from 'react';

import { Row, Col, Card, TextInput, Select } from 'react-materialize';

import CreateMultiple from './createMultiple';

class CreateQuestion extends Component {
    state = {  
        questionText: '',
        isObligatory: false,
        mode: 'openQuestion',
        createMultiple: null
    }

    createQuestion = () => {
        
    }

    setQuestionText = (questionText) => {
        this.setState({ questionText });
    }

    handleChange = (event) => {
        console.log('Handling change');

        let { name, value } = event.target;
        const mode = value;
        this.setState({ mode });

        if (this.state.mode !== 'openQuestion') {
            const createMultiple = { 
                optionList: [
                    { label: 'Option' }
                ] 
            }
            this.setState({ createMultiple });
        } 
    }

    render() { 
        return ( 
            <Row>
                <Col s={12} m={12}>
                    <Card
                        actions={[
                            <a key="1" href="#">Delete</a>
                        ]}
                    >
                        <form>
                            <Col s={6} className="input-field">
                                <TextInput label="Texto de la pregunta" className="validate" />
                            </Col>

                            <Row>
                                <Col s={12} className="input-field">
                                    <Select
                                        onChange={this.handleChange}
                                        label="Tipo de pregunta"
                                    >
                                        <option key='1' value="openQuestion">Pregunta abierta</option>
                                        <option key='2' value="multipleOption">Opción múltiple</option>
                                        <option key='3' value="multipleSelection">Selección múltiple</option>
                                    </Select>
                                </Col>
                            </Row>
                        </form>

                        {/* { this.renderMode() } */}
                        
                        { 
                            () => {
                                if (typeof(this.state.createMultiple) !== "undefined") {
                                    this.state.createMultiple.map(cm => {
                                        return(<CreateMultiple createMultiple={this.state.createMultiple} />);
                                    });
                                } else {
                                    console.log('createMultiple was undefined.');
                                }
                            }
                             
                        }
                    </Card>
                </Col>
            </Row>
        );
    }

    renderMode() {
        if (this.state.mode !== 'openQuestion') {
            const createMultiple = { 
                optionList: [
                    { label: 'Option' }
                ] 
            }
            this.setState({ createMultiple });

            return(<CreateMultiple createMultiple={this.state.createMultiple} />);
        } 
    }
}
 
export default CreateQuestion;