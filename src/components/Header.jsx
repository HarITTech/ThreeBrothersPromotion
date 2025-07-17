// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import mainLogo from '../assests/main_logo.png';
// import logoText from '../assests/logo_text.png';

// const Header = () => {
//   const location = useLocation();
//   const currentPath = location.pathname;

//   const navItems = [
//     { label: "Home", path: "/" },
//     { label: "Services", path: "/services" },
//     { label: "Portfolio", path: "/portfolio" },
//     { label: "About us", path: "/about" },
//     { label: "Team", path: "/team" },
//   ];

//   return (
//     <header className="bg-[#FEFEFE45] backdrop-blur sticky top-0 z-40 py-4">
//       <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="flex items-center gap-[1px] select-none"
//         >
//           <img src={mainLogo} alt="logo" className="h-[55px] w-[55px]" />
//           <span className="hidden sm:inline"><img src={logoText} alt="text" className="h-[40px] w-auto" /></span>
//         </Link>

//         {/* Nav links */}
//         <div className="bg-[#ffffff] shadow-custom-4px py-auto content-center px-[35px] rounded-lg h-[42px]">
//           <nav className="nav-links gap-[35px] flex space-x-7 text-slate-700 text-[18px] font-helvetica">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`relative transition-colors ${currentPath === item.path
//                     ? "text-[#10141a] after:content-[''] after:absolute after:-bottom-[2px] after:left-[0px] after:w-full after:h-[3px] after:bg-[#0087F9]"
//                     : "hover:text-[#10141a]"
//                   }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>
//         </div>

//         {/* CTA Button */}
//         <Link to="/contact">
//           <button
//             className={`btn-primary px-3 py-1 text-[#fff] bg-[#FF6B00] rounded-lg text-[16px] font-helvetica-bold shadow-custom-contact hover:shadow-custom-contact-h transition-shadow ${currentPath === "/contact" ? "text-[#FF6B00] border-b-2 border-[#FF6B00]" : ""
//               }`}
//           >
//             Contact us
//           </button>
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;





import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import mainLogo from '../assests/main_logo.png';
import logoText from '../assests/logo_text.png';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "About us", path: "/about" },
    { label: "Team", path: "/team" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-[#FEFEFE45] backdrop-blur sticky top-0 z-40 py-4">
      <div className=" mx-auto py-4 flex items-center justify-between px-7">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-[1px] select-none">
          <img src={mainLogo} alt="logo" className="h-[55px] w-[55px]" />
          <span className="">
            <img src={logoText} alt="text" className="h-[40px] w-auto" />
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="bg-[#Fff] backdrop-blur shadow-custom-4px py-auto content-center px-[35px] rounded-lg h-[42px]">
            <nav className="nav-links gap-[35px] item-center text-center flex space-x-7 text-slate-700 text-[18px] font-helvetica">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative transition-colors ${currentPath === item.path
                    ? "text-[#10141a] after:content-[''] after:absolute after:-bottom-[2px] after:left-[0px] after:w-full after:h-[3px] after:bg-[#0087F9]"
                    : "hover:text-[#10141a]"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-6">
          <Link to="/contact">
            <button
              className={`btn-primary px-3 py-1 text-[#fff] bg-[#FF6B00] rounded-lg text-[16px] font-helvetica-bold shadow-custom-contact hover:shadow-custom-contact-h transition-shadow ${currentPath === "/contact"
                ? "text-[#FF6B00] border-b-2 border-[#FF6B00]"
                : ""
                }`}
            >
              Contact us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-[#10141a] text-3xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden px-6 pt-4 pb-6 bg-[#FEFEFE10] backdrop-blur shadow-xl h-[100vh]">
          <nav className="flex flex-col gap-5 item-center text-center text-slate-700 text-[18px] font-helvetica">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`transition-colors ${currentPath === item.path
                  ? "text-[#10141a]"
                  : "hover:text-[#10141a]"
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={closeMenu}>
              <button
                className={`w-full mt-4 px-3 py-2 text-[#fff] bg-[#FF6B00] rounded-lg text-[16px] font-helvetica-bold shadow-custom-contact hover:shadow-custom-contact-h transition-shadow ${currentPath === "/contact"
                  ? "text-[#FF6B00] border-b-2 border-[#FF6B00]"
                  : ""
                  }`}
              >
                Contact us
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
