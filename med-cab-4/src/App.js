import React from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm'
import Login from './components/Login'
import {Route} from 'react-router-dom'
import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path='/SignUp'>
      <SignUpForm/>
      </Route>
      <Route  exact path='/Login'>
      <Login/>
      </Route>
    </div>
  );
}

export default App;
