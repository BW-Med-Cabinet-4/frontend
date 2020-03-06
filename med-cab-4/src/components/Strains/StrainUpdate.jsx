import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const initialItem = {
    strain_name:'',
    strain_type: '',
    effects:'',
    flavor:'',
    strain_desc:''
}

 const StrainUpdate = (props) => {
  const [item, setItem] = useState(initialItem)
    const { id } = useParams();

  const handleChange = e => {
      e.persist()
    setItem({...item,[e.target.name]: e.target.value});
  };


  useEffect(() => {
      console.log('useEffect props', props.items)
    const itemToUpdate = props.items.find(thing => `${thing.id}` === id);
console.log('this is itemtoUpdate', itemToUpdate)


    if (itemToUpdate) {
      setItem(itemToUpdate);
    }
    console.log('this is item state after',itemToUpdate)
  }, [props.items, id]);

  const handleSubmit = e => {
    e.preventDefault();
    // make a PUT request to edit the item
    axios
      .put(`https://medcabapi.herokuapp.com/api/strains/${id}`, item)
      .then(res => {
        // res.data is the FULL array with the updated item
        // That's not always the case. Sometimes you need to build your
        // own updated array
        console.log('this is res from put',res)
        props.history.push(`/strains/${id}`);
      })
      .catch(err => console.log(err));
  };
  
      console.log(props.items)
    return (
       <div>
        <h2>Update Item</h2>
  
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="strain_name"
            onChange={handleChange}
            placeholder="Name"
            value={item.strain_name}
          />
          <div className="baseline" />
  
          <input
            type="text"
            name="strain_type"
            onChange={handleChange}
            placeholder="Type"
            value={item.strain_type}
          />
          <div className="baseline" />
  
          <input
            type="text"
            name="effects"
            onChange={handleChange}
            placeholder="Effects"
            value={item.effects}
          />
          <div className="baseline" />
  
          <input
            type="text"
            name="flavor"
            onChange={handleChange}
            placeholder="Flavors"
            value={item.flavor}
          />
          <div className="baseline" />
          
          <input
            type="text"
            name="strain_desc"
            onChange={handleChange}
            placeholder="Description"
            value={item.strain_desc}
          />
          <div className="baseline" />
  
          <button className="md-button form-button">Update</button>
        </form>
      </div>
  
    );
}

export default StrainUpdate