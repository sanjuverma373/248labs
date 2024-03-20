import React from 'react'
import richimg from '../assets/images/rich-img.webp'

const Richsection = () => {
  return (
    <div className=' bg-black pb-101 position-relative z-1 '>
        <div className=' container'>
               <h3 className=' m-0 text-white fs-xl roboto-flex fw-bold text-center pb-40'>A rich, inhabited, and licensable world.</h3> 
               <div className=' position-relative '>
                <img className='w-100 pb-4' src={richimg} alt="#" />
               
                </div>
               <p className='roboto-flex color-light-white1 fw-normal mx-auto text-center fs-sm1 m-0 max-w-781 text-capitalize '> Illustrated with original artwork and a cinematic score, destined not only for mobile and desktop gaming but also for film and television, events, merchandising, and partnerships.</p>
               
        </div>
        <span className="ellepise-rich"></span>
    </div>
  )
}

export default Richsection
