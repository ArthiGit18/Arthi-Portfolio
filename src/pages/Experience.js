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

    const experienceData = [
        {
            title: 'FUZIONEST PRIVATE LTD',
            desc: 'ASSOCIATE SOFTWARE DEVELOPER (9 MONTHS) - JAN 2024',
            link: 'https://drive.google.com/file/d/1bQ5N8pGII9LlRRWfL6kSRo9Dtjr2ce5w/view?usp=drive_link',
        },
        {
            title: 'FUZIONEST PRIVATE LTD',
            desc: 'WEB DEVELOPMENT (INTERN - 2 Months)',
            link: 'https://drive.google.com/file/d/1rFQludbFM3UdO4h7Q61-m-upNKw9aCSj/view?usp=drive_link',
        },
        {
            title: 'TECHVOLT PRIVATE LTD',
            desc: 'WEB DEVELOPMENT (INTERN - 2 Months)',
            link: 'https://drive.google.com/file/d/1cfigntC3LarSB1LHOrMgKLBajWbJgJt-/view?usp=drive_link',
        },
        {
            title: 'M.A.M COLLEGE OF ENGINEERING',
            desc: 'B.E(CSE) - JUL 2022',
            link: '',
        },
        {
            title: 'SOWDAMBIKAA MATRIC HR.SEC SCHOOL',
            desc: 'HSC - MAR 2018',
            link: '',
        },
        {
            title: 'S.F.S Matric Hr Sec School',
            desc: 'SSLC - MAR 2016',
            link: '',
        },
    ];

    return (
        <div className="exp_wrapper" ref={expRef}>
            <div className="exp_main container">
                <ScrollImage />
                <h2>Experience</h2>
                <div className="exp">
                    {experienceData.map((item, index) => (
                        <div
                            className={`exp1 ${isVisible ? `animate-exp-${index}` : ''}`}
                            key={index}
                        >
                            <h3>
                                {item.link ? (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.title}
                                    </a>
                                ) : (
                                    item.title
                                )}
                            </h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
