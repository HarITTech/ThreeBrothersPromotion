import React, { useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assests/main_logo.png';

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [queryText, setQueryText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendQuery = async () => {
    if (!queryText.trim() || !email.trim() || !name.trim()) {
      toast.warn("Please fill all fields.");
      return;
    }

    setLoading(true);
    try {
      await axios.post("https://threebrotherspromotion.onrender.com/send-query", {
        name,
        email,
        query: queryText,
      });

      toast.success("Your query has been sent!");
      setName("");
      setEmail("");
      setQueryText("");
    } catch (err) {
      toast.error("Failed to send. Please try again.");
    } finally {
      setLoading(false);
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
    <footer className="bg-[#ff6b0223] backdrop-blur w-screen px-6 py-10">
      <ToastContainer position="bottom-center" autoClose={3000} />

      <div className="grid gap-[40px] grid-cols-1 md:grid-cols-2 sm:grid-cols-2 justify-center max-w-[90%] mx-auto items-start">
        {/* Logo + Links */}
        <div className="flex min-w-[500px] items-start gap-8">
          <Link to="/" className="flex items-center font-semibold text-lg select-none mb-4">
            <img src={logo} alt="Logo" className="h-10 w-10" />
          </Link>

          <div className="flex flex-col gap-1 min-w-[160px]">
            <h5 className="font-helvetica-bold text-[18px] mb-2">Quick Links</h5>
            <nav className="flex flex-col space-y-1 font-helvetica text-[16px]">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative transition-colors text-[#10141a] hover:text-[#FF6B00]`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-2 min-w-[160px]">
            <h5 className="font-helvetica-bold text-[18px] mb-2">Follow Us</h5>
            <nav className="flex flex-col space-y-1 font-helvetica text-[16px]">
              <a href="#" className="hover:text-[#FF6B00]">Facebook</a>
              <a href="#" className="hover:text-[#FF6B00]">Twitter</a>
              <a href="#" className="hover:text-[#FF6B00]">Instagram</a>
              <a href="#" className="hover:text-[#FF6B00]">LinkedIn</a>
              <a href="#" className="hover:text-[#FF6B00]">YouTube</a>
            </nav>
          </div>
        </div>

        {/* Query Form */}
        <div className="relative footer-query flex flex-col flex-grow min-w-[350px] w-full max-w-[500px]">
          <label htmlFor="query" className=" font-helvetica text-[30px]">Have any Query Feel Free to Ask</label>
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
            value={queryText}
            onChange={(e) => setQueryText(e.target.value)}
            className="mt-2 p-2 rounded-md bg-[#ededed] border border-[#bcbcbccf] text-black text-sm"
          ></textarea>

          <button
            onClick={handleSendQuery}
            disabled={loading}
            className="absolute right-2 -bottom-12 px-4 py-1.5 bg-[#FF6B00] text-white rounded-lg font-semibold text-sm hover:brightness-110 transition flex items-center gap-2"
          >
            {loading ? (
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              "Send"
            )}
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-between items-center mt-[60px] text-xs max-w-[80%] mx-auto gap-4">
        <p>© 2025 Three Brothers Promotion. All Rights Reserved.</p>
        <nav className="flex gap-5">
          <FaInstagram className="h-[20px] w-[20px] transition duration-300 hover:brightness-150 hover:drop-shadow-[0_0_6px_#FF6B00] hover:text-[#FF6B00] hover:cursor-pointer" />
          <FaLinkedin className="h-[20px] w-[20px] transition duration-300 hover:brightness-150 hover:drop-shadow-[0_0_6px_#FF6B00] hover:text-[#FF6B00] hover:cursor-pointer" />
          <FaXTwitter className="h-[20px] w-[20px] transition duration-300 hover:brightness-150 hover:drop-shadow-[0_0_6px_#FF6B00] hover:text-[#FF6B00] hover:cursor-pointer" />
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
