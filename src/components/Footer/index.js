import React from 'react';

const Footer = () => {

  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
          <button
            className="btn btn-dark mb-3"
            
          >
             Go Back
          </button>
       
        <h4> {new Date().getFullYear()} - React Portfolio</h4>
      </div>
    </footer>
  );
};

export default Footer;
