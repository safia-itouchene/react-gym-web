import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
const Hero = () => {
    const transition ={type:'spring' , duration:3}
  return (
    <div className='hero'>
        <div className='blur blur-h'></div>
        <div className='left-h'>
            <Header/>
            <div className="title-ad">
                <motion.div 
                   initial={{left :'238px'}}
                   whileInView={{left:'8px'}}
                   transition={{...transition , type : 'tween'}}
                ></motion.div>
                <span>the best finness club in the town</span>
            </div>
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>shape </span>
                    <span>your</span>
                </div>

                <div>
                    <span>ideal body</span>
                </div>

                <div>
                  <span>
                       Nostrum, dolore velit facilis ipsam quam doloremque error enim quaerat minus nihil amet odit minima tenetur.
                  </span>                  
                </div>
            </div>

             <div className="figures">
                <div>
                    <span>+150</span>
                    <span>expert coachs</span>
                </div>
                <div>
                    <span>+1.2K</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fitness programms</span>
                </div>
             </div>

            <div className="hero-buttons">
                <button className="btn">get started</button>
                <button className="btn">learn more</button>
            </div>
        </div>
        <div className='rigth-h'>
        
        <motion.div
             initial={{opacity:0 , x: -100}}
             transition={{...transition , duration:2}}
             whileInView={{opacity:1 , x:0}}
           ></motion.div>
           <motion.div
              initial={{opacity:0 , x: 100}}
              transition={{...transition , duration:2}}
              whileInView={{opacity:1 , x:0}}
           ></motion.div>
            <div className='join-h'>
                <h2>join us now </h2>
               <form action="">
                  <input type="text" placeholder='Enter your name ...'/>
                  <input type="email" placeholder='Enter your E-mail ...'/>
                  <button className='btn btn-j'>join now</button>
               </form>
            </div>
            
             
        </div>
    </div>
  )
}

export default Hero

//rafc