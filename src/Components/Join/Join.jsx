import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
import {motion} from 'framer-motion'
const Join = () => {
    const transition ={type:'spring' , duration:3}
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_n26n06c', 'template_6aoa1yo', form.current, 'dvU8NbsIl9fUq4Ooh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='join' id='join-us'>
       <div className="left-j">
        <hr/>
         <div>
            <span className='stroke-text'>ready to</span>
            {" "}<span>level up</span>
        </div>
        <div>
            <span>your body</span>
            <span className='stroke-text'> whith us ?</span>
        </div>
       </div>
       <div className="right-j">
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
          <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
             <input type="email" name='user-email' placeholder='Enter your E-mail'/>
             <button className='btn btn-j'>Join Now</button>
          </form>
       </div>
    </div>
  )
}

export default Join
