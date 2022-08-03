import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Footer, Blog, Features, Possibility, WhatGPT3, Header } from './containers/index.js' ;
import  Navbar  from "./components/Navbar/Navbar"
const App = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Blog />
      <Footer />
    </div>
  )} 
  export default App 
