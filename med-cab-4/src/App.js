import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/privateRoute';
import { UserIdContext } from './utils/userIDcontext';
import history from './utils/history';

import HomePage from './components/Home';
import Navigation from './components/navigation/Nav';
import Profile from './components/users/profile/Profile';
import SignUp from './components/users/registration/Register';
import Login from './components/users/login/Login';
import Footer from './components/footer/Footer';


function App() {
  const id = `${localStorage.getItem('id')}`
  
  return (
    <div className="App">
      <UserIdContext.Provider value={id}>
        <Switch>
          <PrivateRoute exact path='/homepage'>
            <Navigation/>
            <HomePage/>
          </PrivateRoute>
          <PrivateRoute exact path='/profile'>
            <Navigation/>
            <Profile/>
          </PrivateRoute>
          <Route exact path='/SignUp'>
            <SignUp/>
          </Route>
          <Route  exact path=''>
            <Login/>
          </Route>
        </Switch>
      </UserIdContext.Provider>
      <Footer/>
    </div>
  );
}

export default App;
