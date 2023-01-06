import React, { Component, useState } from "react";
import {motion} from 'framer-motion'
import './contentWrapper.css'

class ContentWrapper extends Component{
    render(){
        return (
            <>
                <motion.div className="mainContainer">
                    <h1> {this.props.title} </h1>
                    <img src={this.props.image} alt="background"></img>
                    <div className="text-wrapper">
                        <p> {this.props.text} </p>
                    </div>
                </motion.div>
            </>
          );  
    }
}

export default ContentWrapper;