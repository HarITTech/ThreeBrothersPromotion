import React from 'react'
import aboutImage from '../assests/about_illustration.png'
import graphicLogo from '../assests/graphic_design_service.png';
import socialLogo from '../assests/social_media_service.png';
import seoLogo from '../assests/seo_ads_service.png';

const About = () => {
  return (
    <div className='bg-[#FEFEFE45] backdrop-blur pb-[60px] border-b-[1px] border-[#eeeeeeb0]'>
      <section className="text-center py-16 px-6 relative max-w-full mx-auto">
        <div className="flex flex-col text-center mt-0 items-center justify-center">
          <h1 className="text-[50px] sm:text-[50px] font-helvetica-bold bg-gradient-to-b from-[#4543CC] to-[#955E7F] text-transparent bg-clip-text">
            Creative Minds. Purposeful
          </h1>
          <h1 className="text-[50px] sm:text-[50px] font-helvetica-bold bg-gradient-to-b from-[#955E7F] to-[#FF8800] text-transparent bg-clip-text">
            Results. Always Evolving.</h1>
        </div>
        <p className="max-w-3xl mx-auto text-[18px] text-slate-700 mb-9 mt-8">
          What started as a small idea between three creatives has grown into a full-service digital agency trusted by brands across industries. We don’t just design and promote. <br /> — we elevate, innovate, and build meaningful digital impact.
        </p>
        <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-900 shadow-lg transition duration-300">
          <a href="tel:7020061418">Wanna know how!</a>
        </button>
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 mb-8 mt-4">
          Book a call for Consultancy and growth of your Company
        </p>
      </section>


      <div className="bg-[#dee3e936] backdrop-blur border border-[#fff] rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300 p-[30px] w-[90%] mx-auto mt-[10px] mb-[60px]">
        <div>
          <div className='px-[30px] text-left'>
            <h2 className="text-3xl font-bold mb-4">About us</h2>
            <p className="text-gray-700 mb-8">
              We specialize in creating digital content and strategies tailored to each brand's unique needs.
            </p>
          </div>

          <div className='grid md:grid-cols-2 items-center'>
            <div className="flex-1 flex items-center justify-center">
              {/* Replace with your image source */}
              <img src={aboutImage} alt="About Us" className="w-3/4 h-auto" />
            </div>
            <div className="flex-1 p-6">

              <p className="text-gray-800 mb-8">
                THREE BROTHERS PROMOTION IS MORE THAN A DIGITAL MARKETING AGENCY — WE’RE YOUR CREATIVE GROWTH PARTNERS. FROM BOLD BRAND VISUALS TO SMART MARKETING MOVES, WE’RE ALL ABOUT HELPING BUSINESSES THRIVE IN TODAY’S EVER-CHANGING DIGITAL WORLD.
              </p>
              <p className="text-gray-800 mb-8">
                WHAT STARTED AS A SHARED PASSION HAS GROWN INTO A FULL-SERVICE AGENCY TRUSTED BY CLIENTS ACROSS INDUSTRIES. WITH A POWERFUL BLEND OF DESIGN, CONTENT, MARKETING, AND STRATEGY.
              </p>
              <p className="font-semibold mb-4">— WE TURN IDEAS INTO IMPACT.</p>
              <p className="mb-2">🚀 MISSION: DELIVER DESIGN + DIGITAL EXCELLENCE FOR EVERY BRAND.</p>
              <p className="mb-4">🎯 VISION: TO BE THE MOST TRUSTED CREATIVE ALLY FOR BUSINESSES EVERYWHERE.</p>
            </div>
          </div>
        </div>
      </div>


      <div className='w-[100%] text-center my-[60px] flex flex-col items-center'>
        <h1 className='font-helvetica-bold max-w-[80%] text-[40px] text-[#000000] text-center'>
          Understanding People Before Promoting Products
        </h1>
        <h2 className='font-helvetica max-w-[80%] text-[30px] mt-[20px] text-[#000000] text-center'>
          We don’t guess what works we learn what matters. By focusing on real customer insights, our team designs marketing solutions that feel personal, relevant, and impactful. The result? Strategies that make sense and deliver results.
        </h2>
      </div>

      <div className="px-6 max-w-[100%] mx-auto mb-[60px] mt-[80px]">
        {/* Service Cards */}
        <div className="grid gap-[40px] grid-cols-[repeat(auto-fit,minmax(220px,330px))] justify-center max-w-[100%] mx-auto">
          {/* Card 1 */}
          <div className="service-card flex flex-col items-center text-center min-h-[440px] bg-[#202041] rounded-xl text-[#fff] px-[30px] py-[40px]">
            <img src={graphicLogo} alt="Logo" className="h-[48px] w-[48px] mb-5 stroke-current" />
            <h4 className="font-helvetica-bold text-[30px] mb-2">
              Graphic Design that Captivates and Communicates
            </h4>
            <p className="text-[19px] text-orange-200 mt-4">
              Transform your ideas into stunning visuals.
            </p>
          </div>

          {/* Card 2 */}
          <div className="service-card flex flex-col items-center text-center min-h-[440px] bg-[#202041] rounded-xl text-[#fff] px-[30px] py-[40px]">
            <img src={socialLogo} alt="Logo" className="h-[48px] w-[48px] mb-5 stroke-current" />
            <h4 className="font-helvetica-bold text-[30px] mb-2">
              Social Media Marketing that Engages and Converts
            </h4>
            <p className="text-[19px] text-orange-200 mt-4">
              Grow your online presence with targeted strategies.
            </p>
          </div>

          {/* Card 3 */}
          <div className="service-card flex flex-col items-center text-center min-h-[440px] bg-[#202041] rounded-xl text-[#fff] px-[30px] py-[40px]">
            <img src={seoLogo} alt="Logo" className="h-[48px] w-[48px] mb-5 stroke-current" />
            <h4 className="font-helvetica-bold text-[30px] mb-2">
              SEO & Paid Ads for Maximum Visibility
            </h4>
            <p className="text-[19px] text-orange-200 mt-4">
              Drive traffic and boost your brand's reach.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
