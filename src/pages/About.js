import React from 'react'

const About = () => {
    return (
        <div className='about_wrapper'>
            <div className='container about_main'>
                <div className='scroll_img'>
                    <img src="/assets/scroll/Scroll.png" alt="Scroll Img" />
                </div>
                <div className='about_content'>
                    <div className='about_img'>
                        <img src="/assets/about/Image.png" alt="coding" />
                    </div>
                    <div className='about'>
                        <h2>About Me</h2>
                        <p>Hello!
                            My name is ARthi, <br></br>
                            and I specialize in web developement that utilizes HTML, CSS, JS, and REACT etc.
                            I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
                            When I'm not coding, I am writing bolgs, reading, or picking up some new hands-on art project like photography.
                            I like to have my perspective and belief systems challenged so that I see the world through new eyes.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About