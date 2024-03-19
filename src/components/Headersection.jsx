import React from 'react'
import Navsection from './Navsection'

const Headersection = () => {
  return (
    <div id='home' className=' header-bg d-flex flex-column '>
      <Navsection/>
      <div className=' flex-grow-1 d-flex flex-column justify-content-center  align-items-center mt-50 '>
            <h1 className='fs-xl1 fw-bold roboto-flex max-w-873 text-center text-white pb-4 m-0 '>Changing the way games are made</h1>
            <p className=' roboto-flex fw-normal fs-lg text-white '>Redefining the future of play</p>
      </div>
    </div>
  )
}

export default Headersection
