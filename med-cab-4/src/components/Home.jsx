import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import StrainCard from './StrainsCard';
import {Row, Container, Button} from 'reactstrap'
import styled from 'styled-components'
import Form from './Form'
import DropForm from './DropForm'


const Div = styled.div`{
  
}`

// const CusContainer = styled(Container)`{
//     margin-top: 2%;
//     background-image: url(https://images.unsplash.com/photo-1536819114556-1e10f967fb61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)
    
// }`





const Home = () => {
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState([])

    useEffect(() => {
        axiosWithAuth().get(`api/strains`)
        .then(response => {
        console.log(response.data)
        setData(response.data)
        setRefresh(response.data)
        })
        .catch(error => {
        console.error('Server Error', error);
        });
    },[]);


    const [input, setInput] = useState('')

   
    
    return (
      
    
        //    <CusContainer>
            <div className='custom-container'>
            <div className='form'>
           <Form data={data} setData={setData} setInput={setInput} input={input}/> 
           <DropForm data={data} setData={setData}/>
           <Button color='warning' onClick={() => setData(refresh)}>Refresh List</Button>
           </div>
             
        <Row>
          {
            data.map(strains => 
                    <StrainCard
                        strainName={strains.strain_name}
                        strainType={strains.strain_type}
                        effects={strains.effects}
                        flavor={strains.flavor}
                        desc={strains.strain_desc}
                    />
                )
        } 
        </Row> 
        </div>
        // </CusContainer>
       
        
    );
};

export default Home;