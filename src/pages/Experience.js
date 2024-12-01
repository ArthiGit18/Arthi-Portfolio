import React, { useEffect, useState, useRef } from 'react';
import ScrollImage from '../common/ScrollImage';

export const Experience = () => {
    const [isVisible, setIsVisible] = useState(false);
    const expRef = useRef(null);

    useEffect(() => {
        const currentRef = expRef.current;
    
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );
    
        if (currentRef) {
            observer.observe(currentRef);
        }
    
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div className="exp_wrapper" ref={expRef}>
            <div className="exp_main container">
                <ScrollImage />
                <h2>Experience</h2>
                <div className="exp">
                    {[
                        {
                            title: 'FUZIONEST PRIVATE LTD',
                            desc: 'ASSOCIATE SOFTWARE DEVELOPER (9 MONTHS) - JAN 2024',
                        },
                        {
                            title: 'FUZIONEST PRIVATE LTD',
                            desc: 'WEB DEVELOPMENT (INTERN - 2 Months)',
                        },
                        {
                            title: 'TECHVOLT PRIVATE LTD',
                            desc: 'WEB DEVELOPMENT (INTERN - 2 Months)',
                        },
                        {
                            title: 'M.A.M COLLEGE OF ENGINEERING',
                            desc: 'B.E(CSE) - JUL 2022',
                        },
                        {
                            title: 'SOWDAMBIKAA MATRIC HR.SEC SCHOOL',
                            desc: 'HSC - MAR 2018',
                        },
                        {
                            title: 'S.F.S Matric Hr Sec School',
                            desc: 'SSLC - MAR 2016',
                        },
                    ].map((item, index) => (
                        <div
                            className={`exp1 ${isVisible ? `animate-exp-${index}` : ''}`}
                            key={index}
                        >
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
