import React from 'react'
import behind1 from '../assets/images/behind1.webp'
import behind2 from '../assets/images/behind2.webp'
import behind3 from '../assets/images/behind3.webp'
import behind4 from '../assets/images/behind4.webp'
import behind5 from '../assets/images/behind5.webp'
import behind6 from '../assets/images/behind6.webp'
import behind7 from '../assets/images/behind7.webp'
import behind8 from '../assets/images/behind8.webp'

const Behindsection = () => {
        const Behind =[
                {
                  img:behind1 ,
                  heading:"James Vuong",
                  work:"(Co-CEO)",
                  para1:"James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an ",
                  para2:"impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures.",
                 },
                {
                  img:behind2 ,
                  heading:"Tricia Yong",
                  work:"(Co-CEO)",
                  para1:"Tricia is a Marketing Director with 15 years of expertise, co-founded ROOMERANG and KEYNINJA with James Vuong, bringing a wealth of knowledge from the tech industry, property valuation, and consumer ",
                  para2:"products. With a background in consumer behavior, UI/UX design, and marketing strategies, she adeptly navigates the convergence of technology and marketing. Tricia is renowned for crafting compelling narratives that deeply resonate with both business clients and consumers, propelling the company to success in the ever-evolving tech landscape.",
                 },
                {
                  img:behind3,
                  heading:"Kevin Li",
                  work:"(CFO)",
                  para1:"Kev is a seasoned CFO with 15 years of expertise in the Big Pharma sector, demonstrated his leadership by establishing a successful branch office in Myanmar, overseeing its growth to 70 employees in just 24 months. His",
                  para2:"strategic pricing initiatives for life-saving medications not only gained eligibility onto the government reimbursement list in Singapore, Sri Lanka, and the Maldives but also significantly alleviated the financial burden on patients grappling with the costs of disease.",
                 },
                {
                  img:behind4 ,
                  heading:"Ryan Ang",
                  work:"(Lorem Ipsum)",
                  para1:"Experienced in investing in traditional equity markets and blockchain companies. Early adopter of digital assets and co-founded a decentralised finance application that provides walletservices, swaps and DeFi ",
                  para2:"products. Previously in the private equity arm of one of Singapore’s leading asset management funds, Dymon Asia Capital. Previously the fund manager at Blockchain Ventures.",
                 },
                {
                  img:behind5 ,
                  heading:"Dylan",
                  work:"(Executive Producer)",
                  para1:"Lorem ipsum dolor sit amet consectetur. Quis in ullamcorper molestie velit proin est. Vestibulum eget eu in egestas. Consequat mi consequat eu eu id integer est. Eget at egestas morbi vitae platea imperdiet sed egestas dignissim.",
                  para2:"Lorem ipsum dolor sit amet consectetur. Amet erat condimentum.",
                 },
                {
                  img:behind6 ,
                  heading:"Ralf",
                  work:"(Lorem Ipsum)",
                  para1:"Lorem ipsum dolor sit amet consectetur. Cursus vulputate facilisis mattis diam consectetur molestie ultrices. Laoreet sagittis facilisis consequat dignissim viverra etiam gravida. Eu cursus scelerisque purus pharetra enim.",
                  para2:"Lorem ipsum dolor sit amet consectetur. Donec amet mattis sit fermentum. Cursus at sed commodo ac mattis feugiat vel faucibus iaculis. Id congue egestas sit leo placerat. Ipsum a feugiat massa fringilla justo consectetur. Eu euismod viverra ut porttitor sed leo. Eget viverra etiam sit nunc.",
                 },
                {
                  img:behind7 ,
                  heading:"Jordan Stratford",
                  work:"(Creative Director)",
                  para1:"Jordan is an international best-selling author of the Wollstonecraft Detective Agency series with Penguin Random House, which was adapted to a mobile game for iOS, Android, and Nintendo Switch, and is in development",
                  para2:"for television with the world’s largest streaming producer.",
                 },
                {
                  img:behind8 ,
                  heading:"Jae Sik Choi",
                  work:"(Lorem Ipsum)",
                  para1:"Early adopter of digital assets since 2011, founded Garuda Crypto, The Cryptocurrency Fund Project and Kalian Cryptocurrency Fund, along with being deeply experienced in DeFi and dApps since 2019. Previously an ex-NAB",
                  para2:"Specialised Transaction Management Associate, experienced in fixed income structured products, KYC/AML, FATCA and CRS reporting. Holds a Master of Applied Finance from Monash University.",
                 },
        ]
        const Behinddata =Behind.map((behind ,i) =>(
                <div key={i} className="col-lg-6 mb-4">
                    <div className='behindcrd position-relative overflow-hidden z-1 '>
                        <div className=' d-flex flex-column flex-lg-row  align-items-center gap-12 '>
                              <img src={behind.img} alt="#" />
                              <div className='gap-2 d-flex flex-column  '>
                                      <div className=' d-flex align-items-center gap-2  '>
                                              <h4 className='roboto-flex fw-semibold fs-md1 text-white m-0 text-center mx-auto text-lg-start mx-lg-0 '>{behind.heading}</h4>
                                               <p className=' m-0 fs-sm1 fw-normal roboto-flex text-gragient text-center mx-auto text-lg-start mx-lg-0'>{behind.work}</p>
                                      </div>
                                       <p className=' m-0 fs-sm1 fw-normal roboto-flex color-light-white1 max-w-283 text-center mx-auto text-lg-start mx-lg-0'>{behind.para1}</p>
                              </div>

                        </div>
                        <p className=' m-0 fs-sm1 fw-normal roboto-flex color-light-white1 pt-10 max-w-530 text-center mx-auto text-lg-start mx-lg-0'>{behind.para2}</p>

                    </div>
                </div>
        ))
        return (
                <div id='ourteam' className=' pt-101 bg-black position-relative z-1 '>
                        <div className="container">
                                <h1 className=' fs-xxl fw-bold roboto-flex position-absolute team text-white z-n1 text-gragient'>Our Team</h1>
                                <div className=' d-flex justify-content-center flex-column align-items-center pb-14 '>
                                <p className="button-g fw-bold roboto-flex fs-sm1 m-0 d-inline-block gradient-border-mask">
                                Our Team
                                                        </p>
                                        <h2 className='roboto-flex fw-bold fs-xl text-white text-center mx-0 pb-61 m-0 mt-15 '>Behind our expertise</h2>
                                </div>
                                
                                <div className="row justify-content-center ">
                                     {Behinddata}
                                </div>
                        </div>
                </div>
        )
}

export default Behindsection
