import React from 'react';
import {Button} from 'reactstrap'
import styled from 'styled-components'

const NewButton = styled(Button)`{
    margin-left: 15px;
}`

const Form = (props) => {

    const search = (e) => {
        e.preventDefault()
        console.log(props.input)
       props.setData(props.data.filter(elem => elem.strain_name.toLowerCase().includes(props.input.toLowerCase())))
        console.log(props.data) 
    }
    
    return (
        <form onSubmit={search}>
        <input onChange={(e) =>{ 
            console.log(props.input)
            props.setInput(e.target.value)}} type='text' placeholder='search by strain'></input>
        <NewButton color='danger' type='submit'>Search by Strain</NewButton>
       </form>
        
    );
};

export default Form;