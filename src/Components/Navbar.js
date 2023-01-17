import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className='body'>
            <nav className="nav">
                <div className="container">
                    <div className="logo">
                        <img src='logo.png' />
                    </div>
                    <div id="mainListDiv" className="main_list">
                        <ul className="navlinks">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Food</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <span className="navTrigger">
                        <i />
                        <i />
                        <i />
                    </span>
                </div>
            </nav>
            <section className="home">
                <div className='home-text'>
                    <h1 style={{ marginTop: '38px', marginLeft: '150px' }}>Welcome to Cat World</h1>
        </div>
            </section >

        {/* Jquery needed */ }
    {/* Function used to shrink nav bar removing paddings and adding black background */ }
        </div >
    )
}

export default Navbar