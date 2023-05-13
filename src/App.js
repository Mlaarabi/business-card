import React from 'react';
import './App.css';
import Header from "./Composants/Header"
import Globale from "./Composants/Globale"
import Footer from "./Composants/Footer"


function App() {
  return (
    <div className='composant-app'>
      <div className='composant-app-2'>
        <Header/>
        <Globale/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
