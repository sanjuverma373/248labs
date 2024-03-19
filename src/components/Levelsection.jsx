import React from 'react'
import Commonbtns from './Commonbtns'

const Levelsection = () => {
  return (
    <div className='bg-black pt-49 pb-150'>
        <div className='level-bg d-flex flex-column '>
              <div className='container '>
                   <div className=' flex-grow-1 d-flex flex-column justify-content-center align-items-end'>
                        <div className='level-crd'>
                                <h4 className='m-0 roboto-flex fw-bold fs-xl text-white max-w-498 mb-lg-5 mb-3'>Level up your gaming experience</h4>
                                <div><Commonbtns text="Play Unvilled" paddings="py-3"/></div>
                        </div>
                   </div>
              </div>
        </div>      
    </div>
  )
}

export default Levelsection
