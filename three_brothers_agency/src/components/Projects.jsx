import React from 'react';
import brandLogo from '../assests/brand_family_project.png';
import webLogo from '../assests/web_stories_project.png';
import exploreLogo from '../assests/explore_project.png';

const Projects = () => {
  return (
    <div className='bg-[#FEFEFE45] backdrop-blur max-w-full py-[40px]'>
      <section className="bg-[#dee3e936] backdrop-blur border border-[#fff] rounded-lg shadow-lg px-6 py-10 max-w-[90%] mx-auto text-center">
        <h3 className="section-heading mb-6 max-w-3xl text-[39px] mx-auto">
          Explore Our Creative Projects That Drive Results and Inspire Innovation
        </h3>

        <div className="grid gap-[40px] grid-cols-[repeat(auto-fit,minmax(300px,400px))] justify-center max-w-[100%] mx-auto text-[#000]">
          {/* Project Card 1 */}
          <article>
            <h4 className="font-helvetica text-[24px] mb-2 flex flex-col items-center gap-2">
              <img src={brandLogo} alt="Logo" className="h-[46px] w-[46px] mb-5 stroke-current"/>
              Discover How Our Work Transforms Brands and Engages Audiences
            </h4>
            <p className="text-[16px] mt-4">
              Our projects are crafted with a strong focus on converting potential customers and building brand growth.
            </p>
            <a
              href="#"
              className="text-orange-500 hover:underline font-semibold my-6 inline-block"
            >
              Portfolio &gt;
            </a>
          </article>

          {/* Project Card 2 */}
          <article>
            <h4 className="font-helvetica text-[24px] mb-2 flex flex-col items-center gap-2">
              <img src={webLogo} alt="Logo" className="h-[46px] w-[46px] mb-5 stroke-current"/>
              See the Impact of Our Work Through Client Success Stories
            </h4>
            <p className="text-[16px] mt-4">
              Each project undergoes careful execution focused on quality and client satisfaction.
            </p>
            <a
              href="#"
              className="text-orange-500 hover:underline font-semibold my-6 inline-block"
            >
              View &gt;
            </a>
          </article>

          {/* Project Card 3 */}
          <article>
            <h4 className="font-helvetica text-[24px] mb-2 flex flex-col items-center gap-2">
              <img src={exploreLogo} alt="Logo" className="h-[46px] w-[46px] mb-5 stroke-current"/>
              Join Us in Celebrating Our Innovative Solutions and Creative
              Excellence
            </h4>
            <p className="text-[16px] mt-4">
              Let our work inspire you to break boundaries and meet project goals.
            </p>
            <a
              href="#"
              className="text-orange-500 hover:underline font-semibold my-6 inline-block"
            >
              Explore &gt;
            </a>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Projects;
