import logo from './logo.svg';
import './App.css';
import lightmode from './Lightmode'
import Lightmode from './Lightmode';
import Darkmode from './Darkmode';
import React, { Component } from 'react';
import { useState} from 'react';



class App extends Component {
  constructor (){
    super();
    this.state = {
      mode : 'light'
    }
  }

 

  changeModeState = (m) =>{
    if(m == 'light') this.setState( {mode : 'dark'})
    else if(m == 'dark') this.setState( {mode : 'light'})

    console.log(this.state.mode);
    
  }
  
  render(){
    const currentMode = this.state.mode;
    let cmode;
    if (currentMode == 'light') {
      cmode = <Lightmode handleModeChange = {this.changeModeState}/>;
    } else {
      cmode = <Darkmode handleModeChange = {this.changeModeState} />;
    }
    return (
      <div className = 'mainApp'>
        {cmode}           
      </div>
    );

  }


 
}

export default App;
