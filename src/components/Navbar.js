import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [togglestate, togglestateFunc] = useState(false)
     
    function handletoggle(){
        togglestateFunc(!togglestate)
    }

  return (
    <nav className='navbar'>
        <div>
            LOGO
        </div>

        <div className='hamburger'>
        <FontAwesomeIcon icon={togglestate ? faTimes : faBars} onClick={handletoggle} className='icons' />
        </div>

        <div className={`items ${togglestate && "active"}`}>
            <ul className='unorderedlist'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar