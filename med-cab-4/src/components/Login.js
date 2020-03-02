import React, {useState} from 'react';

const Login = () => {
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })
    const handleChange= (e) => {
        setLogin({...login,[e.target.name] : e.target.value})
        console.log(login)
    }
    return (
        <div>
           <form>
             <label>Username: 
               <input onChange={handleChange} type='text' name='username'></input>   
             </label>  
             <label>Password: 
               <input onChange={handleChange} type='text' name='password'></input>   
             </label> 
           </form> 
        </div>
    );
};

export default Login;