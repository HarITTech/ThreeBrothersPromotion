import React from 'react'

import serviceGroups from "./WorkData";



const Strenths = () => {

  return (
    <div className='bg-[#FEFEFE45] backdrop-blur pb-[40px] border-b-[1px] border-[#eeeeeeb0] font-helvetica min-h-screen text-black'>
      <section className="text-center items-center py-6 px-4">
        {/* <h2 className="text-[38px] font-bold mb-[40px]">Our Works</h2> */}
        <h1 className="text-[40px] font-helvetica-bold bg-gradient-to-b from-[#4543CC] via-[#955E7F] to-[#FF8800] text-transparent bg-clip-text mb-[40px]">
        Our Work
      </h1>

        {serviceGroups?.map((group, index) => (
          <div key={index} className="mb-[60px] bg-[#dee3e936] backdrop-blur border border-[#fff] rounded-lg shadow-lg px-6 pb-10 pt-6 max-w-[90%] mx-auto h-auto">
            <h3 className="text-[28px] font-semibold mb-[30px]">{group.category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
              {group.services?.map((item, idx) => (
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