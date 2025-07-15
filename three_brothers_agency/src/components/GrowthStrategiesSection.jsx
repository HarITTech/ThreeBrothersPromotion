import React from 'react';

const GrowthStrategiesSection = () => {
  return (
    <section className="bg-slate-900 text-white py-20 px-6 w-full">
      <h3 className="text-center text-[38px] mb-14 font-semibold max-w-3xl mx-auto">
        Unlock Your Potential with Our Proven Growth Strategies and Creative Solutions
      </h3>

      <div className="max-w-[90%] grid gap-10 grid-cols-[repeat(auto-fit,minmax(300px,390px))] justify-center mx-auto mb-14">
        {/* Strategy Card 1 */}
        <article className="bg-[rgba(51,65,85,0.41)] text-center backdrop-blur border border-[#334155] rounded-lg p-8 shadow-lg flex flex-col justify-center items-center">
          <div className="mb-6 flex flex-col text-center content-center items-center">
            <div className=" rounded-md w-14 h-14 mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L4.5 9.75M14.25 17L19.5 9.75" />
              </svg>
            </div>
            <h4 className="font-helvetica text-[#fff] text-[23px] mb-2">Innovative Minds Crafting Unique Solutions for Your Business Challenges</h4>
            <p className="text-[#fff] text-[15px]">Explore how seamless service delivery from start to finish attracts more business and sales.</p>
          </div>
          <a href="#" className="text-orange-400 hover:underline font-semibold inline-block">Learn &gt;</a>
        </article>

        {/* Strategy Card 2 */}
        <article className="bg-[rgba(51,65,85,0.41)] text-center flex flex-col justify-center items-center backdrop-blur border border-[#334155] rounded-lg p-8 shadow-lg">
          <div className="mb-6 flex flex-col text-center content-center items-center">
            <div className=" rounded-md w-14 h-14 mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h7m4 0h7M6 21v-6a6 6 0 0112 0v6m-6 0H6" />
              </svg>
            </div>
            <h4 className="font-helvetica text-[#fff] text-[23px] mb-2">Dedicated Support Available 24/7 to Ensure Your Success and Satisfaction</h4>
            <p className="text-[#fff] text-[15px]">Our team is always ready to assist you for a smoother lifetime experience.</p>
          </div>
          <a href="#" className="text-orange-400 hover:underline font-semibold inline-flex gap-3"><h5>Talk</h5> <h5>&gt;</h5></a>
        </article>

        {/* Strategy Card 3 */}
        <article className="bg-[rgba(51,65,85,0.41)] text-center backdrop-blur border border-[#334155] rounded-lg p-8 shadow-lg flex flex-col justify-center items-center">
          <div className="mb-6 flex flex-col text-center content-center items-center">
            <div className=" rounded-md w-14 h-14 mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
              </svg>
            </div>
            <h4 className="font-helvetica text-[#fff] text-[23px] mb-2">Transform Your Vision into Reality with Our Expert Guidance and Support</h4>
            <p className="text-[#fff] text-[15px]">Let us help you navigate the complexities of your projects with ease.</p>
          </div>
          <a href="#" className="text-orange-400 hover:underline font-semibold inline-block">Connect &gt;</a>
        </article>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 max-w-md mx-auto">
        <h4 className="text-[48px] mb-4">Are You Ready to Grow?</h4>
        <p className="text-[18px] mb-8">Unlock your potential with our expert guidance and tailored strategies for success.</p>
        <div className="space-x-6">
          <button className="btn-primary px-3 py-1 text-[#fff] bg-[#FF6B00] rounded-lg text-[16px] font-helvetica-bold shadow-custom-contact hover:shadow-custom-contact-h transition-shadow">Talk</button>
          <button className="bg-[#ffffff41] hover:bg-[#ffffff50] px-3 py-1 text-[#fff] rounded-lg text-[16px] font-helvetica-bold shadow-custom-connect hover:shadow-custom-connect-h transition-shadow">Connect</button>
        </div>
      </div>
    </section>
  );
};

export default GrowthStrategiesSection;
