import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import IDES from './browserIDEs';
import Landing from './views/Landing';
import SiteDisplay from './components/SiteDisplay';

function App() {
  // Create an array of objects per site to pass to siteDisplay component which becomes it's own page and link via a map to routes below landing
  return (
    <div className="App">
      <Navbar
    className="my-2"
    color="secondary"
    dark
  >
    <NavbarBrand href="/BrowserIDETesting/">
      Browser IDE Testing Grounds
    </NavbarBrand>
  </Navbar>
      <Routes>
        <Route
          path='/BrowserIDETesting/'
          element={<Landing IDES={IDES}/>}
          />
        {
          IDES.map(IDE => (
            <Route
            path={'/BrowserIDETesting/'+IDE.name}
            element={<SiteDisplay IDE={IDE} />}
          />
          ))
        }
      </Routes>

    </div>
  );
}

export default App;
