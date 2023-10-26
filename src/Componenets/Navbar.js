import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
import {Link} from 'react-router-dom'
export default function Navbar(props) {
    const changeBg1 = () => {
        document.body.style.backgroundColor = "#81478d";
    }
    const changeBg2 = () => {
        document.body.style.backgroundColor = "#226a77";
    }
    const changeBg3 = () => {
        document.body.style.backgroundColor = "#b64d1d";
    }
  return (
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode }`}>
              <div className="container-fluid">
              <Link className="navbar-brand" href="/">{props.title}</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                      </li>
                          <li className="nav-item">
                          <a className="nav-link" href="/">{props.aboutext}</a>
                          </li>
                  </ul>
                                   
                  <p className='colour c1' onClick={changeBg1}></p>
                  <p className='colour c2' onClick={changeBg2}></p>
                  <p className='colour c3' onClick={changeBg3}></p>

                  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                  </div>
              </div>
              
          </div>
          </nav>
  )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutext:PropTypes.string
}
Navbar.defaultProps = {
    title: "Set title"
};