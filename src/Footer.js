import { VscGithub } from "react-icons/vsc";
// import { SiReact, SiCloudflarepages} from 'react-icons/si'
import {SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <>
        <p className="love">
        Made with 💙
        </p>
        <p className="socials">
            <VscGithub size={20}/>
            <SiLinkedin size={20}/>
        </p>
        <p>
            $Source | 2023 - 2024 
        </p> 
        
    </>
  );
};

export default Footer;
