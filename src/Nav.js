import React from "react";
import './Home.css';
import { Link } from 'react-router-dom';

function Nav() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
            <Link to='/'>
                <li className="nav__items mx__15">Home</li>
            </Link>
              <Link to='/about'>
                <li className="nav__items mx__15">About</li>
              </Link>
              <Link to='/services'>
                <li className="nav__items mx__15">Services</li>
              </Link>
              <Link to='/project'>
                <li className="nav__items mx__15">Project</li>
              </Link>
              <Link to='/contact'>
                <li className="nav__items mx__15">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;

