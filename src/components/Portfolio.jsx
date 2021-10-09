import React, { useState, useEffect } from 'react'
import './Portfolio.scss'


const Portfolio = () => {

    return (
        <div className="Portfolio" id="Portfolio">
            <h1>Portfolio</h1>
            <p>Current portfolio site built with React and SCSS.</p>
            {/* <ul>
                {list.map(item => (
                    <PortfolioList title={item.title}
                        active={select === item.id}
                        setSelect={setSelect}
                        id={item.id} />
                ))}
            </ul> */}

            <div className="container">

                <div className="item">
                    <img src="img/ypapscreen.png" alt="" />
                    <h3>YPAP Rescue</h3>
                </div>
                <div className="item">
                    <img src="img/screencandy.png" alt="" />
                    <h3>Museum of Candy</h3>
                </div>
                <div className="item">
                    <img src="img/screenRPS.png" alt="" />
                    <h3>Rock Paper Scissors</h3>
                </div>

            </div>

            {/* <a href="#Projects">
                <img src="img/down-arrow.png" alt="" />
            </a> */}
        </div>
    )
}

export default Portfolio
