import React from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm'
import Login from './components/Login'
import {Route} from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'



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
      <Footer/>
    </div>
  );
}

export default App;
