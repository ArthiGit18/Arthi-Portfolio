import React, { useEffect, useRef, useState } from 'react';


const ScrollImage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollImgRef = useRef(null);

    useEffect(() => {
        const currentRef = scrollImgRef.current; // Store the ref value in a variable
    
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
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
        <div
            ref={scrollImgRef}
            className={`scroll_img ${isVisible ? 'slide-in' : ''}`}
        >
            <img src="/assets/scroll/Scroll.png" alt="Scroll Img" />
        </div>
    );
};

export default ScrollImage;
