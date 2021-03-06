import React from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import MerchantSignup from './Pages/MerchantSignup';
import MerchantLogin from './Pages/MerchantLogin';
import MerchantDashboard from './Pages/MerchantDashboard';
import MerchantTopNav from './Components/MerchantTopNav';

import UserLogin from './Pages/UserLogin';
import './App.css';

function App() {
  return ( 
    <Router>
      <Switch>
        <Route exact path="/merchant/dashboard">
          <MerchantTopNav />
          <MerchantDashboard />
        </Route>
        <Route exact path="/user/login">
          <UserLogin />
        </Route>
        <Route exact path="/merchantlogin">
          <MerchantLogin />
        </Route>
        <Route exact path="/">
          <MerchantSignup />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
 