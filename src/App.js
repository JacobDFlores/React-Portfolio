import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Me from './pages/Me';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const url = window.location.toString().split("/");
  const page = url[url.length - 1];





  return (
    <body>
      <Header />

      {page == 'portfolio' ? (

          <div style={{ paddingTop: '100px', paddingBottom: '100px' }} >
            <Portfolio />
          </div>

          ) : (
            
          <div style={{ paddingTop: '100px', paddingBottom: '100px' }} >
            <Me />
          </div>
      )}
      
      <Footer />
    </body>
  );
}

export default App;
