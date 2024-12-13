import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import ScrollImage from '../common/ScrollImage';
import projectsData from '../common/projects.json'

export const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showAll, setShowAll] = useState(false); // State to toggle showing all projects

    useEffect(() => {
        const projectElement = document.querySelector(".project_wrapper"); // Store the current ref in a variable
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
        
        return () => {
            if (projectElement) {
                observer.unobserve(projectElement);
            }
        };
    }, []);

    // Function to handle "Read More" and "Show Less" toggle
    const toggleShowAll = () => {
        setShowAll((prevShowAll) => !prevShowAll);
    };

    // Slice the data based on the `showAll` state
    const projectsToShow = showAll ? projectsData : projectsData.slice(0, 3);

    return (
        <div className="project_wrapper">
            <div className="project_main container">
                <ScrollImage />
                <h2>Projects</h2>
                <div className={`project ${isVisible ? 'visible' : ''}`}>
                    {projectsToShow.map((project, index) => (
                        <div
                            className={`project1 ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}
                            key={index}
                        >
                            {index % 2 === 0 ? (
                                <img src={project.image} alt={project.title} />
                            ) : (
                                <div className="project_content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <Button
                                      className='button_class'
                                        variant="contained"
                                        onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                                    >
                                        Visit Website
                                    </Button>
                                </div>
                            )}

                            {index % 2 !== 0 && (
                                <img src={project.image} alt={project.title} />
                            )}

                            {index % 2 === 0 && (
                                <div className="project_content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <Button
                                    className='button_class'
                                        variant="contained"
                                        onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                                    >
                                        Visit Website
                                    </Button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <Button
                className='button_class'
                    variant="contained"
                    onClick={toggleShowAll}
                    style={{ marginTop: '20px' }}
                >
                    {showAll ? 'Show Less' : 'Read More'}
                </Button>
            </div>
        </div>
    );
};
