import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
// import aboutImage from '../assests/about_illustration.png'
import adityaYelane from '../assests/teamMembers/Aditya yelane.jpg'
import deepakVerma from '../assests/teamMembers/Deepak Verma.jpg'
import expertOfSeo from '../assests/teamMembers/Expert of seo.jpg'
import joelUgade from '../assests/teamMembers/Joel ugade.jpg'
import prathmeshTekale from '../assests/teamMembers/Prathmesh Tekale.jpg'
import pratikKawale from '../assests/teamMembers/Pratik kawale.jpg'
import sanketDandekar from '../assests/teamMembers/Sanket Dandekar.png'
import vanshNaik from '../assests/teamMembers/Vansh naik.jpg'
import piyushNinawe from '../assests/teamMembers/Piyush Ninawe.jpg'


const Team = () => {

  const teamMembers = [
    {
      name: 'Aditya Yelane',
      rolem: 'FOUNDER',
      role: 'Creative Director',
      description: 'Aditya Yelane is the driving force behind Three Brothers Promotion. As Founder and Director, he combines creativity with strategic insight to deliver innovative marketing solutions that elevate brands and build lasting impact.',
      img: adityaYelane,
      alt: 'Portrait of Aditya Yelane, Creative Director, smiling and wearing a business casual shirt',
    },
    {
      name: 'Pratik Kawale',
      role: 'Marketing Strategist',
      description: 'Pratik Kawale, Co-founder of Three Brothers Promotion, blends strategic thinking with creative marketing to deliver exceptional brand growth. His expertise in marketing drives impactful campaigns and business success.',
      img: pratikKawale,
      alt: 'Portrait of Pratik Kowale, Marketing Strategist, smart casual shirt',
    },
    {
      name: 'Sanket Dandekar',
      role: 'E-commerce Expert',
      description: 'Sanket Dandekar is a specialist in e-commerce solutions, helping brands grow across digital marketplaces with smart strategies, optimized listings, and seamless order management.',
      img: sanketDandekar,
      alt: 'Portrait of Sanket Dandekar, SEO Specialist, professional headshot',
    },
    {
      name: 'Piyush Ninawe',
      role: 'Software Service Provider',
      description: 'Piyush builds responsive websites, Apps and Provide Software Services that offer exceptional user experiences.',
      img: piyushNinawe,
      alt: 'Portrait of Piyush Ninawe, Web Developer, relaxed photo with casual clothing and soft background',
    },
    {
      name: 'Deepak Verma',
      role: 'Multimedia Specialist',
      description: 'Deepak Verma is a creative powerhouse with a passion for visual storytelling. As a skilled multimedia specialist, he expertly blends video editing, motion graphics, animation, and sound design to produce high-impact content that captures attention and delivers results. Whether it is for promotional campaigns, social media, or brand identity, Deepak ensures every project is visually stunning and strategically aligned with the brand’s goals.',
      img: deepakVerma,
      alt: 'Deepak Verma',
    },
    {
      name: 'Kasturi Nisal',
      role: 'SEO & Google Ads Expert',
      description: 'An expert in Search Engine Optimization (SEO) and Google Ads, they specialize in boosting online visibility and driving targeted traffic. With data-driven strategies, they help businesses rank higher on search engines and run high-performing ad campaigns that deliver measurable results.',
      img: expertOfSeo,
      alt: 'Kasturi nisal',
    },
    {
      name: 'Joel Ugade',
      role: 'Graphic Design Expert',
      description: 'Joel Ugade is a creative graphic designer who transforms ideas into eye-catching visuals. With a strong sense of branding and design, he creates logos, banners, and marketing content that make a lasting impact.',
      img: joelUgade,
      alt: 'Joel Ugade',
    },
    {
      name: 'Prathmesh Tekale',
      role: 'Cybersecurity Expert',
      description: 'Prathmesh Tekale is a skilled cybersecurity professional specializing in securing systems and networks. With deep expertise in threat detection, vulnerability assessment, and system protection, he ensures robust digital safety for businesses and individuals.',
      img: prathmeshTekale,
      alt: 'Prathmesh Tekale',
    },
    {
      name: 'Vansh Naik',
      role: 'Animation & Video Editing Expert',
      description: 'Vansh Naik specializes in creating engaging animations and high-quality video edits. With a strong sense of timing, storytelling, and visual flow, he brings ideas to life through smooth transitions, effects, and creative motion graphics that captivate audiences.',
      img: vanshNaik,
      alt: 'Vansh Naik',
    },
  ];

  return (
    <div className='bg-[#FEFEFE45] backdrop-blur pb-[60px] border-b-[1px] border-[#eeeeeeb0] text-center'>
      <h1 className="text-[40px] font-helvetica-bold bg-gradient-to-b from-[#4543CC] via-[#955E7F] to-[#FF8800] text-transparent bg-clip-text py-[20px]">
        Our Team
      </h1>

      {teamMembers.map((member, index) => (

        // <div className='grid md:grid-cols-2  bg-[#dee3e936] backdrop-blur border border-[#fff] rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300 p-[30px] w-[80%] mx-auto mb-[60px] justify-center'>
        <div className='grid md:grid-cols-2 p-[30px] w-[80%] mx-auto mb-[60px] justify-center'>

          <div className="flex flex-col w-[100%] items-center justify-center ">
            {/* Replace with your image source */}
            <div className="bg-slate-400 aspect-square min-w-[250px] w-[60%] rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <img
                src={member.img}
                alt={member.alt}
                className="rounded-lg object-cover w-full h-full"
                onError={(e) => {
                  e.target.style.backgroundColor = '#94a3b8';
                  e.target.src = '';
                }}
              />
            </div>
            <h4 className=" font-helvetica-bold text-[28px]">{member.name}</h4>
          </div>



          <div className="flex flex-col w-[100%] items-center text-center bg-[#dee3e936] backdrop-blur border border-[#fff] rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300 py-[30px] px-[50px]">
            <p className="text-[24px] font-helvetica-bold mb-[10px]">{member.rolem}</p>
            <p className="text-[24px] mb-[10px]">{member.role}</p>
            <p className="text-[18px] mb-[20px]">{member.description}</p>
            <div className="team-socials flex mt-[10px] space-x-3">
              {/* LinkedIn Icon */}
              {/* <img src={linkedInIcon} alt="Icon" className="h-[20px] w-[20px] mb-5 transition duration-300 hover:brightness-150 hover:drop-shadow-[0_0_6px_#FF6B00]"/> */}
              <FaLinkedin className="h-[24px] w-[24px] mb-5 transition duration-300 hover:brightness-150 hover:drop-shadow-[0_0_6px_#FF6B00] hover:text-[#FF6B00] hover:cursor-pointer" />
              {/* Twitter Icon */}
              {/* <img src={xIcon} alt="Icon" className="h-[20px] w-[20px] mb-5 transition duration-300 hover:brightness-150 hover:drop-shadow-[0_0_6px_#FF6B00]"/> */}
              <FaXTwitter className="h-[24px] w-[24px] mb-5 transition duration-300 hover:brightness-150 hover:drop-shadow-[0_0_6px_#FF6B00] hover:text-[#FF6B00] hover:cursor-pointer" />
              {/* Instagram Icon */}
              {/* <img src={instaIcon} alt="Icon" className="h-[20px] w-[20px] mb-5 stroke-current"/> */}
              <FaInstagram className="h-[24px] w-[24px] mb-5 transition duration-300 hover:brightness-150 hover:drop-shadow-[0_0_6px_#FF6B00] hover:text-[#FF6B00] hover:cursor-pointer" />
            </div>
          </div>
        </div>

      ))}

    </div>
  )
}

export default Team
