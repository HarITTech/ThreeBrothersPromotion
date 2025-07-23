import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    countryCode: '+91',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, company, phone, message, countryCode } = form;

    if (!name || !email || !company || !phone || !message) {
      toast.warn("Please fill all fields.");
      return;
    }

    if (!validatePhone(phone)) {
      toast.error("Phone number must be exactly 10 digits.");
      return;
    }

    const fullPhone = `${countryCode}${phone}`;

    setLoading(true);

    try {
      await axios.post('https://threebrotherspromotion.onrender.com/send-contact', {
        ...form,
        phone: fullPhone,
      });

      toast.success('Message sent successfully!');
      setForm({
        name: '',
        email: '',
        company: '',
        countryCode: '+91',
        phone: '',
        message: '',
      });
    } catch (err) {
      console.error('Error sending message:', err);
      toast.error('Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#FEFEFE45] backdrop-blur pt-[20px] pb-[100px] border-b-[1px] border-[#eeeeeeb0] px-5">
      <ToastContainer position="bottom-center" autoClose={3000} />
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

        {/* Country Code + Phone Number */}
        <div className="flex gap-2">
          <select
            name="countryCode"
            value={form.countryCode}
            onChange={handleChange}
            className="w-[30%] px-4 py-4 rounded-md bg-white/50 text-gray-800 font-semibold shadow-md outline-none backdrop-blur-md"
          >
            <option value="+1">+1 United States</option>
            <option value="+91">+91 India</option>
            <option value="+44">+44 United Kingdom</option>
            <option value="+61">+61 Australia</option>
            <option value="+1">+1 Canada</option>
            <option value="+49">+49 Germany</option>
            <option value="+33">+33 France</option>
            <option value="+39">+39 Italy</option>
            <option value="+34">+34 Spain</option>
            <option value="+86">+86 China</option>
            <option value="+81">+81 Japan</option>
            <option value="+55">+55 Brazil</option>
            <option value="+7">+7 Russian Federation</option>
            <option value="+52">+52 Mexico</option>
            <option value="+27">+27 South Africa</option>
            <option value="+82">+82 Korea, Republic of</option>
            <option value="+234">+234 Nigeria</option>
            <option value="+92">+92 Pakistan</option>
            <option value="+62">+62 Indonesia</option>
            <option value="+880">+880 Bangladesh</option>
            <option value="+90">+90 Turkey</option>
            <option value="+98">+98 Iran</option>
            <option value="+63">+63 Philippines</option>
            <option value="+84">+84 Vietnam</option>
            <option value="+66">+66 Thailand</option>
            <option value="+20">+20 Egypt</option>
            <option value="+54">+54 Argentina</option>
            <option value="+966">+966 Saudi Arabia</option>
            <option value="+971">+971 UAE</option>
            <option value="+60">+60 Malaysia</option>
            <option value="+254">+254 Kenya</option>

          </select>

          <input
            type="tel"
            name="phone"
            placeholder="PHONE NUM."
            value={form.phone}
            onChange={handleChange}
            maxLength={10}
            className="w-[70%] px-6 py-4 rounded-md bg-white/50 text-center text-gray-800 font-semibold shadow-md outline-none placeholder-gray-500 backdrop-blur-md"
          />
        </div>

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
          disabled={loading}
          className="w-full bg-[#FF6B00] text-white font-semibold py-3 rounded-md shadow-md hover:brightness-110 transition duration-300 flex justify-center items-center gap-2"
        >
          {loading ? (
            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;





// import React, { useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Contact = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     company: '',
//     phone: '',
//     message: '',
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, email, company, phone, message } = form;

//     if (!name || !email || !company || !phone || !message) {
//       toast.warn("Please fill all fields.");
//       return;
//     }

//     setLoading(true);

//     try {
//       await axios.post('https://threebrotherspromotion.onrender.com/send-contact', form);
//       toast.success('Message sent successfully!');
//       setForm({
//         name: '',
//         email: '',
//         company: '',
//         phone: '',
//         message: '',
//       });
//     } catch (err) {
//       console.error('Error sending message:', err);
//       toast.error('Failed to send message.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center bg-[#FEFEFE45] backdrop-blur pt-[20px] pb-[100px] border-b-[1px] border-[#eeeeeeb0] px-5">
//       <ToastContainer position="bottom-center" autoClose={3000} />
//       <h2 className="text-[38px] font-bold mb-[60px]">Contact Us</h2>
//       <form className="w-full max-w-md space-y-6" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="FULL NAME"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full px-6 py-4 rounded-md bg-white/50 text-center text-gray-800 font-semibold shadow-md outline-none placeholder-gray-500 backdrop-blur-md"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="EMAIL ID"
//           value={form.email}
//           onChange={handleChange}
//           className="w-full px-6 py-4 rounded-md bg-white/50 text-center text-gray-800 font-semibold shadow-md outline-none placeholder-gray-500 backdrop-blur-md"
//         />
//         <input
//           type="text"
//           name="company"
//           placeholder="COMPANY NAME"
//           value={form.company}
//           onChange={handleChange}
//           className="w-full px-6 py-4 rounded-md bg-white/50 text-center text-gray-800 font-semibold shadow-md outline-none placeholder-gray-500 backdrop-blur-md"
//         />
//         <input
//           type="tel"
//           name="phone"
//           placeholder="PHONE NUM."
//           value={form.phone}
//           onChange={handleChange}
//           className="w-full px-6 py-4 rounded-md bg-white/50 text-center text-gray-800 font-semibold shadow-md outline-none placeholder-gray-500 backdrop-blur-md"
//         />
//         <textarea
//           name="message"
//           rows="4"
//           placeholder="ADDITIONAL WORDS TO GIVE US LITTLE BIT INFO"
//           value={form.message}
//           onChange={handleChange}
//           className="w-full px-6 py-4 rounded-md bg-white/50 text-center text-gray-800 font-semibold shadow-md outline-none placeholder-gray-500 backdrop-blur-md resize-none"
//         ></textarea>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-[#FF6B00] text-white font-semibold py-3 rounded-md shadow-md hover:brightness-110 transition duration-300 flex justify-center items-center gap-2"
//         >
//           {loading ? (
//             <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Submit"
//           )}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;


