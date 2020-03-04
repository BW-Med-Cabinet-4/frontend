import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import StrainCard from './StrainsCard';





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
    
    return (
        <div className='strainsContainer'>
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
        </div>
    );
};

export default Home;