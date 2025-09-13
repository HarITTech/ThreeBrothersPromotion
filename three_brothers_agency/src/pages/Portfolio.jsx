// import React from 'react'
// import aboutImage from '../assests/about_illustration.png'
import advertiseImage from '../assests/weDo/advertise.png'
import buildImage from '../assests/weDo/build.png'
import designImage from '../assests/weDo/design.png'
import strategizeImage from '../assests/weDo/strategize.png'
import thereImage from '../assests/weDo/there.png'
import clientImage from '../assests/weDo/client.png'
import advertisesImage from '../assests/strenths/advertise.jpg'
import mockUpsImage from '../assests/strenths/mock_ups.jpg'
import graphicImage from '../assests/strenths/graphic.jpg'
import seoImage from '../assests/strenths/seo.jpg'
import logoImage from '../assests/01_logo.jpg'
// import React, { useEffect, useRef } from "react";
import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const images = [
  { src: advertiseImage, text: "We Advertise" },
  { src: buildImage, text: "We Design" },
  { src: designImage, text: "We Build" },
  { src: strategizeImage, text: "We Strategize" },
  { src: thereImage, text: "We There" },
  // { src: "/images/img6.jpg", text: "We Optimize" },
];



const services = [
  {
    image: advertisesImage,
    title: "Adverting",
    label: "All over platform",
  },
  {
    image: graphicImage,
    title: "Graphics Design",
    label: "For Campaigns",
  },
  {
    image: seoImage,
    title: "SEO Optimis",
    label: "SEO helps ranking",
  },
  {
    image: mockUpsImage,
    title: "Create Mock-ups",
    label: "For product Package",
  },
];

