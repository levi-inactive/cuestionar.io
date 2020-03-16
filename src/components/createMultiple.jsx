import React, { Component } from 'react';

import { 
    Row, 
    Col, 
    Collection, 
    CollectionItem, 
    Button, 
    Icon
} from 'react-materialize';

class CreateMultiple extends Component {
    render() { 
        console.log('createMultiple object:', this.props.createMultiple);
        return ( 
            <Row>
                <Col s={12} m={12}>
                    <Collection>
                        { this.props.createMultiple.optionList.map(o => {
                            return (
                                <React.Fragment>
                                    <CollectionItem>
                                        <Row>
                                            <Col s={12} m={12}>
                                                { o.label }
                                            </Col>
                                        </Row>
                                    </CollectionItem>
                                </React.Fragment>
                            );
                        }) }

                        <CollectionItem>
                            <Row>
                                <Col s={12} m={12}>
                                    <Button 
                                        waves="light"
                                        onClick={() => {}}>
                                        Añadir opción

                                        <Icon left>add</Icon>
                                    </Button>
                                </Col>
                            </Row>
                        </CollectionItem>
                    </Collection>
                </Col>
            </Row>
        );
    }
}
 
export default CreateMultiple;