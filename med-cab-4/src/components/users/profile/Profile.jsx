import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import AilmentCard from './AilmentCard';
import {Row, Container, Button} from 'reactstrap'
import styled from 'styled-components'


//import Background from '../../../background/background-register'


const Div = styled.div`{
  
}`

const CusContainer = styled(Container)`{
    margin-top: 2%;

    
}`





const Profile = () => {
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState([])

    useEffect(() => {
        axiosWithAuth().get(`api/ailments`)
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
      
    
           <CusContainer>
            <Div>
           
             
        <Row>
          {
                  data.map(data=>( 
                    <AilmentCard
                        ailment={data.ailment}
                        desc={data.a_desc}
                        id={data.user_id}
                    />
                    )) 
                
          }
        </Row> 
        </Div>
        </CusContainer>
       
        
    );
};

export default Profile;