const Portfolio = () => {
  // const scrollRef = useRef(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (scrollRef.current) {
  //       scrollRef.current.scrollLeft += 300;

  //       // Reset when reaching end
  //       if (
  //         scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
  //         scrollRef.current.scrollWidth
  //       ) {
  //         scrollRef.current.scrollLeft = 0;
  //       }
  //     }
  //   }, 3000); // Change image every 3 seconds

  //   return () => clearInterval(interval);
  // }, []);

  const location = useLocation();
  const currentPath = location.pathname;
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollInterval = useRef(null);

  useEffect(() => {
    startAutoScroll();

    return () => {
      stopAutoScroll();
    };
  }, []);

  const startAutoScroll = () => {
    scrollInterval.current = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % images.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 3000);
  };

  const stopAutoScroll = () => {
    clearInterval(scrollInterval.current);
  };

  const scrollToIndex = (index) => {
    const scrollEl = scrollRef.current;
    const imageWidth = scrollEl.offsetWidth;
    scrollEl.scrollTo({
      left: index * imageWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#FEFEFE45] backdrop-blur pt-44 pb-[60px] border-b-[1px] border-[#eeeeeeb0] font-helvetica min-h-screen text-black">
      {/* Hero Section */}
      <section className="flex flex-col  text-center py-16 px-6 items-center ">
        <h1 className="text-[70px] max-w-6xl font-helvetica-bold bg-gradient-to-b from-[#4543CC] via-[#955E7F] to-[#FF8800] text-transparent bg-clip-text">
          Stay ahead from the rest and growth beyond them.
        </h1>
        <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-900 shadow-lg transition duration-300">
          <a href="tel:7020061418">Book a Strategy Call</a>
        </button>
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 mb-8 mt-8">
          2+ years | Elite Brand | 30+ Core Ads per client <br />
          A dedicated team of specialists, delivering remarkable work to our
          clients worldwide!
        </p>
        <p className="text-sm mt-3">Our Performance Marketing Services are Certified by</p>
      </section>


      {/* Service Section */}
      <section className="bg-[#dee3e930] backdrop-blur mx-4 md:mx-16 rounded-xl shadow-xl border-[2px] border-[#ffffff] p-8 grid md:grid-cols-3 items-start gap-6">
        <div className="md:col-span-2 w-full">
          <h2 className="text-[35px] font-helvetica-bold mb-4">We Provide the best service with out of the box ideas</h2>
          <p className="text-sm text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry... <br />
            {/* <span className="text-blue-600">Read more....</span> */}
          </p>
        </div>
        <div className="space-y-4 max-w-[500px]">
          <div className='flex max-w-[500px] gap-10 justify-between'>

            <img src={logoImage} alt="Service" className="object-cover rounded-tl-[100%] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] aspect-square w-[45%] border-[2px] border-[#efefeff8] shadow-xl" />

            <div className="bg-[#DEE3E955] backdrop-blur border-[2px] border-[#ffffffd8] shadow-xl p-4 rounded-xl text-center w-[45%] aspect-square">
              <h3 className="text-2xl font-bold">115+</h3>
              <p className="text-xs text-gray-600">We are over 115 member in our family...</p>
            </div>

          </div>
          <div className="max-w-[500px] font-helvetica-bold bg-gradient-to-b  from-[#4543CC] via-[#86598E] to-[#FF8800] text-white p-4 text-[36px] rounded-xl shadow-xl font-semibold text-center">
            Advertice your brand and increase your brand
          </div>
        </div>
      </section>

      {/* Metrics and Design Section */}
      <section className="mx-4 md:mx-16 my-[100px] flex flex-col md:flex-row md:space-x-6 items-start gap-6">
        {/* <section className="grid md:grid-cols-2 gap-6 mt-12 mx-4 md:mx-16"> */}
        {/* <div className="bg-white shadow-md rounded-md p-6 md:w-[500px]">
          <h2 className="text-3xl font-bold">500+</h2>
          <p className="text-sm">Over 500+ Projects<br />And All the Happy Clients<br />More the 50+ Live Clients<br />Over the Years of Experience</p>
        </div> */}

        <div className="w-full md:w-[1120px] bg-[#dee3e930] backdrop-blur border-[2px] border-[#ffffff] shadow-lg rounded-xl py-6 px-8 flex flex-col justify-between">
          <div>
            <h2 className="text-[67px] font-bold mb-4">500+</h2>
            <ul className="text-gray-700 space-y-1 text-[22px]">
              <li>Over 500* Projects</li>
              <li>And All Happy Clients</li>
              <li>More the 50* Live Clients</li>
              <li>Over The Years of Experience</li>
            </ul>
          </div>

          {/* Profile avatars */}
          <div className="flex items-center space-x-2 mt-4">
            <img src={clientImage} alt="user2" className="w-[75px] h-[75px] rounded-full border-2 border-white shadow -ml-2" />
            <img src={clientImage} alt="user3" className="w-[75px] h-[75px] rounded-full border-2 border-white shadow -ml-2" />
            <img src={clientImage} alt="user1" className="w-[75px] h-[75px] rounded-full border-2 border-white shadow" />
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold shadow -ml-2">+</div>
          </div>
        </div>

        {/* <div className="relative w-full">
          <img src={logoImage} alt="We Design" className="rounded-xl w-full h-full object-cover" />

          <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#00000029] rounded-xl w-full h-full flex justify-center items-center'>
            <h2 className=" text-[#ffffff] text-3xl font-bold">We Design</h2>
          </div>
        </div> */}

        <div className="w-full mt-6 md:mt-0">
          {/* Image Slider */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide rounded-2xl border-[2px] "
          >
            {images.map((item, index) => (
              <div
                key={index}
                className=" relative snap-center w-full flex-shrink-0 rounded-2xl border-[#fffffff0] shadow-xl"
              >
                <img
                  src={item.src}
                  alt={item.text}
                  className="w-full h-full object-cover "
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[#00000045] flex items-center justify-center rounded-2xl">
                  <h2 className="text-white text-[35px] md:text-[38px] font-helvetica-bold">
                    {item.text}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => {
                  stopAutoScroll();
                  scrollToIndex(index);
                  setActiveIndex(index);
                  startAutoScroll();
                }}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${activeIndex === index ? "bg-black scale-125" : "bg-gray-400"
                  }`}
              ></span>
            ))}
          </div>
        </div>

      </section>

      {/* Strengths Section */}
      <section className="text-center py-6 px-4 my-[40px]">
        <h2 className="text-[38px] font-bold mb-[60px]">Our Works</h2>
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <img src={advertisesImage} alt='error' className="rounded-md mx-auto" />
            <h3 className="font-semibold mt-2">Adverting</h3>
            <p className="text-xs">All over platform<br />Kahjri tri lihi...</p>
          </div>
          <div>
            <img src={graphicImage} alt='error' className="rounded-md mx-auto" />
            <h3 className="font-semibold mt-2">Graphics Design</h3>
            <p className="text-xs">For Campaigns<br />Kahjri tri lihi...</p>
          </div>
          <div>
            <img src={seoImage} alt='error' className="rounded-md mx-auto" />
            <h3 className="font-semibold mt-2">SEO Optimis</h3>
            <p className="text-xs">SEO helps ranking<br />Kahjri tri lihi...</p>
          </div>
          <div>
            <img src={mockUpsImage} alt='error' className="rounded-md mx-auto" />
            <h3 className="font-semibold mt-2">Create Mock-ups</h3>
            <p className="text-xs">Kahjri tri lihi...</p>
          </div>
        </div> */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* <div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-md">
              <img
                src={advertisesImage}
                alt="error"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <h3 className="font-helvetica-bold text-[22px] mt-2 text-center">Adverting</h3>
            <p className="text-[18px] text-center">
              All over platform
            </p>
          </div>

          <div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-md">
              <img
                src={graphicImage}
                alt="error"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <h3 className="font-helvetica-bold text-[22px] mt-2 text-center">Graphics Design</h3>
            <p className="text-[18px] text-center">
              For Campaigns
            </p>
          </div>

          <div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-md">
              <img
                src={seoImage}
                alt="error"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <h3 className="font-helvetica-bold text-[22px] mt-2 text-center">SEO Optimis</h3>
            <p className="text-[18px] text-center">
              SEO helps ranking
            </p>
          </div>

          <div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-md">
              <img
                src={mockUpsImage}
                alt="error"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <h3 className="font-helvetica-bold text-[22px] mt-2 text-center">Create Mock-ups</h3>
            <p className="text-[18px] text-center">
              For product Package
            </p>
          </div> */}


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

export default Portfolio
