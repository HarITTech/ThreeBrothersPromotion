import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://threebrotherspromotion.onrender.com/send-contact', form);
      alert('✅ Message sent successfully!');
      // Clear the form
      setForm({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });
    } catch (err) {
      console.error('❌ Error sending message:', err);
      alert('❌ Failed to send message.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#FEFEFE45] backdrop-blur pt-[20px] pb-[100px] border-b-[1px] border-[#eeeeeeb0] px-5">
      <h2 className="text-[38px] font-bold mb-[60px]">Contact Us</h2>
      <form className="w-full max-w-md space-y-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="FULL NAME"
          value={form.name}
          onChange={handleChange}
          className="w-full px-6 py-4 rounded-md bg-white/50 text-center text-gray-800 font-semibold shadow-md outline-none placeholder-gray-500 backdrop-blur-md"
        />

        <input
          type="email"
          name="email"
          placeholder="EMAIL ID"
          value={form.email}
          onChange={handleChange}
          className="w-full px-6 py-4 rounded-md bg-white/50 text-center text-gray-800 font-semibold shadow-md outline-none placeholder-gray-500 backdrop-blur-md"
        />

        <input
          type="text"
          name="company"
          placeholder="COMPANY NAME"
          value={form.company}
          onChange={handleChange}
          className="w-full px-6 py-4 rounded-md bg-white/50 text-center text-gray-800 font-semibold shadow-md outline-none placeholder-gray-500 backdrop-blur-md"
        />

        <input
          type="tel"
          name="phone"
          placeholder="PHONE NUM."
          value={form.phone}
          onChange={handleChange}
          className="w-full px-6 py-4 rounded-md bg-white/50 text-center text-gray-800 font-semibold shadow-md outline-none placeholder-gray-500 backdrop-blur-md"
        />

        <textarea
          name="message"
          rows="4"
          placeholder="ADDITIONAL WORDS TO GIVE US LITTLE BIT INFO"
          value={form.message}
          onChange={handleChange}
          className="w-full px-6 py-4 rounded-md bg-white/50 text-center text-gray-800 font-semibold shadow-md outline-none placeholder-gray-500 backdrop-blur-md resize-none"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#1f1f3e] text-white font-semibold py-3 rounded-md shadow-md hover:bg-[#111132] transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
