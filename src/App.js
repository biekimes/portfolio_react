import React from 'react'
import { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Menu from './components/Menu/Menu'
import About from './components/About'

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='App'>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className='Sections'>
                <Intro />
                <About />
                <Portfolio />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}

export default App
