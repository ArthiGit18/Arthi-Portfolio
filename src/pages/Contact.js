import { Button } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import ScrollImage from '../common/ScrollImage';

export const Contact = () => {
    const [inViewContent, setInViewContent] = useState(false);
    const [inViewLinks, setInViewLinks] = useState(false);

    const contentRef = useRef(null);
    const linksRef = useRef(null);

    // Use IntersectionObserver to detect when elements are in view
    useEffect(() => {
        const contentElement = contentRef.current;
        const linksElement = linksRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target === contentElement && entry.isIntersecting) {
                    setInViewContent(true);
                }
                if (entry.target === linksElement && entry.isIntersecting) {
                    setInViewLinks(true);
                }
            });
        }, { threshold: 0.5 });

        if (contentElement) observer.observe(contentElement);
        if (linksElement) observer.observe(linksElement);

        // Cleanup observer when component unmounts
        return () => {
            if (contentElement) observer.unobserve(contentElement);
            if (linksElement) observer.unobserve(linksElement);
        };
    }, []); // Empty dependency array to run the effect only once

    return (
        <div className="contact_wrapper" py={4}>
            <div className="contact_main container">
                <ScrollImage />
                <h2>Get In Touch</h2>
                <div className='contact'>
                    {/* contact_content with left to right slide */}
                    <div
                        className={`contact_content ${inViewContent ? 'slide-in-left' : ''}`}
                        ref={contentRef}
                    >
                        <p>I’m interested in freelance opportunities. However, if you have other requests or questions, don’t hesitate to contact me.</p>
                        <div className="contact_actions">
                            <Button
                                variant="contained"
                                onClick={() =>
                                    window.open(
                                        'https://wa.me/916379424101?text=Hello,%20I%20would%20like%20to%20contact%20you!',
                                        '_blank',
                                        'noopener,noreferrer'
                                    )
                                }
                            >
                                <WhatsAppIcon className="mui_icon" />
                                Message
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() =>
                                    window.open(
                                        'https://mail.google.com/mail/?view=cm&fs=1&to=arthianbalagan180@gmail.com',
                                        '_blank',
                                        'noopener,noreferrer'
                                    )
                                }
                            >
                                <MailOutlineOutlinedIcon className="mui_icon" />
                                Mail
                            </Button>
                        </div>
                    </div>

                    {/* contact_links with right to left slide */}
                    <div
                        className={`contact_links ${inViewLinks ? 'slide-in-right' : ''}`}
                        ref={linksRef}
                    >
                        <ul>
                            <li><a href="https://www.instagram.com/its_a_rthi/"><InstagramIcon className='mui_icon' />Instagram</a></li>
                            <li><a href="https://app.netlify.com/teams/arthigit18/sites"><CodeIcon className='mui_icon' />Netlify</a></li>
                            <li><a href="https://github.com/ArthiGit18"><GitHubIcon className='mui_icon' />Github</a></li>
                            <li><a href="https://www.linkedin.com/in/arthianbalagan"><LinkedInIcon className='mui_icon' />LinkedIn</a></li>
                            <li><a href="https://leetcode.com/u/arthianbalagan180/"><CodeIcon className='mui_icon' />Leetcode</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
