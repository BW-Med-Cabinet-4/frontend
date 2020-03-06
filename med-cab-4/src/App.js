import React, {useState, useEffect} from 'react';
import './App.css';
import {axiosWithAuth} from './utils/axiosWithAuth';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/privateRoute';
import { UserIdContext } from './utils/userIDcontext';
import history from './utils/history';

import SavedList from "../src/components/Strains/SavedList";
import StrainList from "../src/components/Strains/StrainList";
import Strain from "../src/components/Strains/Strain";
import StrainUpdate from '../src/components/Strains/StrainUpdate'
import axios from 'axios'



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
  
  const [savedList, setSavedList] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get('/api/strains')
      .then(res => setItems(res.data))
      .catch(error => console.log(error));
  },[]);

  const addToSavedList = strain => {
    setSavedList([...savedList, strain]);
  };




  return (
    <div className="App">
      <UserIdContext.Provider value={id}>
        <Switch>
          <PrivateRoute exact path='/homepage'>
            <Navigation/>
            <Home/>
            <Footer/>
          </PrivateRoute>

          <PrivateRoute exact path='/saved'>
            <Navigation/>
            <SavedList/>
            <Footer/>
          </PrivateRoute>

          <PrivateRoute exact path="/strainLists" component= {StrainList} >
          </PrivateRoute>
          <PrivateRoute exact path ="/update-strain/:id" render ={props => {
            return <StrainUpdate {...props} items={items} setItems={setItems}/>;
          }}
          >
          </PrivateRoute>
          <PrivateRoute 
            path="/strains/:id"
            render={props => {
                    return <Strain {...props} addToSavedList={addToSavedList} />;
                    }}
          >
          </PrivateRoute>
          <PrivateRoute exact path='/profile'>
            <Navigation/>
            <Profile/>
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
