import React from 'react'
import './About.scss'

const About = () => {
    return (
        <div className="About" id="About">
            <div className="aboutMe">
                <p>Hi, I am Bum Hyun Kim from Seoul, Korea. </p>
                <p> I just go by <span>Bum</span>.</p>
                <p> I am a <span>Front-End Web Developer</span>.</p>
                <p>I design responsive sites and web applications then build them with code.</p>

            </div>
            <div className="techStack">
                <h2>This is my Tech Stack</h2>
                <h3>Languages</h3>
                <ul>
                    <li><img src="img/html.svg" alt="" /> HTML</li>
                    <li><img src="img/css.svg" alt="" /> CSS</li>
                    <li><img src="img/sass.svg" alt="" /> SASS</li>
                    <li><img src="img/javascript.svg" alt="" /> JavaScript</li>
                </ul>
                <h3>Frameworks/Libraries</h3>
                <ul>
                    <li><img src="img/jquery.svg" alt="" /> jQuery</li>
                    <li><img src="img/react.svg" alt="" /> React</li>
                    <li><img src="img/bootstrap.svg" alt="" /> BootStrap</li>
                </ul>
                <h3>Tools</h3>
                <ul>
                    <li><img src="img/figma.svg" alt="" /> Figma</li>
                    <li><img src="img/git.svg" alt="" /> Git</li>
                    <li><img src="img/node-js.svg" alt="" /> Node.js</li>
                </ul>
            </div>
        </div>
    )
}

export default About
