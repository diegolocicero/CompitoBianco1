import React, { Component, useState } from "react";
import {motion} from 'framer-motion'
import './card.css'

class Card extends Component{
    render(){
        return (
            <>
            <motion.div 
                className="card-wrapper" 
                whileHover={{scale: 1.1}}
                style={{
                    backgroundImage: `url(${this.props.background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <h1> {this.props.title} </h1>
            </motion.div>
            </>
          );  
    }
}

export default Card;