import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import '../styles/App.scss';
import Header from './Header';
import Sections from './Sections';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App" >

        <Header />
        <Sections />
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;