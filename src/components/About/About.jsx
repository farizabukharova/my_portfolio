import { AiFillHtml5 } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { SiRedux, SiJavascript, SiPostgresql } from 'react-icons/si';
import profileImg from '../../assets/images/pro.jpeg';
import rubyImg from '../../assets/images/laravel.png';
import './About.css';
import { useEffect } from 'react';
import { keyframes } from "@emotion/react";
import { Fade, Reveal } from 'react-awesome-reveal';

const About = () => {
  useEffect(() => {
    onVisible(document.querySelector('#coffee-id'), () => {
      animateCounter();
    });
  }, []);

  const animateLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-10%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const animateRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(10%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const animateBottom = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 20%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const animateTop = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -20%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;


  const animateCounter = () => {
    const valueDisplays = document.querySelectorAll('.num');
    const interval = 4000;
  
    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      const endValue = parseInt(valueDisplay.getAttribute('data-val'), 10);
      const duration = Math.floor(interval / endValue);
      const counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  };

  const onVisible = (element, callback) => {
    new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          callback(element);
          observer.disconnect();
        }
      });
    }).observe(element);
  };

  return ( 
    <section className="about-section" id="about">
      <div className="about-main">
        <Fade delay={200} duration={2000} triggerOnce>
          <div>
            <img alt="profile" id="profile-img" src={profileImg} width={2651} height={2481}></img>
          </div>
        </Fade>
        <div className="about-text">
            <Reveal delay={1200} duration={1500} keyframes={animateLeft} triggerOnce>
            <div id="ab-cont">
                <div>
              <h3 className="ab text-[10px] 2xl:text-[15px]">About Me</h3>
              <h2>Hello</h2>
              <p className='text-[15px] 2xl:text-xl'><strong className="font-bold"> I&apos;m Bukharova Fariza</strong>, I am Bukharova Fariza,
                Currently, I am studying information technology at NARXOZ University

                Currently, I am developing myself as a student and devoting all my energy to studying. NARXOZ University, home of the educated.

                My goal is to develop myself in the field of IT and further increase my knowledge.

                My future plan is to improve my knowledge in the direction of design! Check out some of my work below, and if you like what you see, don&apos;t hesitate to contact me.</p>
              <a href="#contact" id="hire">Hire Me</a>
              <a href="https://drive.google.com/file/d/1FCGNVt-PSvHexg76zJB0ylAsu3_YxbR0/view?usp=sharing" target="_blank" rel="noreferrer">View CV</a>
                </div>
            </div>
            </Reveal>
        </div>
      </div>
      <div className="tech">
        <Fade direction={'up'} duration={1300} delay={200} triggerOnce>
        <h2 id="tec">Tech <strong className="font-bold">Stack</strong></h2>
        </Fade>
        <div className="skills">
          <Reveal keyframes={animateLeft} delay={1000} triggerOnce>
          <div id="skill1" className="skill-div">
            <i><AiFillHtml5 className="text-[2em] text-[#ec5453]" /></i>
            <h3>HTML</h3>
            <hr className="html" />
          </div>
          </Reveal>
          <Reveal keyframes={animateRight} delay={1300} triggerOnce>
          <div id="skill2" className="skill-div">
            <i><IoLogoCss3 className="text-[2em] text-[#2c98f0]" /></i>
            <h3>CSS</h3>
            <hr className="css" />
          </div>
          </Reveal>
          <Reveal keyframes={animateBottom} delay={1700} triggerOnce>
          <div id="skill3" className="skill-div">
            <i><SiJavascript className="text-[2em] text-[#f9bf3f]" /></i>
            <h3>JavaScript</h3>
            <hr className="js" />
          </div> 
          </Reveal> 
          <Reveal keyframes={animateTop} delay={1900} triggerOnce>
          <div id="skill4" className="skill-div">
            <i><FaReact className="text-[2em] text-[#8edef4]" /></i>
            <h3>React</h3>
            <hr className="react" />
          </div>
          </Reveal>
          <Reveal keyframes={animateLeft} delay={2100} triggerOnce>
          <div id="skill5" className="skill-icon skill-div">
            <i><SiRedux className="text-[2em] text-[#8059c2]" /></i>
            <h3>Redux</h3>
            <hr className="redux" />
          </div>
          </Reveal>
          <Reveal keyframes={animateRight} delay={2300} triggerOnce>
          <div id="skill6" className="skill-icon skill-div">
            <img src={rubyImg} id="ruby" alt="ruby" />
            <h3>Laravel</h3>
            <hr className="ruby" />
          </div>
          </Reveal>
          <Reveal keyframes={animateTop} delay={2700} triggerOnce>
          <div id="skill8"className="skill-icon skill-div">
            <i><SiPostgresql className="text-[2em] text-[#31648c]" /></i>
            <h3>PostgreSql</h3>
            <hr className="postgre" />
          </div>
          </Reveal>
        </div>
      </div>
      <div className="coffee" id="coffee-id">

      </div>
    </section>
  );
}
 
export default About;