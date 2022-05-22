import React, { Component } from 'react';
import './Darkmode.css'

class Darkmode extends Component {
    constructor(props) {
        super(props);

    }

    changeMode =() =>{
        console.log("this is the Darkmode ( child) ");
        this.props.handleModeChange('dark');
    }
    render() {
        return (
            <div className='Darkmode'>
                <button className='switchbtn' onClick={ this.changeMode}>SWITCH</button>
                DARK MODE 
            </div>
        );
    }
   

}

export default Darkmode ;