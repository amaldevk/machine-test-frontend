import React from 'react';
import logo from '../images/logo.svg';
import Menu from './Menu';
import MenuButton from './MenuButton';
import Footer from './Footer';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ 
        backgroundColor: '#121618',
        height: '100px',
      }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="250" height="250" style={{ filter: 'invert(1)' }} className="d-inline-block align-text-top"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ fontFamily: 'Oswald', fontSize: '16px', fontWeight: 400, lineHeight: '23.71px', letterSpacing: '0.03em', textAlign: 'left' }}>HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#" style={{ fontFamily: 'Oswald', fontSize: '16px', fontWeight: 400, lineHeight: '23.71px', letterSpacing: '0.03em', textAlign: 'left' }}>MENU</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#" style={{ fontFamily: 'Oswald', fontSize: '16px', fontWeight: 400, lineHeight: '23.71px', letterSpacing: '0.03em', textAlign: 'left' }}>MAKE A RESERVATION</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#" style={{ fontFamily: 'Oswald', fontSize: '16px', fontWeight: 400, lineHeight: '23.71px', letterSpacing: '0.03em', textAlign: 'left' }}>CONTACT US</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Menu/>
      <MenuButton/>
      <Footer/>
    </div>
  );
}

export default NavBar;
