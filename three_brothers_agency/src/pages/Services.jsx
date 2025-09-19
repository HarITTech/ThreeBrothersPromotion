import React from "react";
import seoImg from '../assests/serviceImages/searchEngineOpt.jpg';
import cyberSecurity from '../assests/serviceImages/cyber security.jpg';
import eCom from '../assests/serviceImages/e-com.jpg';
import googleAds from '../assests/serviceImages/google ads.jpg';
import graphicDesign from '../assests/serviceImages/graphicDesign.jpg';
import photography from '../assests/serviceImages/photography.jpg';
import socialMediaMarketing from '../assests/serviceImages/social media marketing.jpg';
import website from '../assests/serviceImages/website.jpg';
import emailMarketing from '../assests/serviceImages/emailMarketing.jpg';
import mobileAppDev from '../assests/serviceImages/mobileAppDev.jpg';
import influencerMarketing from '../assests/serviceImages/influencerMarketing.jpg';
import contentMarketing from '../assests/serviceImages/contentMarketing.jpg';
import whatsappMarketing from '../assests/serviceImages/whatsappMarketing.jpg';
import affiliateImg from '../assests/serviceImages/A_M.png';
import videoEditing from '../assests/serviceImages/videoMarketing.jpg';
// import { Pencil } from "lucide-react";
// import servicesData from "./servicesData";

