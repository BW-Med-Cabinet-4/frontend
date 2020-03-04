import React from 'react';

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
        <button  type='submit'>Search by Strain</button>
       </form>
        
    );
};

export default Form;