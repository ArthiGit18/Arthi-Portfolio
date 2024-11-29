import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
    return (
        <div className='nav_wrapper'>
            <div className='container nav_main'>
                <div className='nav_logo'>
                    <h3><span>&lt; A /&gt;</span> Arthi</h3>
                </div>
                <div className='nav_items'>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/"><InstagramIcon className='mui_icon' /> Instagram</a></li>
                        <li><a href="/"><LinkedInIcon className='mui_icon' /> LinkedIn</a></li>
                        <li><a href="/"><GitHubIcon className='mui_icon' /> Github</a></li>
                    </ul>
                </div>
            </div>
           
        </div>
    )
}

export default Navbar