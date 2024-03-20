import React from 'react'
import flyimg from '../assets/images/fly-img.webp'
import Commonbtns from './Commonbtns'

const Flysection = () => {
  return (
    <div className=' bg-black pb-150 position-relative z-1 overflow-x  '>
       <div className='container'>
        <img className=' w-100 pb-4' src={flyimg} alt="#" />
        <div className='row'>
                <div className=' col-lg-3'>
                        <div className=' mb-4'><Commonbtns text="name@domain.com" paddings="py-3"/></div>
                        <div><Commonbtns text="Make Your Move" paddings="py-3 px-5 text-nowrap"/></div>
                </div>
                <div className="col-lg-9">
                        <p className=' roboto-flex fw-normal m-0 fs-sm1 color-light-white1 max-w-793 text-capitalize pb-3 pt-3 pt-lg-0 '>Unveiled is a unique <span className='fw-semibold text-white'>Collectible Card Game</span> in which you gain fervour for your ventures, spending it on mercenaries, spies, automata, and influence. </p>
                        <p className=' roboto-flex fw-normal m-0 fs-sm1 color-light-white1 max-w-880 text-capitalize pb-3 '>You play <span className='fw-semibold text-white'>a rogue merchant trader</span> allied to a noble house, alongside your <span className='fw-semibold text-white'>cryptid-humanoid companions</span> in a game of ambition and alliance, deception and miracles, manipulation and annihilation. Bells chime in the harbour, and markets are opening. Guards have swept the streets of the more obvious dangers. </p>
                        <p className=' m-0 fw-semibold text-white roboto-flex fs-sm1'>What’s your next move?</p>
                </div>
        </div>
       </div>
       <span className="ellepise-fly"></span>
    </div>
  )
}

export default Flysection
