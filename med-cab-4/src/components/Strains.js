import React, { useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Strains = () => {
    useEffect(()=> {
        axiosWithAuth().post(`api/strains`)
        .then(response => {
        console.log(response.data)
        })
        .catch(error => {
        console.error('Server Error', error);
        });

    },[])
    return (
        <div>
            
        </div>
    );
};

export default Strains;