import React from "react";
import { useState } from "react";
import "./Navbar.css" ;
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Logo from '../../assets/Logo.JPEG';

const Menu = () => (
    <>
        <p><a className="link" href="#home">Home</a></p> 
        <p><a className="link" href="#about-ilaria">About Ilaria</a></p> 
        <p><a className="link" href="#about-dharini">About Dharini</a></p>
        <p><a className="link" href="#our-youtube">Our Youtube</a></p> 
    </>
)


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className= "portfolio__navbar">
            <div className="portfolio__navbar-links" >
                <div className="portfolio__navbar-links_container">
                    <Menu />
                </div>
                <div className='portfolio__navbar-menu'>
                    {toggleMenu 
                        ? <RiCloseLine color="fff" size={27} onClick={()=> setToggleMenu(false)} />
                        : <RiMenu3Line color="fff" size={27} onClick={()=> setToggleMenu(true)} />
                    }
                    {toggleMenu &&
                        <div className='portfolio__navbar-menu_container scale-up-center'>
                            <div className='portfolio__navbar-menu_container-links'>
                                <Menu />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
  )

}
export default Navbar
