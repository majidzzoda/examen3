import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ava from '../assets/ava.png'
import coma from '../assets/coma.png'
import rounded from '../assets/rounded.png'
const SwiperWithButtons2 = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="flex lg:flex-col flex-col gap-[40px] lg:w-full mt-10">
            <div className='flex lg:flex-row flex-col gap-[20px] items-center justify-between'>
                <h1 className='text-[10px] lg:text-[46px] font-[900]'>What our clients say</h1>
                <div className="flex gap-[10px]">
                    <button ref={prevRef} className="bg-gray-800 lg:text-[18px] text-[10px] shadow-2xl text-white px-4 py-2 rounded"> Back </button>
                    <button ref={nextRef} className="bg-gray-800 lg:text-[18px] text-[10px] shadow-2xl text-white px-4 py-2 rounded"> Next </button>
                </div>
            </div>
            <Swiper
                className='w-full bg-gray-100 transition-all duration-500 dark:bg-gray-700 rounded-[12px] lg:w-[800px]'
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
                    <article className='flex flex-col items-start gap-[10px]'>
                        <img src={coma} alt="" />
                        <p className='lg:w-[752px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.</p>
                        <div className='flex items-center gap-[10px]'>
                            <img className='lg:w-[72px] w-[40px] h-[40px] lg:h-[72px] rounded-[50%]' src={ava} alt="" />
                            <div className='flex flex-col gap-[5px]'>
                                <b className='text-[12px] lg:text-[18px]'>Courtney Alexander</b>
                                <span className='text-[10px] lg:text-[16px]'>Position, Samsung</span>
                            </div>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide className="shadow-2xl rounded-[12px] p-10 text-start">
                    <article className='flex flex-col items-start gap-[10px]'>
                        <img src={coma} alt="" />
                        <p className='lg:w-[752px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.</p>
                        <div className='flex items-center gap-[10px]'>
                            <img className='lg:w-[72px] w-[40px] h-[40px] lg:h-[72px] rounded-[50%]' src={rounded} alt="" />
                            <div className='flex flex-col gap-[5px]'>
                                <b className='text-[12px] lg:text-[18px]'>Makedonskiy Ismoil</b>
                                <span className='text-[10px] lg:text-[16px]'>Position, Apple</span>
                            </div>
                        </div>
                    </article>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperWithButtons2;
