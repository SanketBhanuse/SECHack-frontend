"use client"
import React from 'react'
// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Data for slides
const slidesData = [
    { id: 1, title: "Slide 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisquam, atque." },
    { id: 2, title: "Slide 2", description: "Aliquam facilisis justo nec dolor commodo, non venenatis nulla pretium." },
    { id: 3, title: "Slide 3", description: "Suspendisse ut nulla id lacus cursus volutpat. Nam venenatis sapien sed." },
    { id: 4, title: "Slide 4", description: "Vestibulum nec felis at odio porttitor bibendum a nec nunc." },
    { id: 5, title: "Slide 5", description: "Curabitur consectetur libero ut lacus molestie, nec pharetra eros elementum." },
    { id: 6, title: "Slide 6", description: "Aenean suscipit magna nec justo euismod, a dapibus dolor condimentum." },
    { id: 7, title: "Slide 7", description: "Mauris vitae felis sit amet massa viverra ultrices. Integer ut metus." },
    { id: 8, title: "Slide 8", description: "Donec sed orci at turpis tincidunt ullamcorper eget eu felis." }
];

const Slider = () => {
    return (
        <div className='bg-[#7895ae8f] p-5 md:p-10'>
            <div className="header">
                <div className="heading text-[28px] text-center mb-5 md:mb-10 font-extrabold text-[#1E3D58] md:text-[32px]">What Our Users Are Saying</div>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={4}
                // navigation
                // pagination={{ clickable: true }}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 1 },  // Mobile: 1 slide
                    640: { slidesPerView: 2 },  // Tablet: 2 slides
                    1024: { slidesPerView: 3 }, // Small laptop: 3 slides
                    1280: { slidesPerView: 4 }  // Desktop: 4 slides
                }}
                speed={3000}
                freeMode={true}
            >
                {slidesData.map((slide) => (
                    <SwiperSlide key={slide.id} >
                        <div className='p-5 bg-[#E8EEF1] rounded-md text-center shadow-md min-h-[140px] hover:scale-105 cursor-pointer'>
                            <h3 className="text-lg font-bold mb-3 text-[#1E3D58]">{slide.title}</h3>
                            <p className="text-sm text-gray-700">{slide.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider;
