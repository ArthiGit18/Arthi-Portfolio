import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ScrollImage from '../common/ScrollImage';

const skillsData = {
    languages: [
        { name: 'Javascript', proficiency: 90 },
        { name: 'Java', proficiency: 70 },
        { name: 'HTML/HTML5', proficiency: 95 },
        { name: 'CSS', proficiency: 85 },
    ],
    frontend: [
        { name: 'React.js', proficiency: 90 },
        { name: 'Redux', proficiency: 85 },
        { name: 'Next.js', proficiency: 80 },
        { name: 'Mui', proficiency: 85 },
        { name: 'Bootstrap', proficiency: 80 },
    ],
    backend: [
        { name: 'Node.js', proficiency: 85 },
        { name: 'Express.js', proficiency: 80 },
        { name: 'MongoDB', proficiency: 75 },
        { name: 'Authentication', proficiency: 80 },
        { name: 'Authorization', proficiency: 75 },
    ],
    tools: [
        { name: 'Git/GitHub', proficiency: 90 },
        { name: 'Postman', proficiency: 85 },
        { name: 'Swagger', proficiency: 70 },
        { name: 'Webpack', proficiency: 75 },
        { name: 'Prettier', proficiency: 80 },
    ],
};

const SkillCategory = ({ title, skills }) => (
    <Box mb={4}>
        <h3 className='title'>{title}</h3>
        {skills.map((skill) => (
            <Box key={skill.name} mb={2}>
                <Typography variant="body2" gutterBottom>
                    {skill.name}
                </Typography>
            </Box>
        ))}
    </Box>
);

const Skills = () => {
    useEffect(() => {
        // Randomize the position, rotation, and animation duration for each ball
        const balls = document.querySelectorAll('.balls img');
        balls.forEach((ball) => {
            const randomX = Math.random() * 100;  // Random X position percentage
            const randomY = Math.random() * 100;  // Random Y position percentage
            const randomRotation = Math.random() * 360;  // Random rotation angle
            const randomDuration = Math.random() * 10 + 5;  // Random duration (5-15s)

            ball.style.left = `${randomX}%`;
            ball.style.top = `${randomY}%`;
            ball.style.transform = `rotate(${randomRotation}deg)`;
            ball.style.animationDuration = `${randomDuration}s`;
        });
    }, []);

    return (
        <Box className="skills_wrapper" py={4}>
            <Box className="skills_main container">
                <ScrollImage />
                <h2>Skills</h2>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <SkillCategory title="Languages" skills={skillsData.languages} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <SkillCategory title="Frontend" skills={skillsData.frontend} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <SkillCategory title="Backend" skills={skillsData.backend} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <SkillCategory title="Tools" skills={skillsData.tools} />
                    </Grid>
                </Grid>
            </Box>
            <div className='balls'>
                <img src="/assets/ball/Ball.png" alt="ball" />
                <img src="/assets/ball/Ball (1).png" alt="ball" />
                <img src="/assets/ball/Ellipse 168.png" alt="ball" />
            </div>
        </Box>
    );
};

export default Skills;
