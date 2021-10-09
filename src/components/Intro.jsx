import React from 'react'
import { useEffect, useRef } from 'react'
import './Intro.scss'
import { init } from 'ityped'

const Intro = () => {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current,
            {
                showCursor: true,
                backDelay: 500,

                strings: ['Web Developer']
            })
    }, [])

    return (
        <div className="Intro" id="Intro">
            {/* <div className="left">
                <div className="imgContainer">
                    <img src="" alt="" />
                </div>
            </div> */}
            <div className="right">
                <div className="wrapper">
                    <h2>My Name Is</h2>

                    <h1>Bum</h1>
                    <h3>I am a <span ref={textRef}></span></h3>

                </div>
            </div>
            <div className="arrowContainer">
                <a href="#Portfolio">
                    <img src="img/down-arrow.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
