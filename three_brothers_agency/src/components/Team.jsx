import React from 'react';
import linkedInIcon from '../assests/linkedIn_icon.png';
import xIcon from '../assests/x_icon.png';
import instaIcon from '../assests/insta_icon.png';
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import piyushNinawe from '../assests/teamMembers/Piyush Ninawe.jpg'
import sanketDandekar from '../assests/teamMembers/Sanket Dandekar.png'
import pratikKawale from '../assests/teamMembers/Pratik kawale.jpg'
import adityaYelane from '../assests/teamMembers/Aditya yelane.jpg'


const teamMembers = [
  {
    name: 'Aditya Yelane',
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
];

const Team = () => {
  return (
    <div className='bg-[#FEFEFE45] backdrop-blur max-w-full py-[40px]'>
      <section className="max-w-full mx-auto px-6 mb-8">
        <h3 className="section-heading text-center mb-8 font-helvetica text-[38px]">Our Team</h3>
        <div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(250px,300px))] justify-center max-w-[100%] mx-auto text-[#000]">
          {teamMembers.map((member, index) => (
            <article className="team-card text-center px-[20px]" key={index}>
              <div className="bg-slate-400 aspect-square rounded-lg mb-4 flex items-center justify-center overflow-hidden">
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
              <h4 className=" font-helvetica-bold text-[20px]">{member.name}</h4>
              <p className="text-[18px] mb-2">{member.role}</p>
              <p className="text-[16px] mb-3">{member.description}</p>
              <div className="team-socials flex justify-center space-x-3">
                {/* LinkedIn Icon */}
                {/* <img src={linkedInIcon} alt="Icon" className="h-[20px] w-[20px] mb-5 transition duration-300 hover:brightness-150 hover:drop-shadow-[0_0_6px_#FF6B00]"/> */}
                <FaLinkedin className="h-[20px] w-[20px] mb-5 transition duration-300 hover:brightness-150 hover:drop-shadow-[0_0_6px_#FF6B00] hover:text-[#FF6B00] hover:cursor-pointer" />
                {/* Twitter Icon */}
                {/* <img src={xIcon} alt="Icon" className="h-[20px] w-[20px] mb-5 transition duration-300 hover:brightness-150 hover:drop-shadow-[0_0_6px_#FF6B00]"/> */}
                <FaXTwitter className="h-[20px] w-[20px] mb-5 transition duration-300 hover:brightness-150 hover:drop-shadow-[0_0_6px_#FF6B00] hover:text-[#FF6B00] hover:cursor-pointer" />
                {/* Instagram Icon */}
                {/* <img src={instaIcon} alt="Icon" className="h-[20px] w-[20px] mb-5 stroke-current"/> */}
                <FaInstagram className="h-[20px] w-[20px] mb-5 transition duration-300 hover:brightness-150 hover:drop-shadow-[0_0_6px_#FF6B00] hover:text-[#FF6B00] hover:cursor-pointer" />
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
              href="/team"
              className="text-orange-500 hover:underline text-[17px] font-semibold my-6 inline-block"
            >
              View All &gt;
            </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
