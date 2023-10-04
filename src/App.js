import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Me from './pages/Me';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

import Header from './components/Header';
import Footer from './components/Footer';

import blueBanner from './assets/purple-pink-geoBanner.jpeg';

export  function App() {
  const [active, setActive] = useState('me');

  const renderSelect = () => {
      switch(active) {
          case "me":
              return <div style={{margin: '50px'}}><Me /></div>;
          case "contact":
              return <div style={{margin: '50px'}}><Contact /></div>;
          case "portfolio":
              return <div style={{margin: '50px'}}><Portfolio /></div>;
          case "resume": 
              return <div style={{margin: '50px'}}><Resume /></div>;
          default: 
              return null;
      }
  };

  return (
      <div className='app'>
          <div id = 'banner' style={{
        backgroundImage: `url(${blueBanner})`,
        backgroundRepeat: 'no',
        backgroundSize: 'cover'
      }}>
          <Header active={active} setActive={setActive}/>
          </div>
          <div>
             <main>{renderSelect()}</main>
          </div>
          <div id = 'banner' style={{
        backgroundImage: `url(${blueBanner})`,
        backgroundRepeat: 'no',
        backgroundSize: 'cover'
      }}>
          <Footer/>
          </div>
      </div>
  );
}

export default App;
