import React, {useState} from 'react';
import {Card, Row} from 'reactstrap'
import styled from 'styled-components'
import useForm from './useForm'

const Title = styled.h1`{
    color: white;
    font-weight: bold;
}`

const Strains = () => {
 
    const [strain, setStrain] = useState({
        strain_name: '',
        strain_type: '',
        effects: '',
        flavors: ''

    })

    // const { handleChange, handleSubmit, values } = useForm(submit)

    const handleChange = e => {
        setStrain({...strain, [e.target.name] : e.target.value})
        console.log(strain)
    }
    return (
       
        <div className='strain'>
            <Title>Add New Strain</Title>
           <form>  
               <div className='container'>
                <h2>Strain Details</h2>
               <div>
               <label><strong>Strain Name:  </strong>
               <input onChange={handleChange} name='strain_name' type='text' placeholder='strain name'></input>
               </label>
               </div> 
               <div>
               <label><strong>Strain Type:  </strong>
               <input onChange={handleChange} name='strain_type' type='text' placeholder='type'></input>
               </label>
               </div>
               <div>
               <label><strong>Effects: </strong>
               <input onChange={handleChange} name='effects' type='text' placeholder='effects'></input>
               </label>
               </div>
               <div>
               <label><strong>Flavors: </strong>
               <input onChange={handleChange} name='flavors' type='text' placeholder='flavors'></input>
               </label>
               </div>
               </div>
           </form> 
         </div>
    );
};

export default Strains;