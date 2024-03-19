import React, { useState } from 'react'
import Commonbtns from './Commonbtns';
import { Navicon } from './Icon';

const Navsection = () => {
        const [first, setfirst] = useState(false);
        function MobileView() {
                setfirst(!first);
                if (first === false) {
                        document.body.classList.add("overflow-hidden");
                } else {
                        document.body.classList.remove("overflow-hidden");
                }
        }

        { first ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden") }
        return (
                <div className='py-4 '>                        
                                <div className='container'>
                                        <div className=' d-flex align-items-center justify-content-between '>
                                                <div className=' d-flex align-items-end cursor-pointer '>
                                                        <Navicon classList=""/>
                                                </div>
                                                        <ul className={`${first ? "left-0" : "left-100"} navopen d-flex align-items-center justify-content-center gap-4 `}>
                                                                <li onClick={() => setfirst(false)}><a className=' color-light-white roboto-flex fw-normal fs-sm1 nav-h position-relative ' href="#aboutus">About Us</a></li>
                                                                <li onClick={() => setfirst(false)}><a className=' color-light-white roboto-flex fw-normal fs-sm1 nav-h position-relative ' href="#ourteam">Our Team</a></li>
                                                                <li onClick={() => setfirst(false)}><a className=' color-light-white roboto-flex fw-normal fs-sm1 nav-h position-relative ' href="#about">About</a></li>
                                                                <li><a href=""><Commonbtns text="Contact Us"/></a></li>                                                
                                                        </ul>                                 
                                                 <label className=" d-lg-none " onClick={MobileView}>
                                                        {first ? (
                                                                <div className=" z-3 position-relative ">
                                                                        <span className=" cross1 d-flex bg-white position-absolute"></span>
                                                                        <span className=" cross2 d-flex bg-white position-absolute"></span>
                                                                </div>
                                                        ) : (
                                                                <div className=" z-3 position-relative ">
                                                                        <span className=" line-c d-flex  bg-white "></span>
                                                                        <span className=" line-c d-flex bg-white my-1 "></span>
                                                                        <span className=" line-c d-flex bg-white h-[3px] "></span>
                                                                </div>
                                                        )}
                                                </label>
                                        </div>
                                </div>
                </div>
        )
}

export default Navsection
