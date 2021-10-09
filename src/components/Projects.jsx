import React, { useState } from 'react'
import './Projects.scss'

const Projects = () => {

    const [current, setCurrent] = useState(0);

    const projectData = [
        {
            id: 1,
            title: 'YPAP Rescue',
            description: 'Mock website for YPAP, a dog rescue and adoption organization based in Yongin, Korea. Built with JavaScript and BootStrap.',
            img: 'img/ypapscreen.png',
            link: 'https://biekimes.github.io/Yongin%20Pound/YPAP_home.html'
        },
        {
            id: 2,
            title: 'Museum of Candy',
            description: 'Landing page for a fictional Museum of Candy built with BootStrap.',
            img: 'img/screencandy.png',
            link: 'https://biekimes.github.io/candy_museum/candy.html'
        },
        {
            id: 3,
            title: 'Rock Paper Scissors',
            description: 'A simple Rock Paper Scissor game. Built with JavaScript.',
            img: 'img/screenRPS.png',
            link: 'https://biekimes.github.io/rps/rockpaperscissor.html'
        }
    ]

    const handleClick = (way) => {
        way === "left" ? setCurrent(current > 0 ? current - 1 : 2) :
            setCurrent(current < projectData.length - 1 ? current + 1 : 0)
    }

    return (
        <div className="Projects" id="Projects">
            <h1>Projects</h1>
            <div className="slider" style={{ transform: `translateX(-${current * 100}vw)` }}>
                {projectData.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <img src={d.img} alt="" />
                                </div>
                            </div>

                            <div className="right">
                                <div className="rightContainer">
                                    <h2>{d.title}</h2>
                                    <p>{d.description}</p>
                                    <a href={d.link}>Visit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src="img/down-arrow.png" className="arrow left" alt="" onClick={() => { handleClick("left") }} />
            <img src="img/down-arrow.png" className="arrow right" alt="" onClick={() => { handleClick() }} />
        </div>
    )
}

export default Projects
