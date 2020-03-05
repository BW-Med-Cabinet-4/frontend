import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import StrainCard from './StrainsCard';
import {Row, Container} from 'reactstrap'
import styled from 'styled-components'
import Form from './Form'
import DropForm from './DropForm'

const Div = styled.div`{
    background-image: linear-gradient(to right, navy, green);
    margin: 2% 0;
}`

const CusContainer = styled(Container)`{
    background-image: linear-gradient(to right, navy, green)
}`





const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axiosWithAuth().get(`api/strains`)
        .then(response => {
        console.log(response.data)
        setData(response.data)
        })
        .catch(error => {
        console.error('Server Error', error);
        });
    },[]);


    const [input, setInput] = useState('')

   
    
    return (
      
    
           <CusContainer>
            <Div>
            <div className='form'>
           <Form data={data} setData={setData} setInput={setInput} input={input}/> 
           <DropForm data={data} setData={setData}/>
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
        </Div>
        </CusContainer>
       
        
    );
};

export default Home;