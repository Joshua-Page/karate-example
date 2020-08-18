import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar'

import Main from './sections/Main'
import About from './sections/About'
import Classes from './sections/Classes'
import Contact from './sections/Contact'
import SocialMediaBar from './components/Social-Media-Bar/Social-Media-Bar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialMediaBar />
      <Main />
      <About />
      <Classes />
      <Contact />
    </div>
  );
}

export default App;
