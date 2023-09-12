import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Home from './components/header/home/Home';

function App() {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home />
    </main>
    </>
  );
}

export default App;
