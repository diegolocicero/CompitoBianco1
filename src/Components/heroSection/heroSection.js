import React, { Component, useState } from "react";
import {motion} from 'framer-motion'
import './heroSection.css'
//IMPORT IMMAGINI
import avatar1 from '../../Img/avatar1.png'
import avatar2 from '../../Img/avatar2.png'
import avatar3 from '../../Img/avatar3.png'


function HeroSection() {
      const [isTranslating, setisTranslating] = useState(false)
      return (
        <>
          <motion.div 
            className="container"
            animate={{translateX: isTranslating? -200 + '%' : 0}}
            transition={{duration: 0}}
          >
            <h1 className="title"> Chi sta guardando? </h1>
            <div className="user-container">
              <motion.div 
                className="icon-wrapper" 
                whileHover={{scale: 1.1, cursor: 'pointer'}} 
                onClick={() => setisTranslating(!isTranslating)}
              >
                <img src={avatar3} alt='avatar1'></img>
                <h1> Andrea Bianco </h1>
              </motion.div>
              <motion.div 
                className="icon-wrapper" 
                whileHover={{scale: 1.1, cursor: 'pointer'}} 
                onClick={() => setisTranslating(!isTranslating)}
              >
                <img src={avatar2} alt='avatar2'></img>
                <h1> Diego Lo Cicero </h1>
              </motion.div>
              <motion.div 
                className="icon-wrapper" 
                whileHover={{scale: 1.1, cursor: 'pointer'}} 
                onClick={() => setisTranslating(!isTranslating)}
              >
                <img src={avatar1} alt='avatar3'></img>
                <h1> User </h1>
              </motion.div>           
            </div>
          </motion.div>
        </>
      );  
  }
  
  export default HeroSection;

