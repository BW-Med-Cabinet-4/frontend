import React, {useState} from 'react';
import {
    Card,
    CardHeader,
    CardFooter,
    CardText,
    Col,
    Button
  } from "reactstrap";
import {axiosWithAuth} from '../../../utils/axiosWithAuth';
  
const AilmentCard = (props) => {
    const [state, setState] = useState({
        id: `${props.id}`
      })
    
    function handleDelete(event) {
        event.preventDefault();
        axiosWithAuth().delete(`/api/ailments/${state.id}`)
        .then(res => {
            console.log('this is', res.data)
        })
        .catch(error => {
            console.log('server error', error)
        });


    }

    return (
        <Col xs='6' md='3' xl='3'>
            <Card>
            <CardHeader><strong>Name: </strong>{props.ailment}</CardHeader>
            <CardFooter><strong>Description: </strong>{props.desc}</CardFooter>
            <Button onSubmit={handleDelete}> Delete </Button>
            </Card>
        </Col>
    )
}

export default AilmentCard;