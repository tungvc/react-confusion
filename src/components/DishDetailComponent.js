import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody } from "reactstrap";

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const dish = this.props.dish;

        if (dish != null) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div />
            );
        }
    }
}

export default DishDetail;