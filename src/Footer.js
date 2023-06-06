import { VscGithub } from "react-icons/vsc";
// import { SiReact, SiCloudflarepages} from 'react-icons/si'
import {SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <>
        <p className="love">
        Made with 💖
        </p>
        <p className="socials"> 
          <a href="https://github.com/adelicia-js" rel="noreferrer" target="_blank"><VscGithub size={25}/></a>
          <a href="https://www.linkedin.com/in/adelicia/" rel="noreferrer" target="_blank"><SiLinkedin size={25}/></a>
        </p>
        <p>
            <a href="https://github.com/adelicia-js/todo-cra" rel="noreferrer" target="_blank" className="source"><span>$Source</span></a> | 2023 - 2024 
        </p> 
        
    </>
  );
};

export default Footer;
