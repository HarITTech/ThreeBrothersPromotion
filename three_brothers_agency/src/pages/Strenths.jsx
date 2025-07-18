import React from 'react'


import serviceGroups from "./WorkData";



// const services = [
//   {
//     image: advertisesImage,
//     title: "Adverting",
//     label: "All over platform",
//     aspect: "4/5"
//   },
//   {
//     image: graphicImage,
//     title: "Graphics Design",
//     label: "For Campaigns",
//     aspect: "4/5"
//   },
//   {
//     image: seoImage,
//     title: "SEO Optimis",
//     label: "SEO helps ranking",
//     aspect: "4/5"
//   },
//   {
//     image: banner1,
//     title: "Resort Branding",
//     label: "Outdoor Event Poster",
//     aspect: "4/5"
//   },
//   {
//     image: banner2,
//     title: "Water Park Ads",
//     label: "Event Poster Design",
//     aspect: "4/5"
//   },
//   {
//     image: banner3,
//     title: "Water Park Ads",
//     label: "Event Poster Design",
//     aspect: "4/5"
//   },
//   {
//     image: banner4,
//     title: "Water Park Ads",
//     label: "Event Poster Design",
//     aspect: "4/5"
//   },
//   {
//     image: banner5,
//     title: "Water Park Ads",
//     label: "Event Poster Design",
//     aspect: "4/5"
//   },
//   {
//     image: banner6,
//     title: "Water Park Ads",
//     label: "Event Poster Design",
//     aspect: "4/5"
//   },
//   {
//     image: banner7,
//     title: "Water Park Ads",
//     label: "Event Poster Design",
//     aspect: "4/5"
//   },
//   {
//     image: banner8,
//     title: "Launch Poster",
//     label: "Location Promotion",
//     aspect: "4/5"
//   },
//   {
//     image: banner9,
//     title: "Admission Campaign",
//     label: "School Branding",
//     aspect: "4/5"
//   },
//   {
//     image: banner10,
//     title: "School Event Posters",
//     label: "Awareness & Celebration",
//     aspect: "4/5"
//   },
//   {
//     image: banner11,
//     title: "School Event Posters",
//     label: "Awareness & Celebration",
//     aspect: "4/5"
//   },
//   {
//     image: banner12,
//     title: "D.Pharm Poste",
//     label: "Admission Design",
//     aspect: "4/5"
//   },
//   {
//     image: banner13,
//     title: "College Poster",
//     label: "Education Campaign",
//     aspect: "4/5"
//   },
//   {
//     image: banner14,
//     title: "Product Promotion",
//     label: "Bakery Snacks Ad",
//     aspect: "4/5"
//   },
//   {
//     image: banner15,
//     title: "Dessert Branding",
//     label: "Sweet Treats",
//     aspect: "4/5"
//   },
//   {
//     image: banner16,
//     title: "Heritage Product Ad",
//     label: "Traditional Cookies",
//     aspect: "4/5"
//   },
//   {
//     image: banner17,
//     title: "Celebration Campaign",
//     label: "Bakery Festive Design",
//     aspect: "4/5"
//   },
//   {
//     image: package1,
//     title: "Packaging Designs",
//     label: "Visual Product Display",
//     aspect: "1/1",
//   },
//   {
//     image: package2,
//     title: "Packaging Designs",
//     label: "Visual Product Display",
//     aspect: "1/1",
//   },
//   {
//     image: package3,
//     title: "Packaging Designs",
//     label: "Visual Product Display",
//     aspect: "1/1",
//   },
//   {
//     image: package4,
//     title: "Packaging Designs",
//     label: "Visual Product Display",
//     aspect: "1/1",
//   },
//   {
//     image: package5,
//     title: "Cookie Packaging Designs",
//     label: "For product Package",
//     aspect: "1/1",
//   },
//   {
//     image: package6,
//     title: "Cookie Packaging Designs",
//     label: "For product Package",
//     aspect: "1/1",
//   },
//   {
//     image: package7,
//     title: "Cookie Packaging Designs",
//     label: "For product Package",
//     aspect: "1/1",
//   },
//   {
//     image: package8,
//     title: "Cookie Packaging Designs",
//     label: "For product Package",
//     aspect: "1/1",
//   },
//   {
//     image: mockUpsImage,
//     title: "Create Mock-ups",
//     label: "For product Package",
//     aspect: "1/1",
//   },
//   {
//     image: logo1,
//     title: "Logo Design",
//     label: "Campaign Design",
//     aspect: "1/1",
//   },
//   {
//     image: logo2,
//     title: "Logo Design",
//     label: "School Branding & Academic Identity",
//     aspect: "1/1",
//   },
//   {
//     image: logo3,
//     title: "Logo Design",
//     label: "Medical & Educational Institution",
//     aspect: "1/1",
//   },
//   {
//     image: logo4,
//     title: "Logo Design",
//     label: "Gym, Fitness Center",
//     aspect: "1/1",
//   },
//   {
//     image: logo5,
//     title: "Logo Design",
//     label: "Real Estate Branding & Construction",
//     aspect: "1/1",
//   },
//   {
//     image: logo6,
//     title: "Logo Design",
//     label: "Coaching & Educational Institution",
//     aspect: "1/1",
//   },
//   {
//     image: logo7,
//     title: "Logo Design",
//     label: "E-commerce & Retail Business",
//     aspect: "1/1",
//   },
// ];



const Strenths = () => {

   return (
    <div className='bg-[#FEFEFE45] backdrop-blur pb-[40px] border-b-[1px] border-[#eeeeeeb0] font-helvetica min-h-screen text-black'>
      <section className="text-center items-center py-6 px-4">
        {/* <h2 className="text-[38px] font-bold mb-[40px]">Our Works</h2> */}
        <h1 className="text-[40px] font-helvetica-bold bg-gradient-to-b from-[#4543CC] via-[#955E7F] to-[#FF8800] text-transparent bg-clip-text mb-[40px]">
        Our Work
      </h1>

        {serviceGroups.map((group, index) => (
          <div key={index} className="mb-[60px] bg-[#dee3e936] backdrop-blur border border-[#fff] rounded-lg shadow-lg px-6 pb-10 pt-6 max-w-[90%] mx-auto h-auto">
            <h3 className="text-[28px] font-semibold mb-[30px]">{group.category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
              {group.services.map((item, idx) => (
                <div key={idx}>
                  <div className={`w-full max-w-[300px] overflow-hidden rounded-xl aspect-[${item.aspect}]`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <h4 className="font-helvetica-bold text-[22px] mt-2 text-center">{item.title}</h4>
                  <p className="text-[18px] text-center">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Strenths
