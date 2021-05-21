import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import LanginPage from './pages/LandingPage/LandingPage';

function App() {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState('');
  const [pwd, setPwd] = useState('');
  const [componentTrigger, setComponentTrigger] = useState(false);

  const productName = (event) => {
    setProduct(event.target.value);
  }
  const pwdName = (event) => {
    setPwd(event.target.value);
  }
  useEffect(() => {
    axios.get('/user').then((res) => {
      console.log(res);
      setData(res.data.productList);
      setComponentTrigger(false);
    });
  }, [componentTrigger]);

  return (
    <React.Fragment>
      <LanginPage />
    </React.Fragment>
  );
}

export default App;
