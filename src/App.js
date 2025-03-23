import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router và Routes
import LanguageSelector from './component/containers/LanguageSelector';
import { LanguageProvider } from './component/containers/Language';
import Explore from './component/Explore';
import Footer from './component/Footer';
import HistoryAPK from './component/HistoryAPK';  // Import trang HistoryAPK

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <LanguageSelector />
            {/* <Explore /> */}
            <Footer />
            <Routes>
              {/* Cấu hình các tuyến đường */}
              <Route path="/" element={<Explore />} />
              <Route path="/HistoryAPK" element={<HistoryAPK />} />
            </Routes>
          </header>
        </div>
      </Router>
    </LanguageProvider>
  );
 }

export default App;
