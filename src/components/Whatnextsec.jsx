import React from 'react'
import Commonbtns from './Commonbtns'

const Whatnextsec = () => {
  return (
    <div id='about' className='pt-86 bg-black '>
      <div className=' what-bg d-flex flex-column '>
        <div className=' flex-grow-1 d-flex flex-column  align-items-center justify-content-center'>
                <h2 className=' text-white roboto-flex fs-xl m-0 pb-3 fw-bold '>What’s Next</h2>
                <p className='m-0 text-white pb-12 roboto-flex fw-semibold fs-sm1 text-center'>92% of gamers have never even tried a Web3 game. We’re going to change that.</p>
                <p className='m-0 color-light-white pb-12 roboto-flex fw-normal fs-sm1 pb-34 text-center'> 248Labs The market is worth about a gazillion dollars, so whatever those stats were, that goes here.</p>
                <div><Commonbtns text="Try to keep up" paddings=" py-3 px-41"/></div>
        </div>
      </div>
    </div>
  )
}

export default Whatnextsec
