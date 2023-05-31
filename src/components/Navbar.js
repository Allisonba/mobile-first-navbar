import React from 'react'
import {FaBars} from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

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
        <FaBars onClick={handletoggle}/>
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