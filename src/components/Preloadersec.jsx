import React from 'react'
import { Navicon } from './Icon';

const Preloadersec = () => {
        
const preloader = document.getElementById("preloader");
setTimeout(() => {
    document.getElementById("preloader").classList.add("d_none")
    document.body.classList.remove("overflow_hidden")

}, 5000);

  return (
    <div>
      <div onclick="loder()" id="preloader">
    <div class="loader_bg bg-black min-vh-100  d-flex align-items-center justify-content-center  position-fixed  top-0 start-0 w-100 z-6">
      <div class="d-flex align-items-center justify-content-center preloder-img ">
        <a class="preloaderstyle" href="#"><Navicon/>
        </a>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Preloadersec
