import React from 'react';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar1 from './Page/NavBar';
import MapPage from './Page/MapView';
import Informasi from './Page/Informasi';
import About from './Page/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
        {/* <Navbar color="light" expand="md" light>
          <NavbarBrand >Pesebaran Penyakit DBD</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="m-lg-auto" navbar>
              <NavItem>
                <NavLink href="/">Peta</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/informasi">Informasi</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">Tentang Kami</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar> */}
        <Navbar1/>
      <Routes>
        {/* Home Utama*/}
        <Route exact path='/' element={<MapPage />} />
        <Route exact path='/informasi' element={<Informasi />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;