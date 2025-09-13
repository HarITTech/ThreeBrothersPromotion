import React from 'react';
// import { Pencil } from "lucide-react";
import forMoreImg from '../assests/for_more.png';
import profitImg from '../assests/profit.png';
import shopifyBadge from '../assests/shopify_partner_logo.png';
import metaBadge from '../assests/meta_partner_logo.png';
import googleBadge from '../assests/google_partner_logo.png';
import youtubeBadge from '../assests/youtube_partner_logo.png';
import harittechBadge from '../assests/harittech_partner_logo.png';

const Hero = () => {
  return (
    <section className="text-center bg-[#FEFEFE45] backdrop-blur pb-16 pt-44 px-6 relative max-w-full mx-auto">
      {/* <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#4543CC] via-[#955E7F] to-[#FF8800]">
        Optimize Your Ads <br /> For More Profit.
        <span
          aria-hidden="true"
          className="inline-block transform -translate-y-1 ml-1 text-2xl"
        >
          ✏️
        </span>
      </h1> */}
      <div className="flex flex-col text-center mt-10 items-center justify-center">
        {/* First Line: "Optimize Your Ads" */}
        <h1 className="text-[70px] font-helvetica-bold bg-gradient-to-b from-[#4543CC] to-[#955E7F] text-transparent bg-clip-text">
          Optimize Your Ads
        </h1>

        {/* Second Line: "For More Profit." */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center max-w-[520px]">
          {/* <h1 className="text-[70px] font-helvetica-bold bg-gradient-to-b from-[#955E7F] to-[#FF8800] text-transparent bg-clip-text">
            For More
          </h1> */}
          <img src={forMoreImg} alt="" />
          <img src={profitImg} alt="" />
          {/* <div className="absolute -right-[10px] -bottom-[25px] rotate-3 translate-y-[6px]">

            <svg width="215" height="60" viewBox="0 0 150 30" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4543CC" /> 
                  <stop offset="100%" stopColor="#FF8800" />
                </linearGradient>
              </defs>
              <g transform="scale(1, -1) translate(0, -30)">
                <path
                  d="M5 20 C 50 30, 100 30, 145 20"
                  stroke="url(#underlineGradient)"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>
            </svg>
            <Pencil className="absolute -right-7 bottom-10 w-7 h-7 text-black" />
          </div> */}
        </div>
      </div>
      {/* <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-600">
        Optimize Your Ads
      </h1> */}

      {/* <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 mb-4">
        <span className="highlight-orange">For More Profit.</span>
        <span
          aria-hidden="true"
          className="inline-block transform -translate-y-1 ml-1 text-2xl"
        >
          ✏️
        </span>
      </h2> */}

      <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 mb-8 mt-8">
        2+ years | Elite Brand | 30+ Core Ads per client <br />
        A dedicated team of specialists, delivering remarkable work to our
        clients worldwide!
      </p>

      <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-900 shadow-lg transition duration-300">
        <a href="tel:7020061418">Book a Strategy Call</a>
      </button>

      <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 mb-8 mt-8">
        Our Marketing and Collaborating Partners are
      </p>

      {/* Performance Badges */}
      <div className="flex flex-wrap justify-center items-center space-x-10 mt-12 gap-1">
        <img
          src={shopifyBadge}
          alt="Shopify Partner badge"
          className="h-[35px] object-contain"
        />
        <img
          src={metaBadge}
          alt="Meta partner company badge"
          className="h-[35px] object-contain"
        />
        <img
          src={googleBadge}
          alt="Google Partner badge"
          className="h-[40px] object-contain"
        />
        <img
          src={youtubeBadge}
          alt="Google Partner badge"
          className="h-[35px] object-contain"
        />
        <img
          src={harittechBadge}
          alt="Harit Tech Partner badge"
          className="h-[35px] object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
