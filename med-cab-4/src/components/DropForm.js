import React, {useState} from 'react';

const DropForm = (props) => {

    const [drop,setDrop] = useState('')

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            props.setData(props.data.filter(elem => elem.strain_type.toLowerCase() == drop))
            console.log(props.data)
        }}
        >
          <select onChange={() => setDrop(document.getElementById('drop').value)} id='drop'>
              <option value='indica'>Indica</option>
              <option value='sativa'>Sativa</option>
              <option value='hybrid'>Hybrid</option>
          </select>
          <button type='submit'>Submit</button>
        </form>
    );
};

export default DropForm;