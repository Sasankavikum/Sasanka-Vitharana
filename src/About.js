import React from "react";
import './About.css';
import aboutImg from './images/IMG_2044.jpg';

function About() {
   //  Up To Top Btn
   window.addEventListener("scroll", function(){
    const upToTop = document.querySelector("a.bottom__to__top");
     upToTop.classList.toggle("active", window.scrollY > 0)
  });
    return(
        <div className="about component_space">
            <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              I'm currently an undergraduate student through BSc. 
              Statistics & Operation Research, four-year special degree program 
              in University Of Peradeniya. The degree program is mainly focused 
              in Operations Research, Statistics, Computer Science and Mathematics. 
              </p>
              <p className="about__text p__color">
              And also I’m an undergraduate student through BSc (Hons) in Information 
              Technology four-year special degree program in Sri Lanka Institute of 
              Information Technology (SLIIT). It mainly forcused Computer Science subjects.
              </p>
              <p className="about__text p__color">
              As a programmer, I'm skilled on languages 
              like C, JAVA, Flutter, React, PYTHON, HTML, CSS, JavaScript, MySQL. Also 
              I have experience on working with Lingo, RStudio, SSPSS, Microsoft Package,

              </p>
              <div className="about__button d__flex align__items__center">
                <a href="CV.pdf">
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="https://www.linkedin.com/in/sasanka-vitharana-607768181/">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default About;