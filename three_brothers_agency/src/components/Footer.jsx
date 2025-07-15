import { useState } from "react";
import axios from "axios";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assests/main_logo.png'
// import instaIcon from '../assests/insta_icon.png'
// import linkedInIcon from '../assests/linkedIn_icon.png'
// import xIcon from '../assests/x_icon.png'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [queryText, setQueryText] = useState("");

  const handleSendQuery = async () => {
    if (!queryText.trim() || !email.trim() || !name.trim()) {
      alert("Please fill all fields.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/send-query", {
        name,
        email,
        query: queryText,
      });

      alert("Your query has been sent!");
      setName("");
      setEmail("");
      setQueryText("");
    } catch (err) {
      console.error("Error sending query:", err);
      alert("Failed to send. Please try again.");
    }
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "About us", path: "/about" },
    { label: "Team", path: "/team" },
  ];
  return (
    // <div className='bg-[#FEFEFE45] backdrop-blur max-w-full pt-[20px] pb-[40px]'>
    <footer className="bg-[#ff6b0223] backdrop-blur w-screen px-6 py-10">
      <div className="grid gap-[40px] grid-cols-1 md:grid-cols-2 sm:grid-cols-2 justify-center max-w-[90%] mx-auto items-start">
        {/* Logo and Nav */}

        <div className="flex min-w-[500px] items-start gap-8">
          <a
            href="#"
            className="flex items-center font-semibold text-lg select-none mb-4"
          >
            <img src={logo} alt="Logo" className="h-10 w-10" />
          </a>
          {/* <nav className="flex flex-col space-y-1 font-helvetica text-[16px]">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Works</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </nav> */}

          {/* Quick Links */}

          <div className="flex flex-col gap-1 min-w-[160px]">
            <h5 className="font-helvetica-bold text-[18px] mb-2">Quick Links</h5>
            <nav className="flex flex-col space-y-1 font-helvetica text-[16px]">
              {/* <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">Works</a>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a> */}

              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative transition-colors text-[#10141a] ${currentPath === item.path
                    ? "hover:text-[#FF6B00]"
                    : "hover:text-[#FF6B00]"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col gap-2 min-w-[160px]">
            <h5 className="font-helvetica-bold text-[18px] mb-2">Follow Us</h5>
            <nav className="flex flex-col  space-y-1 font-helvetica text-[16px]">
              <a href="#" className="hover:text-[#FF6B00]">Facebook</a>
              <a href="#" className="hover:text-[#FF6B00]">Twitter</a>
              <a href="#" className="hover:text-[#FF6B00]">Instagram</a>
              <a href="#" className="hover:text-[#FF6B00]">LinkedIn</a>
              <a href="#" className="hover:text-[#FF6B00]">YouTube</a>
            </nav>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="flex flex-col gap-2 min-w-[160px]">
          <h5 className="font-semibold mb-2">Newsletter</h5>
          <nav className="flex flex-col space-y-1 text-sm">
            <a href="#">Subscribe</a>
            <a href="#">Updates</a>
            <a href="#">Offers</a>
            <a href="#">News</a>
            <a href="#">Events</a>
          </nav>
        </div> */}

        {/* Query Box */}
        <div className=" relative footer-query flex flex-col flex-grow min-w-[350px] w-[100%] max-w-[500px]">
          <label htmlFor="query" className=" font-helvetica text-[30px]">
            Have any Query Feel Free to Ask
          </label>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 p-2 rounded-md bg-[#ededed] border border-[#bcbcbccf] text-black text-sm"
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 p-2 rounded-md bg-[#ededed] border border-[#bcbcbccf] text-black text-sm"
          />
          <textarea
            id="query"
            rows="3"
            placeholder="Type your questions or comments here..."
            aria-label="User query input for questions or comments"
            value={queryText}
            onChange={(e) => setQueryText(e.target.value)}
            className="mt-2 p-2 rounded-md bg-[#ededed] border border-[#bcbcbccf] text-black text-sm"
          ></textarea>
          <button
            onClick={handleSendQuery}
            className="absolute right-2 -bottom-12 px-3 py-1 text-[#fff] bg-[#FF6B00] rounded-lg text-[16px] font-helvetica-bold shadow-custom-contact hover:shadow-custom-contact-h transition-shadow">Send</button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex justify-between items-center mt-[60px] text-xs max-w-[80%] mx-auto gap-4">
        <p>© 2025 Three Brothers Promotion. All Rights Reserved.</p>

        <nav className="flex gap-5">
          {/* Social media icons */}
          {/* <a href="#" aria-label="Facebook" className="hover:opacity-90 transition-opacity">
            <img src="" alt="" />
          </a> */}
          {/* <a href="#" aria-label="Instagram" className="hover:opacity-90 transition-opacity"> */}
          <FaInstagram className="h-[20px] w-[20px] transition duration-300 hover:brightness-150 hover:drop-shadow-[0_0_6px_#FF6B00] hover:text-[#FF6B00] hover:cursor-pointer" />
          {/* </a> */}
          {/* <a href="#" aria-label="LinkedIn" className="hover:opacity-90 transition-opacity"> */}
          <FaLinkedin className="h-[20px] w-[20px] transition duration-300 hover:brightness-150 hover:drop-shadow-[0_0_6px_#FF6B00] hover:text-[#FF6B00] hover:cursor-pointer" />
          {/* </a> */}
          {/* <a href="#" aria-label="Twitter" className="hover:opacity-90 transition-opacity"> */}
          <FaXTwitter className="h-[20px] w-[20px] transition duration-300 hover:brightness-150 hover:drop-shadow-[0_0_6px_#FF6B00] hover:text-[#FF6B00] hover:cursor-pointer" />
          {/* </a> */}
        </nav>
      </div>
    </footer>
    // </div>
  );
};

export default Footer;