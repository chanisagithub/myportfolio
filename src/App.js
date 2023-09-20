import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Home from './components/header/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualifications/Qualification';


function App() {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
    </main>
    </>
  );
}

export default App;
