import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

// Import all consultancy-related images
import consultancy1 from '../assets/jj.jpg';
import consultancy2 from '../assets/cd.jpg';
import consultancy3 from '../assets/ef.jpg';
import consultancy4 from '../assets/gh.jpg';
import consultancy5 from '../assets/ij.jpg';
import consultancy6 from '../assets/can.jpg';

// Define the images in an array
const images = [
  { src: consultancy1, alt: 'Experienced Consultancy Team' },
  { src: consultancy2, alt: 'Visa Application Assistance' },
  { src: consultancy3, alt: 'Successful Student Visa Cases' },
  { src: consultancy4, alt: 'Comprehensive Financial Guidance' },
  { src: consultancy5, alt: 'Tailored Visa Interview Preparation' },
  { src: consultancy6, alt: 'Your Partner in Visa Success' },
];

export default function VisaConsultancySlider() {
  return (
    <div className="w-full relative z-[0] ">
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]} // Only include the Autoplay module
        className="swiper-container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[300px] sm:h-[620px] md:h-[640px] 2xl:h-[900px] object-cover  object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
