import React, { Component } from 'react';
import Header from './components/header';
import Service from './components/service';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Client from './components/client';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Stats from './components/stats';

function App() {
  return (
    <>
    <Navbar/>
      <Hero/>
      <Service/>
      <About/>
      <Stats/>
      <Client/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
