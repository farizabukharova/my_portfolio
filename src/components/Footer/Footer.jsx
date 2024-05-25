import { BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';
import './Footer.css';
import { Fade, Reveal } from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";

const Footer = () => {
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

  return ( 
    <footer className="footer">
      <Fade duration={2000} triggerOnce>
      <p id="copyright">Copyright 2024</p>
          <p>A project by Bukharova</p>
      </Fade>
      <Reveal keyframes={animateBottom} duration={1300} cascade triggerOnce>
      <ul>
        <li className="tou" id="tou1"><a href="https://www.instagram.com/akbaarovna/"><i className="foot-link"><BsInstagram className="text-2xl" /></i></a></li>
        <li className="tou" id="tou2"><a href="https://www.linkedin.com/in/%D1%84%D0%B0%D1%80%D0%B8%D0%B7%D0%B0-%D0%B1%D1%83%D1%85%D0%B0%D1%80%D0%BE%D0%B2%D0%B0-18524b257/?originalSubdomain=kz"><i className="foot-link"><BsLinkedin className="text-2xl" /></i></a></li>
        <li className="tou" id="tou3"><a href="https://github.com/farizabukharova"><i className="foot-link"><BsGithub className="text-2xl" /></i></a></li>
      </ul>
      </Reveal>
    </footer>
  );
}
 
export default Footer;