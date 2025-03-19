import React from 'react';
import './App.css';
import LanguageSelector from './component/containers/LanguageSelector';
import { LanguageProvider } from './component/containers/Language';
import Explore from './component/Explore';
import Footer from './component/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <header className="App-header">
          <LanguageSelector />
          <Explore />
          <Footer/>
        </header>
      </div>
    </LanguageProvider>
  );
 }

export default App;
