import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

import { Router, Route, Switch, Link } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
function App() {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState('');
  const [pwd, setPwd] = useState('');
  const [componentTrigger, setComponentTrigger] = useState(false);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
