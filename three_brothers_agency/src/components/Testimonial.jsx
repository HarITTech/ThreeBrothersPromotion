import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    image:
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7583832f-ef26-4878-8753-41eb9c69ce97.png',
    alt: 'Happy smiling client portrait in formal attire with warm background',
    text:
      '"The team exceeded our expectations, delivering a stunning design that truly represents our brand."',
    name: 'Emily Carter',
    title: 'CEO, Rhett Co.',
    platform: 'Webflow',
    stars: 5,
  },
  {
    image:
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7583832f-ef26-4878-8753-41eb9c69ce97.png',
    alt: 'Happy smiling client portrait in formal attire with warm background',
    text:
      '"The team exceeded our expectations, delivering a stunning design that truly represents our brand."',
    name: 'Emily Carter',
    title: 'CEO, Rhett Co.',
    platform: 'Webflow',
    stars: 4,
  },
  {
    image:
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7583832f-ef26-4878-8753-41eb9c69ce97.png',
    alt: 'Happy smiling client portrait in formal attire with warm background',
    text:
      '"The team exceeded our expectations, delivering a stunning design that truly represents our brand."',
    name: 'Emily Carter',
    title: 'CEO, Rhett Co.',
    platform: 'Webflow',
    stars: 3,
  },
  {
    image:
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7583832f-ef26-4878-8753-41eb9c69ce97.png',
    alt: 'Happy smiling client portrait in formal attire with warm background',
    text:
      '"The team exceeded our expectations, delivering a stunning design that truly represents our brand."',
    name: 'Emily Carter',
    title: 'CEO, Rhett Co.',
    platform: 'Webflow',
    stars: 4,
  },
  // Add more testimonials here if needed
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const { image, alt, text, name, title, platform, stars } = testimonials[current];

  return (
    <div className='bg-[#FEFEFE45] backdrop-blur max-w-full pb-[40px]'>
      <section className="mb-24 mx-auto px-6 max-w-[90%]">
        <h3 className="section-heading text-center mb-12 text-[38px] font-helvetica">Testimonial</h3>
        <div className="bg-[#ff6b0237] rounded-xl px-[60px] pt-[60px] pb-[40px] content-center items-center border border-[#ede6e0] shadow-lg justify-center flex flex-col">
          <div className='relative grid grid-cols-1 sm:grid-cols-2 bg-[#fff] max-w-[90%] testimonial-slider gap-8 items-center justify-center content-center rounded-2xl'>
            {/* Image */}
            <div className="bg-slate-400 rounded-2xl m-[1px] content-center items-center mxa-w-1/3 sm:w-full aspect-square" aria-label="Testimonial client portrait" role="img">
              <img
                src={image}
                alt={alt}
                className="rounded-2xl object-cover w-full h-full"
                onError={(e) => {
                  e.target.style.backgroundColor = '#94a3b8';
                  e.target.src = '';
                }}
              />
            </div>

            {/* Text */}
            <div className="testimonial-text md:w-2/3 lg:w-2/3 sm:w-full px-6 pb-4 ">
              <p className="text-[23px] italic leading-relaxed text-slate-900">{text}</p>
              <footer className="mt-6">
                <p className="font-helvetica-bold text-[15px]">{name}</p>
                <p className="text-slate-600 text-[15px]">{title}</p>
                <div className="flex items-center stars mt-1" aria-label="Five star rating">
                  {[...Array(stars)].map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="h-5 w-5 text-yellow-400"
                    >
                      <path d="M9.049 2.927C9.469 1.94 10.531 1.94 10.951 2.927l1.286 3.918a1 1 0 00.95.69h4.141c1.013 0 1.43 1.299.596 1.928l-3.356 2.978a1 1 0 00-.287 1.11l1.286 3.917c.42.987-.715 1.8-1.46 1.183l-3.356-2.978a1 1 0 00-1.174 0l-3.356 2.978c-.745.617-1.88-.196-1.46-1.183l1.286-3.917a1 1 0 00-.287-1.11L2.02 9.463c-.835-.63-.417-1.928.596-1.928h4.141a1 1 0 00.95-.69l1.286-3.918z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-2 text-sm font-light text-slate-500">{platform}</p>
              </footer>
            </div>

            {/* Buttons */}
            <button
              aria-label="Previous testimonial"
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-custom-4px text-[#FF6B00] font-helvetica-bold transition duration-300 hover:brightness-150 hover:drop-shadow-[0_0_6px_#FF6B00] hover:bg-[#FF6B00] hover:text-[#fff] hover:cursor-pointer"
              onClick={prevSlide}
            >
              {'<'}
            </button>
            <button
              aria-label="Next testimonial"
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-custom-4px text-[#FF6B00] font-helvetica-bold transition duration-300 hover:brightness-150 hover:drop-shadow-[0_0_6px_#FF6B00] hover:bg-[#FF6B00] hover:text-[#fff] hover:cursor-pointer"
              onClick={nextSlide}
            >
              {'>'}
            </button>
          </div>
          {/* Dots */}
        <div className="dots mt-6 flex justify-center space-x-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`dot w-3 h-3 rounded-full ${current === idx ? 'bg-orange-500' : 'bg-[#7f7f7f]'}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Testimonial slide ${idx + 1}`}
            ></button>
          ))}
        </div>

        <div className="text-center mt-6">
          <a href="#" className="text-orange-500 underline font-semibold hover:text-orange-700">
            Explore More..
          </a>
        </div>
        </div>

      </section>
    </div>
  );
};

export default Testimonial;
