import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

export const Fixed = () => {
    return (
        <div className='fixed_wrapper'>
            <div className='fixed'>
                <ul>
                    <li>
                        <a href="/"><HomeRoundedIcon /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/its_a_rthi/"><InstagramIcon /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/arthianbalagan"><LinkedInIcon /></a>
                    </li>
                    <li>
                        <a href="https://github.com/ArthiGit18"><GitHubIcon /></a>
                    </li>
                    <li>
                        <a
                            href="https://wa.me/916379424101"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Contact via WhatsApp"
                        >
                            <WhatsAppIcon />
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:arthianbalagan180@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Send an Email"
                        >
                            <EmailIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
