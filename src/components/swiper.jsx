import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import national from '../assets/client-logo.png'
import features from '../assets/features.png'
import logog from '../assets/logog.png'
import kran from '../assets/kran.png'
import sunset from '../assets/sunset.png'

const SwiperWithButtons = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="flex lg:flex-col flex-col gap-[40px] lg:w-full mt-10">
            <div className='flex lg:flex-row flex-col gap-[20px] items-center justify-between'>
                <h1 className='text-[10px] lg:text-[46px] font-[900]'>Read our clients' case studies</h1>
                <div className="flex gap-[10px]">
                    <button ref={prevRef} className="bg-gray-800 lg:text-[18px] text-[10px] shadow-2xl text-white px-4 py-2 rounded"> Back </button>
                    <button ref={nextRef} className="bg-gray-800 lg:text-[18px] text-[10px] shadow-2xl text-white px-4 py-2 rounded"> Next </button>
                </div>
            </div>
            <Swiper
                className='w-full bg-gray-100 transition-all duration-500 dark:bg-gray-700 rounded-[12px] lg:w-[400px]'
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                onInit={(swiper) => {
                    // Подключаем кнопки к Swiper
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
            >
                <SwiperSlide className="shadow-2xl rounded-[12px] p-10 text-start">
                    <article className='flex flex-col items-start gap-[30px]'>
                        <img src={national} alt="" />
                        <h1 className='text-[14px]'>Charity organisation</h1>
                        <p className='border-t border-[#DADBDD] pt-[20px]'>Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.</p>
                        <img src={features} alt="" />
                    </article>
                </SwiperSlide>
                <SwiperSlide className="shadow-2xl rounded-[12px] p-10 text-start">
                    <article className='flex flex-col items-start lg:gap-[30px] gap-[40px]'>
                        <img className='border p-[5px] rounded-[5px]' src={logog} alt="" />
                        <img className='h-[210px] w-full' src={kran} alt="" />
                    </article>
                </SwiperSlide>
                <SwiperSlide className="shadow-2xl rounded-[12px] p-10 text-start">
                    <article className='flex flex-col items-start gap-[215px] lg:gap-[190px]'>
                        <img className='border p-[5px] rounded-[5px]' src={sunset} alt="" />
                        <img src={features} alt="" />
                    </article>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperWithButtons;
