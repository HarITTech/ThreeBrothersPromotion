import React from 'react'
import advertisesImage from '../assests/strenths/advertise.jpg'
import mockUpsImage from '../assests/strenths/mock_ups.jpg'
import graphicImage from '../assests/strenths/graphic.jpg'
import seoImage from '../assests/strenths/seo.jpg'



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



const Strenths = () => {
  return (
    <div className='bg-[#FEFEFE45] backdrop-blur pb-[60px] border-b-[1px] border-[#eeeeeeb0] font-helvetica min-h-screen text-black'>
      <section className="text-center items-center py-6 px-4">
        <h2 className="text-[38px] font-bold mb-[60px]">Our Works</h2>
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
        {/* 
        <Link to="/our-work">
          <a
            href="#"
            className="text-orange-500 hover:underline text-[18px] font-semibold my-6 inline-block"
          >
            View All &gt;
          </a>
        </Link> */}
      </section>
    </div>
  )
}

export default Strenths
