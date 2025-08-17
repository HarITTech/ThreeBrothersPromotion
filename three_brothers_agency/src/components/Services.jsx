import React from 'react';
import socialMediaMarketing from '../assests/serviceImages/social media marketing.jpg';
import seoImg from '../assests/serviceImages/searchEngineOpt.jpg';
import googleAds from '../assests/serviceImages/google ads.jpg';
import graphicDesign from '../assests/serviceImages/graphicDesign.jpg';
import website from '../assests/serviceImages/website.jpg';
import eCom from '../assests/serviceImages/e-com.jpg';
import { useNavigate } from "react-router-dom";


const services = [
  {
    id: 1,
    title: "Social Media Marketing (SMM)",
    tagline: "Build Your Brand Where It Matters – On Social Media.",
    image: socialMediaMarketing,
    alt: "Social Media Marketing (SMM) Service",
    description: `Boost your brand’s presence on Instagram and Facebook with our Social Media Marketing packages. From eye-catching reels and engaging stories to strategic Meta Ads and full page management, we offer everything you need to grow online. Plans start at just ₹6,999—perfect for any business looking to connect, engage, and convert.`,
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: 2,
    title: "Search engine Optimization (SEO)",
    tagline: "Boost Your Online Visibility - Get Found, Get Clicks, Get Results.",
    image: seoImg,
    alt: "Search engine Optimization (SEO) Service",
    description: `Take your digital presence to the next level with our trusted and reliable SEO services. From keyword optimization to technical SEO, we help your website rank higher on search engines, attract the right audience, and drive quality traffic that converts.
  
  🔍 Whether you're a startup or an established brand, our expert strategies in on-page SEO, link building, and content planning are designed to grow your business—organically.
  
  📈 Start from just ₹7,999/month and experience real, measurable results.`,
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: 3,
    title: "Google Ads",
    tagline: "Maximize Every Click with Strategic Google Ads!",
    image: googleAds,
    alt: "Google Ads Services",
    description: `Drive instant traffic and quality leads with our expert Google Ads management. From keyword research to strategy, campaign setup, tracking, and optimization — we ensure your ads reach the right audience at the right time. Our goal is simple: get you the best ROI with data-driven ad performance.`,
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: 4,
    title: "Graphic Design",
    tagline: "Creative Designs That Define Your Brand!",
    image: graphicDesign,
    alt: "Graphic Design Services",
    description: `From logos to brochures, our graphic design services cover everything your brand needs to stand out. Whether it’s social media creatives, business cards, or marketing materials, we bring visual ideas to life that leave a lasting impression and boost your brand identity.`,
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: 5,
    title: "Website Development",
    tagline: "Build Your Online Presence, One Click at a Time.",
    image: website,
    alt: "Website Development Service",
    description: `We design professional websites tailored to your business needs—whether it's a simple static site or a fully dynamic one. Our packages include hosting, domain, updating services, email notifications, and backend integration for dynamic sites. With affordable pricing and complete support, we ensure your website not only looks great but performs seamlessly. Let us turn your online vision into reality.`,
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: 6,
    title: "E-commerce",
    tagline: "Skyrocket Your Sales on Every Marketplace.",
    image: eCom,
    alt: "E-commerce Services",
    description: `Take your online business to the next level with our expert e-commerce services. From product listing and optimization across all marketplaces to complete order fulfillment, competitor research, and sales strategy—everything you need to grow is in one place. We also help you with daily inventory tracking and business planning, so you stay ahead of trends and maximize profit. Let us handle the backend while you focus on scaling up.`,
    aspectRatio: "aspect-[4/5]",
  },
]
const Services = () => {

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/services"); // 👈 redirects to /services page
  };

  return (
    <div className='bg-[#FEFEFE45] backdrop-blur max-w-full pt-[20px] pb-[40px]'>
      <section className="bg-[#dee3e936] backdrop-blur border border-[#fff] rounded-lg shadow-lg px-6 py-10 max-w-[90%] mx-auto mb-0 h-auto">
        {/* Heading & Description */}
        <div className="max-w-full mx-auto text-left mb-12">
          <p className='text-[#212640] text-[18px] font-helvetica-bold'>Services</p>
          <h3 className="section-heading mx-auto mb-3 text-[#212640] text-[48px] font-helvetica">
            Explore Our Diverse Service Offerings
          </h3>
          <p className="text-[#212640] text-[16px] font-helvetica mx-auto">
            Our expert team is dedicated to bringing your vision to life. We offer a range of services <br />tailored to meet your unique needs.
          </p>
        </div>

        {/* Service Cards */}
        {/* <div className="grid gap-[40px] grid-cols-[repeat(auto-fit,minmax(220px,330px))] justify-center max-w-[100%] mx-auto">
          <div className="service-card flex flex-col items-center text-center min-h-[440px] bg-[#202041] rounded-xl text-[#fff] px-[30px] py-[40px]">
            <img src={graphicLogo} alt="Logo" className="h-[48px] w-[48px] mb-5 stroke-current"/>
            <h4 className="font-helvetica-bold text-[30px] mb-2">
              Graphic Design that Captivates and Communicates
            </h4>
            <p className="text-[19px] text-orange-200 mt-4">
              Transform your ideas into stunning visuals.
            </p>
          </div>

          <div className="service-card flex flex-col items-center text-center min-h-[440px] bg-[#202041] rounded-xl text-[#fff] px-[30px] py-[40px]">
            <img src={socialLogo} alt="Logo" className="h-[48px] w-[48px] mb-5 stroke-current"/>
            <h4 className="font-helvetica-bold text-[30px] mb-2">
              Social Media Marketing that Engages and Converts
            </h4>
            <p className="text-[19px] text-orange-200 mt-4">
              Grow your online presence with targeted strategies.
            </p>
          </div>

          <div className="service-card flex flex-col items-center text-center min-h-[440px] bg-[#202041] rounded-xl text-[#fff] px-[30px] py-[40px]">
            <img src={seoLogo} alt="Logo" className="h-[48px] w-[48px] mb-5 stroke-current"/>
            <h4 className="font-helvetica-bold text-[30px] mb-2">
              SEO & Paid Ads for Maximum Visibility
            </h4>
            <p className="text-[19px] text-orange-200 mt-4">
              Drive traffic and boost your brand's reach.
            </p>
          </div>
        </div> */}

        <div className="grid gap-[40px] grid-cols-[repeat(auto-fit,minmax(220px,380px))] justify-center max-w-[100%] mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={handleCardClick}
              className={`relative group overflow-hidden rounded-xl border-[2px] border-[#e6e6e6] bg-[#202041] text-white shadow-lg hover:shadow-[#21264096] transition-all duration-500 ${service.aspectRatio}`}
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff34] via-[#ffffff66] to-[#ffffffa9] opacity-0 backdrop-blur-[10px] group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-5 text-center overflow-y-auto scrollbar-hide scrollbar-track-transparent">
                <h4 className="md:text-lg text-base font-bold font-helvetica-oblique mb-2 mt-2 text-[#212640]">
                  {service.tagline}
                </h4>
                <p className="md:text-sm text-xs font-helvetica-oblique text-gray-800">{service.description}</p>
              </div>

              {/* Title (always visible at bottom) */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#ffffff44] backdrop-blur-[8px] py-3 px-4 text-center">
                <h3 className="text-lg font-helvetica-bold text-[#212640]">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="text-center mt-8">
          <a
            href="/services"
            className="text-orange-500 underline font-semibold hover:text-orange-700"
          >
            Explore All..
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
