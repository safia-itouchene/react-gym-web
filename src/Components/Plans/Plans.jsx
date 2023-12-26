import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
  return (
    <div className='plans-continers'>
      <div className='blur blur-p-1'></div>
      <div className='blur blur-p-2'></div>
        <div className="programs-header">
            <span className='stroke-text'>ready to start</span>
            <span>your journey</span>
            <span className='stroke-text'>now withus</span>
        </div>
        <div className="plans-card">
           {plansData.map( (plan,i)=> (
               <div className="plan" key = {i}>
                  {plan.icon}
                  <span>{plan.name}</span>
                  <span>$ {plan.price}</span>
                  <div className='features'>
                     {plan.features.map((feature , i)=>(
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span key={i}>{feature}</span>
                        </div>
                     ))}
                  </div>
                 <div>
                    <span>see more benefites</span>
                 </div>
                 <button className='btn'>join now</button>
               </div>
           ))}
        </div>
    </div>
  )
}

export default Plans
