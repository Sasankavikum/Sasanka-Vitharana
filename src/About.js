import React from "react";
import './About.css';
import aboutImg from './images/IMG_2044.jpg';
import './Contact.js';

function About() {
   //  Up To Top Btn
   window.addEventListener("scroll", function(){
    const upToTop = document.querySelector("a.bottom__to__top");
     upToTop.classList.toggle("active", window.scrollY > 0)
  });
    return(
        <div className="about component_space" id="About">
            <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
            <p className="about__text p__color">
            My name is Sasanka Vitharana. I am currently reading BSc. Statistic & Operation 
            Research four-year specialized degree in the University of Peradeniya. The degree program 
            consists of Operation Research, Statistics, Computer Science, and Mathematics 
            as subjects. And the same time I am an undergraduate student in BSc. (Hons) in Information 
              Technology four-year specialized degree in Sri Lanka Institute of Information 
              Technology. It consists of Computer Science subjects.
              </p>
              <p className="about__text p__color">
              I did my schooling at Ananda Maithreya Central College Balangoda. I did my 
              Advance Level in Physical Science stream by doing Combined Mathematics, Physics, 
              and Information & Communication Technology with 3 C passes.
              </p>
              <p className="about__text p__color">
              As a programmer, I am extremely passionate about different computer languages. 
              I have skills in C, JAVA, Flutter, React, PYTHON, HTML, CSS, JavaScript, MySQL. 
              I also have experience in Lingo, RStudio, SSPSS, and Microsoft Packages.
              </p>
              <p className="about__text p__color">
              I request you to go through my profile and consider my skills based on your 
              requirements. I assure you that I will not fail your decision.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="././CV-SasankaVikum.pdf">
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="#Contact">
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