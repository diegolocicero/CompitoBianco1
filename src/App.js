import React, { Component } from "react";
import {motion} from 'framer-motion'
//IMPORT FILE
import "./App.css";
//IMPORT IMMAGINI

//IMPORT COMPONENTS
import HeroSection from './Components/heroSection/heroSection'
import ContentPage from "./Components/contentPage/contentPage";

class App extends Component {
  render() {
    return (
      <>
        <HeroSection/>
        <ContentPage/>
      </>
    );
  }
}

export default App;
