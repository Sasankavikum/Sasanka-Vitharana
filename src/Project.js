import React from "react";
import './Project.css';
import Project1 from './images/travel.jpeg';
import Project2 from './images/redCross.png';
import Project3 from './images/personal.png';
import Project4 from './images/home.png';
import Project5 from './images/get-2.png';
import Project6 from './images/vaccine.png';


function Project() {
    return (
      <div className="project component__space" id="Project">
        <div className="heading">
          <h1 className="heading">My Latest Project</h1>
          <p className="heading p__color">
          I learned different programming concepts and techniques through my both degree programs.
          </p>
          <p className="heading p__color">
            I implement those through my projects.
          </p>
        </div>
         <div className="container">
             <div className="row">
               
               <div className="col__3">
                   <div className="project__box pointer relative">
                       <div className="project__box__img pointer relative">
                           <div className="project__img__box">
                               <img src={Project1} alt="" className="project__img" />
                           </div>
                           <div className="mask__effect"></div>
                       </div>
                       <div className="project__meta absolute">
                       <h5 className="project__text">Travel Blog</h5>
                       <h4 className="project__text">Flutter Mobile app.</h4>
                       <a href="https://github.com/Sasankavikum/Travel-Blog" className="project__btn">View Details</a>
                       </div>
                   </div>
               </div>
  
  
               <div className="col__3">
                   <div className="project__box pointer relative">
                       <div className="project__box__img pointer relative">
                           <div className="project__img__box">
                               <img src={Project2} alt="" className="project__img" />
                           </div>
                           <div className="mask__effect"></div>
                       </div>
                       <div className="project__meta absolute">
                       <h5 className="project__text">Red Cross Website</h5>
                       <h4 className="project__text">My part is to handle Inventory.</h4>
                       <a href="https://github.com/Sasankavikum/RedCross-Inventory" className="project__btn">View Details</a>
                       </div>
                   </div>
               </div>
  
  
               <div className="col__3">
                   <div className="project__box pointer relative">
                       <div className="project__box__img pointer relative">
                           <div className="project__img__box">
                               <img src={Project3} alt="" className="project__img" />
                           </div>
                           <div className="mask__effect"></div>
                       </div>
                       <div className="project__meta absolute">
                       <h5 className="project__text">Personal Website</h5>
                       <h4 className="project__text">Website for my works.</h4>
                       <a href="https://sasanka.me/" className="project__btn">View Details</a>
                       </div>
                   </div>
               </div>

               <div className="col__3">
                   <div className="project__box pointer relative">
                       <div className="project__box__img pointer relative">
                           <div className="project__img__box">
                               <img src={Project4} alt="" className="project__img" />
                           </div>
                           <div className="mask__effect"></div>
                       </div>
                       <div className="project__meta absolute">
                       <h5 className="project__text">E-Net -English Learning Platform</h5>
                       <h4 className="project__text">Web page</h4>
                       <a href="https://rslup.github.io/2021g2r1/" className="project__btn">View Details</a>
                       </div>
                   </div>
               </div>
  
  
               <div className="col__3">
                   <div className="project__box pointer relative">
                       <div className="project__box__img pointer relative">
                           <div className="project__img__box">
                               <img src={Project5} alt="" className="project__img" />
                           </div>
                           <div className="mask__effect"></div>
                       </div>
                       <div className="project__meta absolute">
                       <h5 className="project__text">ElectroGrid</h5>
                       <h4 className="project__text">API for ElectroGrid Company</h4>
                       <a href="https://github.com/Sasankavikum/ElectroGrid.git" className="project__btn">View Details</a>
                       </div>
                   </div>
               </div>
  
  
               <div className="col__3">
                   <div className="project__box pointer relative">
                       <div className="project__box__img pointer relative">
                           <div className="project__img__box">
                               <img src={Project6} alt="" className="project__img" />
                           </div>
                           <div className="mask__effect"></div>
                       </div>
                       <div className="project__meta absolute">
                       <h5 className="project__text">Vaccine Support Service System</h5>
                       <h4 className="project__text">Web based project for vaccine Service</h4>
                       <a href="https://github.com/Sasankavikum/Vaccination.git" className="project__btn">View Details</a>
                       </div>
                   </div>
               </div>
               
               <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
               <button className="view__more pointer btn">View more</button>
               </div>
  
             </div>
         </div>
      </div>
    );
  }
  
  export default Project;