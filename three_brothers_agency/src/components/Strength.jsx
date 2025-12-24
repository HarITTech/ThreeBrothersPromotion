import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import advertisesImage from '../assests/strenths/advertise.jpg'
// import mockUpsImage from '../assests/strenths/mock_ups.jpg'
// import graphicImage from '../assests/strenths/graphic.jpg'
// import seoImage from '../assests/strenths/seo.jpg'

import ban1 from '../assests/strenths/banner/ban1.jpg'
import ban2 from '../assests/strenths/banner/ban2.jpg'
import ban3 from '../assests/strenths/banner/ban3.jpg'
import ban4 from '../assests/strenths/banner/ban4.jpg'


// const services = [
//   {
//     image: advertisesImage,
//     title: "Adverting",
//     label: "All over platform",
//   },
//   {
//     image: graphicImage,
//     title: "Graphics Design",
//     label: "For Campaigns",
//   },
//   {
//     image: seoImage,
//     title: "SEO Optimis",
//     label: "SEO helps ranking",
//   },
//   {
//     image: mockUpsImage,
//     title: "Create Mock-ups",
//     label: "For product Package",
//   },
// ];
const services = [
  {
    image: ban1,
    title: "Adverting",
    label: "All over platform",
  },
  {
    image: ban2,
    title: "Banners Design",
    label: "For Campaigns",
  },
  {
    image: ban3,
    title: "Political Banners",
    label: "",
  },
  {
    image: ban4,
    title: "Create Mock-ups",
    label: "",
  },
];

const Strength = () => {    
  return (
      <div className='bg-[#FEFEFE45] backdrop-blur max-w-full pt-[20px] pb-[40px]'>
      <section className="flex flex-col justify-center items-center bg-[#dee3e936] backdrop-blur border border-[#fff] rounded-lg shadow-lg px-6 py-10 max-w-[90%] mx-auto mb-0 h-auto">
        <h2 className="text-[38px] font-bold mb-[60px]">Our Recent Works</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div key={index}>
              <div className="aspect-[4/5] w-full overflow-hidden rounded-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h3 className="font-helvetica-bold text-[22px] mt-2 text-center">{item.title}</h3>
              <p className="text-[18px] text-center">{item.label}</p>
            </div>
          ))}


        </div>

        <Link to="/our-work">
          <a
            href="#"
            className="text-orange-500 hover:underline text-[18px] font-semibold my-6 inline-block"
          >
            View All &gt;
          </a>
        </Link>
      </section>
      </div>
  )
}

export default Strength
