import React from 'react'
import slidimg1 from '../assets/images/slider-img1.webp'
import slidimg2 from '../assets/images/slider-img2.webp'
import slidimg3 from '../assets/images/slider-img3.webp'
import slidimg4 from '../assets/images/slider-img4.webp'
import slidimg5 from '../assets/images/slider-img5.webp'

const Slidersection = () => {
  return (
    <div className=' bg-black pt-107 pb-162 mt1'>
      <div className=' container overflow-x'>
              <div class="slider">
                <div class="slide-track gap-50">
                        <div class="slide d-flex  align-items-center  ">
                        <img src={slidimg1} alt="slidimg1" />
                        </div>
                        <div class="slide d-flex align-items-center">
                        <img src={slidimg2} alt="slidimg2" />     
                        </div>
                        <div class="slide d-flex  align-items-center">
                        <img src={slidimg3} alt="slidimg3" />     
                        </div>
                        <div class="slide d-flex  align-items-center">
                        <img src={slidimg4} alt="slidimg4" />   
                        </div>
                        <div class="slide d-flex  align-items-center">
                        <img src={slidimg5} alt="slidimg5" />   
                        </div>
                        <div class="slide d-flex  align-items-center">
                        <img src={slidimg1} alt="slidimg1" />
                        </div>
                        <div class="slide d-flex  align-items-center">
                        <img src={slidimg2} alt="slidimg2" />     
                        </div>
                        <div class="slide d-flex  align-items-center">
                        <img src={slidimg3} alt="slidimg3" />     
                        </div>
                        <div class="slide d-flex  align-items-center">
                        <img src={slidimg4} alt="slidimg4" />   
                        </div>
                        <div class="slide d-flex  align-items-center">
                        <img src={slidimg5} alt="slidimg5" />   
                        </div>
                        <div class="slide d-flex  align-items-center">
                        <img src={slidimg1} alt="slidimg1" />
                        </div>
                        <div class="slide d-flex  align-items-center">
                        <img src={slidimg2} alt="slidimg2" />     
                        </div>
                        <div class="slide d-flex  justify-content-center align-items-center">
                        <img src={slidimg3} alt="slidimg3" />     
                        </div>
                        <div class="slide d-flex  justify-content-center align-items-center">
                        <img src={slidimg4} alt="slidimg4" />   
                        </div>
                        <div class="slide d-flex  justify-content-center align-items-center">
                        <img src={slidimg5} alt="slidimg5" />   
                        </div>
                        
                        
                </div>
              </div>
      </div>
    </div>
  )
}

export default Slidersection
