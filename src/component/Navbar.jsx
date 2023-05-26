import React from 'react'
import Logo from '../image/Logo.png'; 
import navbar from './navbar.css';
const Navbar = () => {
  return (
    <>
            <div id="header" className="container navbg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg bg-dark fixed-top ">
                            <div className="container-fluid ">
                               <img src={Logo} alt="difmlogo" class="me" height="107px"width="259px"/>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                                    <li className="nav-item cabile">
                                            <div className="nav-link fs-6 text-white fw-light " to="/about">About</div>
                                        </li>
                                        <li className="nav-item cabile">
                                            <div className="nav-link fs-6 text-white fw-light" to="/service">Services</div>
                                        </li>
                                        <li className="nav-item cabile">
                                            <div className="nav-link fs-6 text-white fw-light " aria-current="page" to="/">Portfolio Realation</div>
                                        </li>
                                        
                                        <li className="nav-item cabile">
                                            <div className="nav-link fs-6 text-white fw-light" to="/about">Investor</div>
                                        </li>
                                        <li className="nav-item cabile">
                                            <div className="nav-link fs-6 text-white fw-light" to="/about">Our Team</div>
                                        </li>
                                        
                                        <li className="nav-item cabile">
                                            <div className="nav-link fs-5 text-white fw-light" to="/contact">Contact</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                
            </div>
        </>
  )
}

export default Navbar