import React from 'react';
import "../styles/Home.css";
import Navbar from './Navbar';
import { useState } from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from "./Footer";


function Home() {
    const [navOpened, setNavOpened] = useState(false);
    function handleClick(){
        setNavOpened(false);
    }
    

    return (
        <div id='home' className={`home ${navOpened? "active":""}`}>
           <div className='info'>
               <h1>HELLO I'M </h1>
               <h1><span>ABDESSITTIR HARKATI</span></h1>
               <h1>I'M A WEB DEVELOPER</h1>

               <a href='#about' className='view'>
                <p>VIEW MY WORK</p>
               </a>
               {
                   Array(400).fill(null).map(() =>{
                       let random1 = Math.floor(Math.random() * 1300)
                       let random2 = Math.floor(Math.random() * 700);
                       let randomTime = Math.floor(Math.random() * 4);

                       return (
                           <div className='circle' style={{
                               top:`${random2}px`,
                               left:`${random1}px`,
                               animationDuration:`${randomTime}s`,
                           }}></div>
                       );
                   })
               }
           </div>
           <About navOpened={navOpened} />
           <Projects navOpened={navOpened} />
           <Contact navOpened={navOpened} />
           <Footer />
           <Navbar setActive={handleClick} />
           <div
               className="humberger"
               onClick={() =>{setNavOpened(prevState => prevState? false:true)}}>
               <div className="bar"></div>
            </div>
        </div>
    )
}

export default Home;
