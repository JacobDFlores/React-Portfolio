import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Me from './pages/Me';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

import Header from './components/Header';
import Footer from './components/Footer';

import blueBanner from './assets/purple-pink-geoBanner.jpeg';


function App() {

  const url = window.location.toString().split("/");
  const page = url[url.length - 1];

  return (
    <div>
      <div id = 'banner' style={{
        backgroundImage: `url(${blueBanner})`,
        backgroundRepeat: 'no',
        backgroundSize: 'cover'
      }}>
      <Header />
      </div>

            {page == 'portfolio' ? (
          <div style={{ paddingTop: '100px', paddingBottom: '100px' }} >
            <Portfolio />
          </div>) : (<></>)}
            {page == '' ? (
          <div style={{ paddingTop: '100px', paddingBottom: '100px' }} >
            <Me />
          </div>) : (<></>)} 
            {page == 'resume' ? (
          <div style={{ paddingTop: '100px', paddingBottom: '100px' }} >
            <Resume />
          </div>) : (<></>)} 
          {page == 'contact-me' ? (
          <div style={{ paddingTop: '100px', paddingBottom: '100px' }} >
            <Contact />
          </div>) : (<></>)}  

          <div id = 'banner' style={{
        backgroundImage: `url(${blueBanner})`,
        backgroundRepeat: 'no',
        backgroundSize: 'cover'
      }}>
      <Footer />
      </div>
    </div>
  );
}

export default App;
