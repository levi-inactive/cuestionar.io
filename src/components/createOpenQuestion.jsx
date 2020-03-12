import React, { Component } from 'react';

import { Row, Col, TextInput } from 'react-materialize';

class CreateOpenQuestion extends Component {
    state = {  }

    render() { 
        return ( 
            <Row>
                <Col s={12} m={12}>
                    <TextInput />
                </Col>
            </Row>
        );
    }
}
 
export default CreateOpenQuestion;