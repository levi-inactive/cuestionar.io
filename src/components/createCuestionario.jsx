import React, { Component } from 'react';
import CreateQuestion from './createQuestion'

import { Row, Col, Card, TextInput, Icon, Button } from 'react-materialize';

class CreateCuestionario extends Component {
    state = { 
        title: 'CuestionarioTitle',
        createQuestionList: [
            {}
        ]
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

    addQuestion = () => {

    }

    render() { 
        return ( 
            <React.Fragment>
                <Row>
                    <Col s={12} m={12} className="center-align">
                        <Card>
                            <Row className="center-align">
                                <Col s={12} m={12} className="input-field">
                                    <TextInput label="Título de Cuestionario" className="validate" />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

                { this.state.createQuestionList.map(cq => <CreateQuestion />) }

                <Row>
                    <Col s={12} m={12}>
                        <Card className="center">
                            <Button 
                                large
                                waves="light"
                                onClick={this.addQuestion}>
                                Añadir pregunta

                                <Icon left>add</Icon>
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}
 
export default CreateCuestionario;