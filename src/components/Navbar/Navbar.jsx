import React from "react";
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import "./Navbar.css" ;
import Logo from '../../assets/Logo.JPEG';
const Navbar = () => {
    return (
        <div className= "navbar">
            <div className="navbar-links_container" >
                <p><a className="link" href="#home">Home</a></p> 
                <p><a className="link" href="#about-ilaria">About Ilaria</a></p> 
                <p><a className="link" href="#about-dharini">About Dharini</a></p> 
    
                <p><a className="link" href="#our-youtube">Our Youtube</a></p> 
            </div>
        </div>
  )

}
export default Navbar
