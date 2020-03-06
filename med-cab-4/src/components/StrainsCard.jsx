import React, {useState} from 'react';
import {
    Card,
    CardHeader,
    CardFooter,
    CardText,
    Col,
    Button
  } from "reactstrap";
  
const StrainCard = (props) => {

    return (
        <Col xs='6' md='3' xl='3'>
            <Card>
            <CardHeader><strong>Name: </strong>{props.strainName}</CardHeader>
            <CardText><strong>Type: </strong>{props.strainType}</CardText>
            <CardText> <strong>Effects: </strong>{props.effects}</CardText>
            <CardText><strong>Flavor: </strong>{props.flavor}</CardText>
            <CardFooter><strong>Description: </strong>{props.desc}</CardFooter>
            <Button>Add</Button>
            </Card>
        </Col>
    )
}

export default StrainCard;