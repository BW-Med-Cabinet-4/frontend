import React, {useState} from 'react';

const SignUpForm = () => {

    const [user, setUser] = useState({
        first: '',
        last: '',
        email: ''
    })
    const handleChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
        console.log(user)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
           <form>
              <label>First Name:
                <input onChange={handleChange} type='text' name='first' value={user.first}></input>  
              </label> 
              <label>Last Name:
                <input onChange={handleChange} type='text' name='last' value={user.last}></input>
              </label>
              <label>Email:
                <input onChange={handleChange} type='email' name='email' value={user.email}></input>
              </label>
              <button type='submit'>Sumbit</button>
           </form> 
        </div>
    );
};

export default SignUpForm;