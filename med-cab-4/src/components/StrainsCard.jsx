import React from 'react';
import {
    Card,
    CardHeader,
    CardFooter,
    CardText,
    Col
  } from "reactstrap";
  
const StrainCard = (props) => {
    return (
        <Col xs='6' md='3' xl='3'>
            <Card>
            <CardHeader>{props.strainName}</CardHeader>
            <CardText>{props.strainType}</CardText>
            <CardText>{props.effects}</CardText>
            <CardText>{props.flavor}</CardText>
            <CardFooter>{props.desc}</CardFooter>
            </Card>
        </Col>
    )
}

export default StrainCard;