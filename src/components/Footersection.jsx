import React from 'react'
import { Facebook, Footericon, Insta, Linkedin, Twittericon } from './Icon'

const Footersection = () => {
  return (
    <div className=' bg-black  pt-5 pt-lg-0 '>
      <div className="container">
        <div className=' d-flex flex-column align-items-center justify-content-center'>
                <span className=' pb-18'><Footericon/></span>
                <ul className=' gap-4 d-flex align-items-center pb-26 m-0 '>
                        <li><a className='color-light-white1 fs-sm1 fw-normal roboto-flex nav-h position-relative ' href="#home">Home</a></li>
                        <li><a className='color-light-white1 fs-sm1 fw-normal roboto-flex nav-h position-relative ' href="#roadmap">Roadmap</a></li>
                        <li><a className='color-light-white1 fs-sm1 fw-normal roboto-flex nav-h position-relative ' href="#ourteam">Team</a></li>
                        <li><a className='color-light-white1 fs-sm1 fw-normal roboto-flex nav-h position-relative ' href="#aboutus">About Us</a></li>
                </ul>
                <ul className=' gap-3 d-flex align-items-center pb-43 m-0 '>
                        <a className='icon-h' href="https://twitter.com/" target='_blank'><Twittericon/></a>
                        <a className='icon-h' href="https://www.facebook.com/" target='_blank'><Facebook/></a>
                        <a className='icon-h' href="https://www.instagram.com/" target='_blank'><Insta/></a>
                        <a className='icon-h' href="https://www.linkedin.com/" target='_blank'><Linkedin/></a>
                </ul>      
        </div>
      </div>
      <hr className=' line-f' />
      <p className=' m-0 text-center pt-22 pb-26 roboto-flex fw-normal fs-sm color-gray'>© {(new Date().getFullYear())} 248 Labs. All rights reserved</p>
    </div>
  )
}

export default Footersection
