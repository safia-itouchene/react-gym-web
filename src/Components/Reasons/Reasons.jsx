import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
const Reasons = () => {
  return (
    <div className='resons' id='resons'>
       <div className="left-r">
           <img src={image1} alt="" />
           <img src={image2} alt="" />
           <img src={image3} alt="" />
           <img src={image4} alt="" />
       </div>
       <div className="right-r">
         <span className='parteners' >some reasons </span>
         <div>
            <sap className='stroke-text'>why </sap>
            <sap>choose us ?</sap>
         </div>
         <div className='details-r'>
            <div>
                <img src={tick} alt=""/>
                <span>over 140 + expert coachs</span>
            </div>
            <div>
            <img src={tick} alt=""/>
                <span>train smated and faster than befor</span>
            </div>
            <div>
            <img src={tick} alt=""/>
                <span>1 free program for free member</span>
            </div>
            <div>
            <img src={tick} alt=""/>
                <span>reliable partners</span>
            </div>
          </div>
         <span id='parteners'>our parteners</span>
          <div className='parteners-brand'>
             <img src={nb} alt="" />
             <img src={adidas} alt="" />
             <img src={nike} alt="" />
          </div>
       </div>
    </div>
  )
}

export default Reasons
