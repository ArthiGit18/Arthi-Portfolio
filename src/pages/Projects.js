import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import ScrollImage from '../common/ScrollImage';

export const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const projectRef = useRef(null);

    useEffect(() => {
        const projectElement = projectRef.current; // Store the current ref in a variable

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (projectElement) {
            observer.observe(projectElement);
        }

        // Cleanup observer when component unmounts
        return () => {
            if (projectElement) {
                observer.unobserve(projectElement);
            }
        };
    }, []); // Empty dependency array to run the effect only once

    return (
        <div className="project_wrapper" ref={projectRef}>
            <div className="project_main container">
                <ScrollImage />
                <h2>Projects</h2>
                <div className={`project ${isVisible ? 'visible' : ''}`}>
                    <div className="project1 slide-left">
                        <img src="/assets/projects/1 (2).png" alt="my Project" />
                        <div className="project_content">
                            <h3>RSL LIFESTYLE</h3>
                            <p>
                                Built a MERN stack Travel and Tourism web app enabling bookings for
                                hotels, cars, flights, and attractions. Enhanced frontend performance
                                by 30% and integrated third-party APIs for seamless reservations.
                                Developed an intuitive admin panel and collaborated cross-functionally
                                to deliver timely solutions.
                            </p>
                            <Button
                                variant="contained"
                                onClick={() => window.open('https://royalsmartlifestyle.com/', '_blank', 'noopener,noreferrer')}
                            >
                                Visit
                            </Button>
                        </div>
                    </div>
                    <div className="project1 slide-right">
                        <div className="project_content">
                            <h3>BEYOND CASA</h3>
                            <p>
                                Developed a MERN-based property listing platform with robust search
                                filters and responsive design. Optimized backend management with an
                                intuitive admin panel.
                            </p>
                            <Button
                                variant="contained"
                                onClick={() => window.open('https://beyondcasa.ae/', '_blank', 'noopener,noreferrer')}
                            >
                                Visit
                            </Button>
                        </div>
                        <img src="/assets/projects/1 (3).png" alt="my Project" />
                    </div>
                    <div className="project1 slide-left">
                        <img src="/assets/projects/1 (4).png" alt="my Project" />
                        <div className="project_content">
                            <h3>GADGETS BAZAAR</h3>
                            <p>
                                I developed a responsive Gadget Bazaar web application showcasing a
                                wide range of gadgets. Built using HTML, CSS, JavaScript, SCSS, MUI,
                                and React, the app delivers a seamless user experience.
                            </p>
                            <Button
                                variant="contained"
                                onClick={() => window.open('https://gadgetbazar.netlify.app/', '_blank', 'noopener,noreferrer')}
                            >
                                Visit
                            </Button>
                        </div>
                    </div>
                    <div className="project1 slide-right">
                        <div className="project_content">
                            <h3>MY PORTFOLIO</h3>
                            <p>
                                I have developed my portfolio site using React, HTML, CSS, and
                                JavaScript. It showcases my skills, projects, and professional
                                journey in a visually appealing and interactive manner.
                            </p>
                            <Button
                                variant="contained"
                                onClick={() => window.open('https://arthimyportfolio.netlify.app/', '_blank', 'noopener,noreferrer')}
                            >
                                Visit
                            </Button>
                        </div>

                        <img src="/assets/projects/1 (5).png" alt="my Project" />

                    </div>

                    <div className='project1 slide-left'>
                        <img src="/assets/projects/1 (6).png" alt="my Project" />
                        <div className='project_content'>
                            <h3>TRAVEL WEBSITE</h3>
                            <p>I developed Trick Travel, a responsive travel booking website using HTML, CSS, JavaScript, SCSS, MUI, and React. The site enables users to explore and book travel options seamlessly. Designed with a responsive layout, it ensures a smooth and engaging experience across desktop, tablet, and mobile devices.</p>
                            <Button
                                variant="contained"
                                onClick={() => window.open('https://tricktravelwebsite.netlify.app/', '_blank', 'noopener,noreferrer')}
                            >
                                Visit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
