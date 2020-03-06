import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/privateRoute';
import { UserIdContext } from './utils/userIDcontext';
import history from './utils/history';


import Home from './components/Home';
import Navigation from './components/navigation/Nav';
import Profile from './components/users/profile/Profile';
import Strains from './components/Strains'
//import { Ailments } from './components/ailments/Ailments';
//import Register from './components/users/registration/Register';
//import Login from './components/users/login/Login';
import Footer from './components/footer/Footer';
//import Nav from './components/Nav'

// import Navigation from './components/Nav';
 import Register from './components/SignUpForm';
 import Login from './components/Login';
// import Footer from './components/Footer';


function App() {
  const id = `${localStorage.getItem('id')}`
  
  return (
    <div className="App">
      <UserIdContext.Provider value={id}>
        <Switch>
          <PrivateRoute exact path='/homepage'>
            <Navigation/>
            <Home/>
            <Footer/>
          </PrivateRoute>
          <PrivateRoute exact path='/profile'>
            <Navigation/>
            <Profile/>
            <Footer/>
          </PrivateRoute>
          <PrivateRoute exact path='/strains'>
            <Navigation/>
            <Strains/>
            <Footer/>
          </PrivateRoute>
          <Route 
            exact path='/register' 
            component={Register}
          >
          </Route>
          <Route  
            exact path='' 
            component={Login}
          >
          </Route>
        </Switch>
      </UserIdContext.Provider>
    </div>
  );

}

export default App;
