import React from "react";
import india from "../assets/images/india-flag.webp";
import australia from "../assets/images/amaricaflag.webp";
import usa from "../assets/images/usflag.webp";
import roadmapimg from "../assets/images/roadlogo.webp";
import star from "../assets/images/starimg.webp";
const Roadmapsection = () => {
  return (
    <section id="roadmap" className=" bg-black pt-sm-5 position-relative z-1 overflow-x"  >
      <h1 className=' fs-xxl fw-bold roboto-flex position-absolute road-h text-white z-n1 '>Roadmap</h1>
      <div className=" bg-roadmap">
        <div className=" container pt-sm-5 mt-sm-5 ">
          <span className=" d-flex align-items-center justify-content-center ">
            <p className="button-g fw-bold roboto-flex fs-sm1 m-0 d-inline-block gradient-border-mask">
            Road map
            </p>
          </span>
          <h2 className=" text-center pb-5 fw-bold fs-xl roboto-flex mb-0 pt-3 text-white">
            Milestones and markers
          </h2>
          <span className="py-5 d-sm-block "></span>
          <div className="row lineorapmap position-relative z-1 justify-content-between">
            <img src={roadmapimg} alt="roadmapimg" className="imageroadmap" />
            <div className="col-sm-5 ps-5 ps-sm-0 "></div>
            <div className="col-sm-5 ps-5 ps-sm-0  pb-sm-5 pt-5 mt-1"            >
              <div className="gradient-border-maskroadmap mb-1 w-100 mt-4 overflow-hidden ">
                <div className="roadmap-card d-flex align-items-center justify-content-center flex-column  position-relative w-100 text-center z-1 ">
                  <span className="fw-normal roboto-flex fs-lg mb-1 fs-2xl text-gragient ">
                    Oct 2014
                  </span>
                  <p className=" mb-0 fw-normal pt-2 fs-lg  color-light-white1 roboto-flex">
                    Hired our first employee
                  </p>
                  <div className="ellipes-card-roadmap"></div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 ps-5 ps-sm-0  mt-lg-5 pt-lg-5 mb-sm-5 mb-0">
              <div className="gradient-border-maskroadmap mb-1 w-100 mt-4 overflow-hidden ">
                <div className="roadmap-card d-flex align-items-center justify-content-center flex-column position-relative w-100 text-center z-1 ">
                  <span className="fw-normal roboto-flex fs-lg mb-1 fs-2xl text-gragient ">
                    Nov 2014
                  </span>
                  <p className="mb-0 fw-normal pt-2 fs-lg  color-light-white1 roboto-flex">
                    Launched Bitcoin wallet
                  </p>
                  <div className="ellipes-card-roadmap"></div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 ps-5 ps-sm-0 "></div>
            <div className="col-sm-5 ps-5 ps-sm-0 "></div>
            <div className="col-sm-5 ps-5 ps-sm-0  mt-lg-5 pt-lg-5 mb-sm-5 mb-0">
              <div className="gradient-border-maskroadmap mb-1 w-100 mt-4 overflow-hidden ">
                <div className="roadmap-card d-flex align-items-center justify-content-center flex-column position-relative w-100 text-center z-1 ">
                  <span className="fw-normal roboto-flex fs-lg mb-1 fs-2xl text-gragient ">
                    Oct 2015
                  </span>
                  <p className="mb-0 fw-normal pt-2 fs-lg  color-light-white1 roboto-flex">
                    1st prize by Bit angels at Coin Agenda, Las Vegas
                  </p>
                  <div className="ellipes-card-roadmap"></div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 ps-5 ps-sm-0  pt-lg-5 mt-lg-5 mb-sm-5 mb-0">
              <div className="gradient-border-maskroadmap mb-1 w-100 mt-4 overflow-hidden ">
                <div className="roadmap-card d-flex align-items-center justify-content-center flex-column position-relative w-100 text-center z-1 ">
                  <span className="fw-normal roboto-flex fs-lg mb-1 fs-2xl text-gragient">
                    Jan 2020
                  </span>
                  <div className=" d-flex align-items-center gap-3 justify-content-center pt-2">
                    <p className=" mb-0 text-nowrap fw-normal fs-2xl lh-27 text-white text-opacit-70">
                      launch On
                    </p>
                    <img src={india} alt="india" width={21} />
                    <img src={australia} alt="australia" width={21} />
                    <img src={usa} alt="usa" width={21} />
                  </div>
                  <div className="ellipes-card-roadmap"></div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 ps-5 ps-sm-0 "></div>
            <div className="col-sm-5 ps-5 ps-sm-0 "></div>
            <div
              data-aos="fade-left"
              className="col-sm-5 ps-5 ps-sm-0  pt-lg-5 mt-lg-5"
            >
              <div className="gradient-border-maskroadmap mb-1 w-100 mt-4 overflow-hidden ">
                <div className="roadmap-card d-flex align-items-center justify-content-center flex-column position-relative w-100 text-center z-1 ">
                  <span className="fw-normal roboto-flex fs-lg mb-1 fs-2xl text-gragient ">
                    Oct 2014
                  </span>
                  <p className="mb-0 fw-normal pt-2 fs-lg  color-light-white1 roboto-flex">
                    Trusted by 10 Millions+ Users
                  </p>
                  <img src={star} alt="" />
                  <div className="ellipes-card-roadmap"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ellipes-roadmap"></div>
    </section>
  );
};

export default Roadmapsection;
