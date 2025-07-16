import React from 'react';
import graphicLogo from '../assests/graphic_design_service.png';
import socialLogo from '../assests/social_media_service.png';
import seoLogo from '../assests/seo_ads_service.png';

const Services = () => {
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
        <div className="grid gap-[40px] grid-cols-[repeat(auto-fit,minmax(220px,330px))] justify-center max-w-[100%] mx-auto">
          {/* Card 1 */}
          <div className="service-card flex flex-col items-center text-center min-h-[440px] bg-[#202041] rounded-xl text-[#fff] px-[30px] py-[40px]">
            <img src={graphicLogo} alt="Logo" className="h-[48px] w-[48px] mb-5 stroke-current"/>
            <h4 className="font-helvetica-bold text-[30px] mb-2">
              Graphic Design that Captivates and Communicates
            </h4>
            <p className="text-[19px] text-orange-200 mt-4">
              Transform your ideas into stunning visuals.
            </p>
          </div>

          {/* Card 2 */}
          <div className="service-card flex flex-col items-center text-center min-h-[440px] bg-[#202041] rounded-xl text-[#fff] px-[30px] py-[40px]">
            <img src={socialLogo} alt="Logo" className="h-[48px] w-[48px] mb-5 stroke-current"/>
            <h4 className="font-helvetica-bold text-[30px] mb-2">
              Social Media Marketing that Engages and Converts
            </h4>
            <p className="text-[19px] text-orange-200 mt-4">
              Grow your online presence with targeted strategies.
            </p>
          </div>

          {/* Card 3 */}
          <div className="service-card flex flex-col items-center text-center min-h-[440px] bg-[#202041] rounded-xl text-[#fff] px-[30px] py-[40px]">
            <img src={seoLogo} alt="Logo" className="h-[48px] w-[48px] mb-5 stroke-current"/>
            <h4 className="font-helvetica-bold text-[30px] mb-2">
              SEO & Paid Ads for Maximum Visibility
            </h4>
            <p className="text-[19px] text-orange-200 mt-4">
              Drive traffic and boost your brand's reach.
            </p>
          </div>
        </div>

        {/* Footer Link */}
        <div className="text-center mt-8">
          <a
            href="/services"
            className="text-orange-500 underline font-semibold hover:text-orange-700"
          >
            Explore More..
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
