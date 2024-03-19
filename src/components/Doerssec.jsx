import React from 'react'

const Doerssec = () => {
        const doers = [
                {
                        heading: "World Building",
                        para: "Every pixel, every character, every puzzle is a testament to the harmonious marriage of imagination and engineering precision",
                },
                {
                        heading: "Game Design",
                        para: "Every frame becomes a brushstroke, every motion a choreographed dance, contributing to a symphony of visuals that captivate players' senses and ignite their imagination."
                },
                {
                        heading: "Art and Sound",
                        para: "In the realm of game design, art and animation are the storytellers, whispering tales of wonder and excitement, etching memories that linger long after the controller is set down."
                },
        ]
        const Crdsdata = doers.map((doersdata, i) => (
                <div key={i} className='col-lg-4 '>
                        <div className='doers-crd position-relative overflow-hidden mt-5 mt-lg-0 z-1  '>
                                <h4 className=" m-0 text-white roboto-flex fs-lg1 pb-4 pb-97 fw-bold  ">{doersdata.heading}</h4>
                                <p className='color-light-white2 roboto-flex fs-sm1 fw-normal m-0 max-w-310 '>{doersdata.para}</p>
                        </div>
                </div>
        ))
        return (
                <div id='aboutus' className='pt-121 bg-black mt1 position-relative overflow-x z-1  '>
                        <h1 className=' fs-xxl fw-bold roboto-flex position-absolute about-h text-white z-n1 '>About Us</h1>
                        <div className='container'>
                                <div className="row pb-114 ">
                                        <div className="col-lg-6">
                                                <div className='  d-flex mb-18'>                                                        
                                                        <p className="button-g fw-bold roboto-flex fs-sm1 m-0 d-inline-block gradient-border-mask">
                                                                DOERS OVER TALKERS
                                                        </p>
                                                </div>
                                                <h2 className='roboto-flex fw-bold fs-xl text-white max-w-310'>Game First.Always.</h2>
                                        </div>
                                        <div className='col-lg-6 pt-50 ps-lg-5 ps-3'>
                                                <h4 className='roboto-flex fw-medium fs-md text-white m-0 mb-2 pb-1'>This is difficult</h4>
                                                <p className=' m-0 fs-sm1 roboto-flex color-light-white1 fw-normal max-w-512'>Web3 Games have a notoriously high barrier-to-entry for casual gamers who make up the vast majority of players. “Link your wallet” before gameplay is not just off-putting, it’s boring. We’re solving that with <span className=' fw-semibold '>world-class storytelling,</span> world-building, game design, art and sound. And fun.</p>
                                        </div>
                                </div>
                                <div className='row pb-131 justify-content-center align-items-center '>
                                        {Crdsdata}
                                </div>
                        </div>
                </div>
        )
}

export default Doerssec
