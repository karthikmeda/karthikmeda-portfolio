import React, { useContext,useState,useEffect} from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'
import whoami from '../../assets/jpeg/whoami.jpg'

function About() {

    const { theme } = useContext(ThemeContext);
    const [isClicked, setIsClicked] = useState(false);


    useEffect(() => {
        setIsClicked(true); // Trigger animation when component mounts
        // Additional logic for animation if needed
    }, []);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p>
                </div>
                <div className="about-img">
                    <img 
                        src={whoami}  
                        alt="" 
                        style={{ borderRadius: '50%', width: '450px', height: '450px' }} 
                        className={isClicked ? "animated-img" : ""}
                        onClick={useEffect}
                    />
                </div>
            </div>
        </div>

    )
}

export default About
