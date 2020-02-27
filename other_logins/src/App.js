import React from 'react';
import logo from './logo.svg';
import './App.css';

import GoogleLogin from 'react-google-login';
import Register from './Register';

function App() {
  
  const responseFacebook = (response) => {
    console.log("facebook console");
    console.log(response);
    this.signup(response, 'facebook');
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Register/>
        
        <br/><br/>
      </header>
    </div>
  );
}

export default App;