const Services = () => {

  // servicesData.js

  const servicesData = [
    {
      id: 1,
      title: "Search engine Optimization (SEO)",
      tagline: "Boost Your Online Visibility - Get Found, Get Clicks, Get Results.",
      image: seoImg, // Update path as per your public folder
      description: `Take your digital presence to the next level with our trusted and reliable SEO services. From keyword optimization to technical SEO, we help your website rank higher on search engines, attract the right audience, and drive quality traffic that converts.

🔍 Whether you're a startup or an established brand, our expert strategies in on-page SEO, link building, and content planning are designed to grow your business—organically.

📈 Start from just ₹7,999/month and experience real, measurable results.`,
      collaboration: ``,
      project1: ``,
    },
    {
      id: 2,
      title: "Social Media Marketing (SMM)",
      tagline: "Build Your Brand Where It Matters – On Social Media.",
      image: socialMediaMarketing,
      description: `Boost your brand’s presence on Instagram and Facebook with our Social Media Marketing packages. From eye-catching reels and engaging stories to strategic Meta Ads and full page management, we offer everything you need to grow online. Plans start at just ₹6,999—perfect for any business looking to connect, engage, and convert.`,
      collaboration: ``,
      project1: ``,
    },
    {
      id: 3,
      title: "Email Marketing",
      tagline: "Connect. Convert. Grow — With Powerful Email Marketing!",
      image: emailMarketing,
      description: `Boost your business with result-driven email marketing solutions.
From targeted campaigns to engaging designs, we help you convert leads into loyal customers.
Partner with us to automate, track, and grow your brand through powerful email strategies.`,
      collaboration: ``,
      project1: ``,
    },
    {
      id: 4,
      title: "Photography",
      tagline: "Capture Moments That Tell Your Story.",
      image: photography,
      description: `Turn memories into masterpieces with our professional photography services. Whether it’s a wedding, birthday, product launch, or a candid moment, we bring creativity and clarity to every shot. Our team specializes in wedding, product, birthday, candid photography, and cinematography—ensuring every frame reflects perfection. Book now to make every moment timeless.`,
      collaboration: ``,
      project1: ``,
    },
    {
      id: 5,
      title: "E-commerce",
      tagline: "Skyrocket Your Sales on Every Marketplace.",
      image: eCom,
      description: `Take your online business to the next level with our expert e-commerce services. From product listing and optimization across all marketplaces to complete order fulfillment, competitor research, and sales strategy—everything you need to grow is in one place. We also help you with daily inventory tracking and business planning, so you stay ahead of trends and maximize profit. Let us handle the backend while you focus on scaling up.`,
      collaboration: ``,
      project1: ``,
    },
    {
      id: 6,
      title: "Website Development",
      tagline: "Build Your Online Presence, One Click at a Time.",
      image: website,
      description: `We design professional websites tailored to your business needs—whether it's a simple static site or a fully dynamic one. Our packages include hosting, domain, updating services, email notifications, and backend integration for dynamic sites. With affordable pricing and complete support. Let us turn your online vision into reality.`,
      collaboration: `Our Last Project Build By Harit Tech Solution`,
      project1: `Sahil Construction Static Website`,
      // project2: ``,
    },
    {
      id: 7,
      title: "Mobile App Development",
      tagline: "Your Idea, Our Code — Apps That Inspire and Perform.",
      image: mobileAppDev,
      description: `Transform your vision into a powerful mobile app with our expert development team.
We craft intuitive, high-performance apps for Android and iOS tailored to your business goals.
From design to deployment, we build solutions that engage users and drive growth.`,
      collaboration: ``,
      project1: ``,
    },
    {
      id: 8,
      title: "Cyber Security",
      tagline: "Your Security, Our Priority.",
      image: cyberSecurity,
      description: `Protect your business from cyber threats with our expert cybersecurity solutions. We offer end-to-end services including network security, vulnerability assessment, phishing protection, malware awareness, and SEIM operations. Whether you’re on Windows or Linux, our team ensures your systems remain secure and your data protected—because your business deserves peace of mind.`,
      collaboration: ``,
      project1: ``,
    },
    {
      id: 9,
      title: "Google Ads",
      tagline: "Maximize Every Click with Strategic Google Ads!",
      image: googleAds,
      description: `Drive instant traffic and quality leads with our expert Google Ads management. From keyword research to strategy, campaign setup, tracking, and optimization — we ensure your ads reach the right audience at the right time. Our goal is simple: get you the best ROI with data-driven ad performance.`,
      collaboration: ``,
      project1: ``,
    },
    {
      id: 10,
      title: "Graphic Design",
      tagline: "Creative Designs That Define Your Brand!",
      image: graphicDesign,
      description: `From logos to brochures, our graphic design services cover everything your brand needs to stand out. Whether it’s social media creatives, business cards, or marketing materials, we bring visual ideas to life that leave a lasting impression and boost your brand identity.`,
      collaboration: ``,
      project1: ``,
    },
    {
      id: 11,
      title: "Influencer Marketing",
      tagline: "Turn Influence into Impact.",
      image: influencerMarketing,
      description: `Boost your brand visibility with our influencer marketing services. We connect you with the right influencers, manage campaigns, and create content that builds trust and drives engagement. Perfect for reaching your audience on platforms like Instagram and YouTube.`,
      collaboration: ``,
      project1: ``,
    },
    {
      id: 12,
      title: "Content Marketing",
      tagline: "Create. Connect. Convert.",
      image: contentMarketing,
      description: `We help your brand grow with smart content that engages and converts. From planning strategies to using videos, paid ads, and trends, we create content that connects with your audience. Our team also tracks performance to ensure continuous improvement and better results.`,
      collaboration: ``,
      project1: ``,
    },
    {
      id: 13,
      title: "WhatsApp Marketing",
      tagline: "Reach Your Audience Where They Are.",
      image: whatsappMarketing,
      description: `Connect with customers instantly using our WhatsApp marketing services. We help you send promotions, updates, and personalized messages with ease. Share rich media and build stronger customer relationships through the world’s most used messaging app.`,
      collaboration: ``,
      project1: ``,
    },
    {
      id: 14,
      title: "Affiliate Marketing",
      tagline: "Earn by Referring - Simple, Scalable, and Profitable.",
      image: affiliateImg, // Replace with actual image path
      description: `Affiliate Marketing is a performance-based strategy where you (the affiliate) earn commissions by promoting other companies' products. Just place affiliate links on your website, and when a customer clicks and makes a purchase, you get paid!

🔗 Whether it's Amazon, Flipkart, Meesho, or more—leverage top platforms to generate passive income.

💸 Ideal for bloggers, influencers, and digital marketers looking to monetize their content. No product handling, no inventory—just smart promotion.

✨ Start affiliate marketing today with Three Brothers Promotion and turn your traffic into revenue.`,
      collaboration: ``,
      project1: ``,
    },
    {
      id: 15,
      title: "Video Editing",
      tagline: "Transform Your Raw Footage into Stunning Visual Stories.",
      image: videoEditing,
      description: `Bring your ideas to life with our expert video editing services. From YouTube video editing and color correction to travel vlogs, corporate videos, and ad campaigns—we handle it all. Whether you need polished post-production for commercials, engaging Instagram reels, or viral YouTube Shorts, our team ensures your content stands out. Get high-quality edits that captivate your audience and elevate your brand’s presence online.`,
      collaboration: ``,
      project1: ``,
    },
    // {
    //   id: 8,
    //   title: "Video Marketing",
    //   tagline: "Drive traffic and boost your brand’s reach.",
    //   image: socialMediaMarketing,
    //   description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s...`,
    // },
    // {
    //   id: 9,
    //   title: "Video Editing",
    //   tagline: "Drive traffic and boost your brand’s reach.",
    //   image: socialMediaMarketing,
    //   description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s...`,
    // },
  ];

  return (
    <section className="text-center bg-[#FEFEFE45] backdrop-blur pt-44 pb-16 relative max-w-full mx-auto border-b-[1px] border-[#eeeeeeb0]">
      {/* <div className="text-center mt-10"> */}

      <div className="relative inline-block text-center mt-10">
        <h1 className="text-[70px] font-helvetica-bold bg-gradient-to-b from-[#4543CC] via-[#955E7F] to-[#FF8800] text-transparent bg-clip-text">
          Our Services
        </h1>
        {/* <div className="absolute -right-[10px] -bottom-[25px] rotate-3 translate-y-[6px]">
            <svg width="215" height="60" viewBox="0 0 150 30" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4543CC" />  
                  <stop offset="100%" stopColor="#FF8800" /> 
                </linearGradient>
              </defs>
              <g transform="scale(1, -1) translate(0, -30)">
                <path
                  d="M5 20 C 50 30, 100 30, 145 20"
                  stroke="url(#underlineGradient)"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>
            </svg>
            <Pencil className="absolute -right-7 bottom-10 w-7 h-7 text-black" />
          </div> */}
      </div>
      {/* </div> */}
      <div className="w-[100%] pt-[140px] h-auto min-h-[460px] bg-hero-pattern bg-cover bg-center bg-no-repeat" >
        <p className=" mx-auto text-[18px] font-helvetica text-[#000000] mb-0 mt-0 w-[90%] ">
          🚀 Whether you're just starting out or scaling up, our creative design and powerful marketing solutions help you stand out. <br />✨ Your brand’s next breakthrough starts with us.
        </p>

        <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-900 shadow-lg transition duration-300 my-[50px]">
          View Our Plans
        </button>
      </div>
      {/* <div className="">
        <div className=" absolute left-1/2 -translate-x-1/2 mx-auto">
          <div
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 grid md:grid-cols-2 gap-6 items-center"
          >
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5b9a5373-9c08-4c53-9723-f84ad6d24f28.png"
              alt="Image"
              className="rounded-lg w-full h-auto max-w-xs mx-auto md:mx-0"
            />
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-1">Social Media Marketing</h3>
              <p className="text-sm text-slate-500 mb-4">Drive traffic and boost your brand’s reach.</p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Drive traffic and boost your brand’s reach.Drive traffic and boost your brand’s reach.Drive traffic and boost your brand’s reach.Drive traffic and boost your brand’s reach.Drive traffic and boost your brand’s reach.Drive traffic and boost your brand’s reach.
                <span className="text-blue-500 font-medium cursor-pointer"> Read more...</span>
              </p>
            </div>
          </div>

        </div>
      </div> */}
      <div className="space-y-10 min-w-6xl w-[90%] mx-auto mt-[10px] mb-[50px]">
        {servicesData.map(({ id, title, tagline, image, description, collaboration, project1}) => (
          <div
            key={id}
            className="bg-[#dee3e936] backdrop-blur border border-[#fff] rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300 p-[30px] grid md:grid-cols-2 items-center"
          >
            <img
              src={image}
              alt={title}
              className="rounded-lg w-full h-auto max-w-[420px] mx-auto md:mx-0"
            />
            <div className="">
              <h3 className="text-[48px] font-helvetica-bold text-[#212640] mb-1">{title}</h3>
              <p className="text-[20px] font-helvetica text-[#212640] mb-4">{tagline}</p>
              <p className="text-[22px] font-helvetica text-[#212640] leading-relaxed">
                {description}
                {/* <span className="text-blue-500 font-medium cursor-pointer"> Read more...</span> */}
              </p>
              <a href="https://harittech.in/" className="text-[22px] font-helvetica-bold no-underline text-[#212640] leading-relaxed">
                {collaboration}
                {/* <span className="text-blue-500 font-medium cursor-pointer"> Read more...</span> */}
              </a>
              <p className="text-[21px] font-helvetica text-[#212640] leading-relaxed">
                {project1}
                {/* <span className="text-blue-500 font-medium cursor-pointer"> Read more...</span> */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

