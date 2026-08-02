import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">{props.homeText}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
            </ul>
          </div>
          
          <div className="d-flex me-3">
            <div className="bg-primary rounded mx-2" onClick={() => props.changeTheme('#042743')} style={{height: '30px', width: '30px', cursor: 'pointer', border: '1px solid white'}}></div>
            <div className="bg-success rounded mx-2" onClick={() => props.changeTheme('#0f5132')} style={{height: '30px', width: '30px', cursor: 'pointer', border: '1px solid white'}}></div>
            <div className="bg-danger rounded mx-2" onClick={() => props.changeTheme('#842029')} style={{height: '30px', width: '30px', cursor: 'pointer', border: '1px solid white'}}></div>
            <div className="bg-light rounded mx-2" onClick={() => props.changeTheme('#ffffff')} style={{height: '30px', width: '30px', cursor: 'pointer', border: '1px solid black'}}></div>
          </div>
          
          {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.togglemode}/>
            <label className="form-check-label" htmlFor="switchCheckDefault">Enable Darkmode</label> */}
          {/* </div> */}
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  homeText: PropTypes.string,
};
