import React from 'react'
import logo from '../Images/Logo Icon.svg';
import '../Style/NavBar.css';
import vector from '../Images/Vector.svg'
import arrow from '../Images/Group 212.svg'

const NavBar = () => {

    function menuclick () {
      var menu = document.querySelector(".navbar-links")
      menu.classList.toggle("active")
    }

  return (
    <div className='navbar'>
        <div className="navbar-logo">
            <img src={logo} alt="logo" />
            <span>whitepace</span>
        </div>
        <div className='menubox' onClick={menuclick}>
            <button className='menu'>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
        </div>
        <div className="navbar-links">
            <ul>
                <li>
                    <a href="/">Products <img src={vector} alt="vector" /></a>
                </li>
                <li>
                    <a href="/">Solutions <img src={vector} alt="vector" /></a>
                </li>
                <li>
                    <a href="/">Resourses <img src={vector} alt="vector" /></a>
                </li>
                <li>
                    <a href="/">Pricing <img src={vector} alt="vector" /></a>
                </li>
                <div className="button">
                {/* <li> */}
                    <a className='button1' href="#">Login</a>
                {/* </li> */}
                {/* <li> */}
                    <a className='button2' href="#">Try Whitepace Free <img src={arrow} alt="" /></a>
                {/* </li> */}
                </div>


            </ul>
        </div>

      
    </div>
  )
}

export default NavBar
