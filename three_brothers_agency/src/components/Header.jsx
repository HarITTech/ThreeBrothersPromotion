import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import mainLogo from "../assests/main_logo.png";
import logoText from "../assests/logo_text.png";

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

  // 🔑 Works for both window scroll and custom scroll container with id="page"
  const goTop = () => {
    const main = document.getElementById("page");
    if (main && typeof main.scrollTo === "function") {
      main.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <header className="bg-[#FEFEFE45] backdrop-blur sticky top-0 z-40 py-4">
      <div className="mx-auto py-4 flex items-center justify-between px-7">
        {/* Logo */}
        <Link
          to="/"
          onClick={goTop}
          className="flex items-center gap-[1px] select-none"
        >
          <img src={mainLogo} alt="logo" className="h-[55px] w-[55px]" />
          <span>
            <img src={logoText} alt="text" className="h-[40px] w-auto" />
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="bg-[#fff] backdrop-blur shadow-custom-4px px-[35px] rounded-lg h-[42px] flex items-center">
            <nav className="nav-links gap-[35px] text-center flex space-x-7 text-slate-700 text-[18px] font-helvetica">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={goTop}
                  className={`relative transition-colors ${
                    currentPath === item.path
                      ? "text-[#090c0f] font-helvetica-bold after:content-[''] after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-[3px] after:bg-[#0087F9]"
                      : "hover:text-[#0087F9] hover:font-helvetica-bold"
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
          <Link to="/contact" onClick={goTop}>
            <button
              className={`btn-primary px-3 py-1 text-[#fff] bg-[#FF6B00] rounded-lg text-[16px] font-helvetica-bold shadow-custom-contact hover:shadow-custom-contact-h transition-shadow ${
                currentPath === "/contact"
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
        <div className="lg:hidden px-6 pt-4 pb-6 bg-[#fefefe00] backdrop-blur shadow-xl h-[100vh]">
          <nav className="flex flex-col gap-5 text-center text-slate-700 text-[18px] font-helvetica">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  goTop();
                  closeMenu();
                }}
                className={`relative transition-colors ${
                  currentPath === item.path
                    ? "text-[#090c0f] font-helvetica-bold"
                    : "hover:text-[#0087F9] hover:font-helvetica-bold"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => {
                goTop();
                closeMenu();
              }}
            >
              <button
                className={`w-full mt-4 px-3 py-2 text-[#fff] bg-[#FF6B00] rounded-lg text-[16px] font-helvetica-bold shadow-custom-contact hover:shadow-custom-contact-h transition-shadow ${
                  currentPath === "/contact"
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
