import React, {useState} from 'react';

const Strains = () => {
 
    const [strain, setStrain] = useState({
        strain_name: '',
        strain_type: '',
        effects: '',
        flavors: ''

    })

    const handleChange = e => {
        setStrain({...strain, [e.target.name] : e.target.value})
        console.log(strain)
    }
    return (
        <div>
           <form>
               <label>Strain Name:
               <input onChange={handleChange} name='strain_name' type='text' placeholder='strain name'></input>
               </label>
               <label>Strain Type:
               <input onChange={handleChange} name='strain_type' type='text' placeholder='type'></input>
               </label>
               <label>Effects:
               <input onChange={handleChange} name='effects' type='text' placeholder='effects'></input>
               </label>
               <label>Flavors:
               <input onChange={handleChange} name='flavors' type='text' placeholder='flavors'></input>
               </label>
           </form> 
        </div>
    );
};

export default Strains;