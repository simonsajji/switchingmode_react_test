import React, { Component } from 'react';
import './Lightmode.css'

class Lightmode extends Component {
    constructor(props) {
        super(props);
    }

    changeMode =() =>{
        console.log("this is the lightmode ( child) ");
        this.props.handleModeChange('light');
    }
    render() {
        return (
            <div className='Lightmode'>
                <button className='switchbtn' onClick={ this.changeMode}>SWITCH</button>
                LIGHT MODE
            </div>
        );
    }
}



export default Lightmode;