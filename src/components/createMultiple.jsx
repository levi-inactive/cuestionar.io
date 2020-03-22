import React, { Component } from 'react';

import { 
    Row, 
    Col, 
    Collection, 
    Button, 
    Icon
} from 'react-materialize';

import CreateOption from './createOption';

class CreateMultiple extends Component {
    render() { 
        const createMultiple = this.props.createMultiple;
        
        if ("optionList" in createMultiple) {
            return (
                <Row>
                    <Col s={12} m={12}>
                        <Collection>
                            { 
                                createMultiple.optionList.map(o => {
                                    return (
                                        <CreateOption 
                                            key={ o.id } 
                                            option={ o }
                                            questionId={ this.props.questionId }  
                                        />
                                    );
                                }) 
                            }
                        </Collection>

                        <Button 
                            waves="light"
                            onClick={() => {
                                createMultiple.handleAddOption(this.props.questionId);
                            }}>
                            Añadir opción

                            <Icon left>add</Icon>
                        </Button>
                    </Col>
                </Row>
            );
        } 

        return ( <React.Fragment /> );
    }
}
 
export default CreateMultiple;