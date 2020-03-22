import React, { Component } from 'react';

import { 
    Row, 
    Col, 
    Card, 
    TextInput, 
    Select, 
    Button,
    Collection,
    CollectionItem,
    Icon
} from 'react-materialize';

import CreateMultiple from './createMultiple';

class CreateQuestion extends Component {
    render() { 
        return ( 
             <Row>
                 <Col s={12} m={12}>
                    <Card className="center"
                        actions={[
                            <Button
                                waves='light'
                                className='red darken-1' 
                                onClick={() => {
                                    let id = this.props.createQuestion.id;
                                    this.props.createQuestion.handleDelete(id);
                                }}
                            >
                                Eliminar pregunta
                                <Icon left>delete</Icon>
                            </Button>
                        ]}
                    >
                        <Row>
                            <Col s={12} m={12}>
                                <TextInput 
                                    label="Texto de la pregunta" 
                                    className="validate" 
                                    onChange={event => { 
                                        let createQuestion = this.props.createQuestion;
                                        this.props.createQuestion.handleQuestionTextChange(event, createQuestion);
                                    }}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col s={12} m={12}>
                                <Select
                                    onChange={event => {
                                        let createQuestion = this.props.createQuestion;
                                        this.props.createQuestion.handleQuestionModeChange(event, createQuestion);
                                    }}
                                    options={{
                                        classes: '',
                                        dropdownOptions: {
                                            alignment: 'left',
                                            autoTrigger: true,
                                            closeOnClick: true,
                                            container: null,
                                            coverTrigger: true,
                                            hover: false,
                                            inDuration: 150,
                                            onCloseEnd: null,
                                            onCloseStart: null,
                                            onOpenEnd: null,
                                            onOpenStart: null,
                                            outDuration: 250
                                        }
                                    }} 
                                >
                                    <option
                                        disabled
                                        value=""
                                    >
                                        Tipo de pregunta
                                    </option>
                                    <option value="open">
                                        Pregunta abierta
                                    </option>
                                    <option value="option">
                                        Opción múltiple
                                    </option>
                                    <option value="selection">
                                        Selección múltiple
                                    </option>
                                </Select>
                            </Col>
                        </Row>
                    
                        { 
                            <CreateMultiple 
                                questionId={ this.props.createQuestion.id } 
                                createMultiple={ this.props.createQuestion.createMultiple } 
                            /> 
                        }
                    </Card>
                </Col>
             </Row>
        );
    }
}
 
export default CreateQuestion;