import React from 'react';
import './App.css';
import SignUp from './components/users/registration/Register'
import Login from './components/users/login/Login'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route exact path='/SignUp'>
      <SignUp />
      </Route>
      <Route  exact path='/Login'>
      <Login/>
      </Route>
    </div>
  );
}

export default App;
