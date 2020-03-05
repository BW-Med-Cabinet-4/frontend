import React from 'react';
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
            <CardHeader>{props.strainName}</CardHeader>
            <img alt='randomPic' src={`http://www.evatar.io/${props.strain_id}`}/>
            <CardText>{props.strainType}</CardText>
            <CardText>{props.effects}</CardText>
            <CardText>{props.flavor}</CardText>
            <CardFooter>{props.desc}</CardFooter>
            <Button>Add</Button>
            </Card>
        </Col>
    )
}

export default StrainCard;