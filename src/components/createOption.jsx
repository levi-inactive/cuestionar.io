import React, { Component } from 'react';

import {
    Row,
    Col,
    CollectionItem,
    Button,
    Icon
} from 'react-materialize';

class CreateOption extends Component {
    render() { 
        return ( 
            <div>
                <Row>
                    <Col s={8} m={8}>
                        {/* { this.props.option.optionText } */}
                        {this.props.option.optionText}
                    </Col>
                    <Col s={4} m={4}>
                        <Button
                            small
                            floating
                            waves='light'
                            className='red darken-1'
                            icon={<Icon left>delete</Icon>}
                            onClick={() => {
                                let questionId = this.props.questionId;
                                let optionId = this.props.option.id;

                                console.log(`questionId: ${questionId}, optionId: ${optionId}`);

                                this.props.option.handleDeleteOption(questionId, optionId);
                            }}
                        />
                    </Col>
                </Row>                
            </div>
        );
    }
}
 
export default CreateOption;