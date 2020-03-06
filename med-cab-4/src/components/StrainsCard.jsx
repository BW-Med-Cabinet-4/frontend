import React, {useState} from 'react';
import {
    Card,
    CardHeader,
    CardFooter,
    CardText,
    Col,
    Button
  } from "reactstrap";
import {axiosWithAuth} from '../utils/axiosWithAuth'
  
const StrainCard = (props) => {
    const [state, setState] = useState({
        id: `${props.strain_id}`
        })
    console.log(props);
    function handleSave(event){
        console.log('this is state in save', state)
        event.preventDefault();
        window.alert('added to saved')
          axiosWithAuth().post(`api/strains/${props.strains.strain_id}`, state)
          .then(response => {
            console.log('this is post saved',response)
              console.log('this is saved',state)
              window.alert('added to saved')
          })
          .catch(error => {
              console.log('ehh error', error)
          },[])
        }
    return (
        <Col xs='6' md='3' xl='3'>
            <Card>
            <CardHeader><strong>Name: </strong>{props.strains.strain_Name}</CardHeader>
            <CardText><strong>Type: </strong>{props.strains.strain_type}</CardText>
            <CardText> <strong>Effects: </strong>{props.strains.effects}</CardText>
            <CardText><strong>Flavor: </strong>{props.strains.flavor}</CardText>
            <CardFooter><strong>Description: </strong>{props.strains.strain_desc}</CardFooter>
            <button onClick= {handleSave}> Add </button>
            </Card>
        </Col>
    )
}

export default StrainCard;