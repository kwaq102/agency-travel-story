import React from 'react';

import '../styles/App.scss';
import Header from './Header';
import Arrow from './Arrow';
import Sections from './Sections';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className="App" >

        <Header />
        <Arrow />
        <Sections />
        <Footer />

      </div>
    </>
  );
}

export default App;