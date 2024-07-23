import React from 'react';
import './css/hero.css';
import Cpp from './svgicons/cpp.svg'
import C from './svgicons/c.png'
import Jv from './svgicons/java.png'
import Css from './svgicons/css.png'
import Md from './svgicons/md.png'
import Nj from './svgicons/nj.svg'
import Rc from './svgicons/rc.png'
import Hc from './svgicons/hero.jpg'
const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="floating-icons">
        <img src={C} alt="C++" className="icon cpp-icon" />
        <img src={Cpp} alt="JavaScript" className="icon javascript-icon" />
        <img src={Jv} alt="C#" className="icon csharp-icon" />
        <img src={Css} alt="React" className="icon react-icon" />
        <img src={Md} alt="Node.js" className="icon nodejs-icon" />
        <img src={Nj} alt="CSS" className="icon css-icon" />
        <img src={Rc} alt="HTML" className="icon html-icon" />
      </div>
      <div className="hero-container">
        <div className="hero-image">
          <img src={Hc} alt="Hero" />
        </div>
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p> I’m a passionate software developer with expertise in C++, React, Node.js, HTML, CSS, MongoDB, and data structures/algorithms. Currently pursuing a Bachelor’s degree in Computer Science and Engineering at NIT Agartala
 <br/>(Class of 2021-2025). </p></div>
      </div>
    </section>
  );
};

export default Hero;
