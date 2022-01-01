import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import "../styles/About.css";
import AboutInfo from './AboutInfo';
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import StorageIcon from '@mui/icons-material/Storage';
import SchoolIcon from '@mui/icons-material/School';

function About({navOpened}) {

    useEffect(() =>{
        Aos.init({duration: 1000});
    }, []);

    return (
        <div className={`about ${navOpened? "active":""}`} id='about'>
            <h1 data-aos="fade-right">ABOUT</h1>
            <div data-aos="fade-left" className='line'></div>

            <div className='about__info_up'>
                <AboutInfo
                   Icon={SpeedIcon}
                   title='Fast'
                   description='Fast load times and lag free interaction, my highest priority.'
                />
                <AboutInfo
                  Icon={DevicesIcon}
                  title='Responsive'
                  description='My layouts will work on any device, big or small.'
                />
                <AboutInfo
                   Icon={EmojiObjectsIcon}
                   title='Dynamic'
                   description="Websites don't have to be static, I love making pages come to life."
                />
                <AboutInfo
                   Icon={StorageIcon}
                   title='Servers'
                   description="Code for Servers must be efficient, scallable and error handler, I use nodejs's asynchrony to create powerfull servers"
                />
                <AboutInfo
                   Icon={SchoolIcon}
                   title='Always Learn'
                   description="I always push myself to an uncomfortable positions to learn more about web development and grow my skills up"
                />
            </div>

            <div className='about_skills'>

                <div data-aos="fade-right" className='image'>
                    <div className='image_container'>
                        <img src="me.jpg" alt='me' />
                    </div>
                    <p className='quetion'>Who's this guy?</p>
                    <p>I'm a Web Developer from Morocco</p>
                    <p>I love everything about programming, as well as learning new technologies and reading books, my goal is to take my problem-solving skills to the next-level</p>
                    <a href='#contact'>Let's make something special.</a>
                </div>

                <div className='tech_skills'>
                    
                    <div className='cube'>
                    <div className='top'></div>
                        <div className='cube_face1'>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JAVASCRIPT(ES6,ES7..)</p>
                        </div>
                        <div className='cube_face2'>
                            <p>REACTJS</p>
                            <p>REACT HOOKS</p>
                            <p>WEB COMPONENTS</p>
                            <p>MATERIAL UI</p>
                            <p>REDUX</p>
                        </div>
                        <div className='cube_face3'>
                            <p>NODEJS</p>
                            <p>EXPRESSJS</p>
                            <p>MONGOOSEJS</p>
                            <p>AUTHENTICATION(jwt)</p>
                            <p>REST API</p>
                        </div>
                        <div className='cube_face4'>
                            <p>I CAN LEARN FAST TOO</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;

