import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
// import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu'; // MUI Hamburger Menu Icon
import CloseIcon from '@mui/icons-material/Close'; // MUI Close Icon

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='nav_wrapper'>
            <div className='container nav_main'>
                <div className='nav_logo'>
                    <h3><span>&lt; A /&gt;</span> Arthi</h3>
                </div>
                
                <div className={`nav_items ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        {/* Use <Link> for internal navigation */}
                        <li>
                            <Link
                                to="#"
                                onClick={() => handleScrollToSection('hero')}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                onClick={() => handleScrollToSection('about')}
                            >
                                About
                            </Link>
                        </li>
                        {/* External links should remain as <a> */}
                        <li>
                        <Link
                                to="#"
                                onClick={() => handleScrollToSection('skills')}
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/arthianbalagan" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon className='mui_icon' /> LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/ArthiGit18" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon className='mui_icon' /> Github
                            </a>
                        </li>
                    </ul>
                </div>
                
                {/* Hamburger Menu Icon for Mobile */}
                <div className='hamburger_menu' onClick={toggleMenu}>
                    {menuOpen ? <CloseIcon className="mui_icon" /> : <MenuIcon className="mui_icon" />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
