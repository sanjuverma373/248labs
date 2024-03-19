import React, { useState } from 'react'

const Backtop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });
  return (
    <div>
      <div className=' cursor-pointer'>
        <div className={`back-to-top ${isVisible ? 'visible' : ''} backbtn `}
          onClick={scrollToTop}
          style={{ display: isVisible ? 'block' : 'none', }} >
          <div className=' btnbacktop d-flex justify-content-center align-items-center '>
            <svg className='pb-1 m-auto bi bi-caret-up-fill' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" viewBox="0 0 16 16">
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Backtop
