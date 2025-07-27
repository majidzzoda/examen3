import React from 'react'
import phone from '../assets/iPhone.png'
import sub from '../assets/sub.png'
import sub2 from '../assets/sub2.png'
import sub3 from '../assets/sub3.png'
import sub4 from '../assets/sub4.png'
import sub5 from '../assets/sub5.png'
import FormOne from '../components/formOne'
import mag from '../assets/mag.png'
import sCase from '../assets/case.png'
import wbsite from '../assets/wbsite.png'
import startup from '../assets/startup.png'
import SwiperWithButtons from '../components/swiper'
import clients from '../assets/Clients.png'
import pic1 from '../assets/pic.png'
import pic2 from '../assets/pic — копия.png'

const Services = () => {
    return (
        <main className='pt-[100px] px-[20px] lg:px-[75px] bg-gray-200 dark:bg-gray-950 dark:text-white transition-all duration-500'>
            <section className='flex flex-col gap-[30px] text-center items-center justify-center'>
                <h1 className='font-[900] text-[30px] lg:text-[72px]'>Our services</h1>
                <p className='lg:w-[810px] lg:text-[20px]'>We offer more than services. Our agency provides solutions to your top-priority concerns, involving customer targeting, email performance and sales growth. If there is no existing solution readily available, we create one, specifically to suit your business.</p>
                <div className='flex items-center gap-[20px]'>
                    <button className='border border-[#FFFFFF] lg:w-[154px] lg:h-[52px] dark:bg-gray-900 transition-all duration-500 rounded-[4px] bg-white'>Start now</button>
                    <button className='flex items-center gap-[10px]'>
                        <img src={phone} alt="" />
                        <div className='flex flex-col items-start gap-[5px]'>
                            <b>Call us</b>
                            <span>(405) 555-0128</span>
                        </div>
                    </button>
                </div>
            </section>
            <section className='flex items-center justify-between mt-[100px] gap-[40px] flex-col lg:flex-row'>
                <aside className='flex flex-col gap-[30px]'>
                    <h1 className='font-[900] text-[32px]'>Social Media Marketing</h1>
                    <p className='lg:w-[575px]'>Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. </p>
                    <div className='flex items-center gap-[20px]'>
                        <button className='border lg:w-[140px] lg:h-[44px] rounded-[4px] p-[5px] border-[#7772F1] text-[#7772F1]'>Learn more</button>
                        <button className='bg-[#7772F1] text-white lg:w-[166px] p-[5px] lg:h-[44px] rounded-[4px]'>Try SEO toolkit</button>
                    </div>
                </aside>
                <aside>
                    <img src={sub} alt="" />
                </aside>
            </section>
            <section className='flex items-center justify-between mt-[100px] gap-[40px] flex-col lg:flex-row'>
                <aside>
                    <img src={sub2} alt="" />
                </aside>
                <aside className='flex flex-col gap-[30px]'>
                    <h1 className='font-[900] text-[32px]'>Search Engine Optimization</h1>
                    <p className='lg:w-[575px]'>Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. </p>
                    <div className='flex items-center gap-[20px]'>
                        <button className='border lg:w-[140px] lg:h-[44px] rounded-[4px] p-[5px] border-[#7772F1] text-[#7772F1]'>Learn more</button>
                        <button className='bg-[#7772F1] text-white lg:w-[166px] p-[5px] lg:h-[44px] rounded-[4px]'>Try SEO toolkit</button>
                    </div>
                </aside>
            </section>
            <section className='flex items-center justify-between mt-[100px] gap-[40px] flex-col lg:flex-row'>
                <aside className='flex flex-col gap-[30px]'>
                    <h1 className='font-[900] text-[32px]'>Research Service</h1>
                    <p className='lg:w-[575px]'>Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. </p>
                    <div className='flex items-center gap-[20px]'>
                        <button className='border lg:w-[140px] lg:h-[44px] rounded-[4px] p-[5px] border-[#7772F1] text-[#7772F1]'>Learn more</button>
                        <button className='bg-[#7772F1] text-white lg:w-[166px] p-[5px] lg:h-[44px] rounded-[4px]'>Try SEO toolkit</button>
                    </div>
                </aside>
                <aside>
                    <img src={sub3} alt="" />
                </aside>
            </section>
            <section className='flex items-center justify-between mt-[100px] gap-[40px] flex-col lg:flex-row'>
                <aside>
                    <img src={sub4} alt="" />
                </aside>
                <aside className='flex flex-col gap-[30px]'>
                    <h1 className='font-[900] text-[32px]'>Content & PR Service</h1>
                    <p className='lg:w-[575px]'>Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. </p>
                    <div className='flex items-center gap-[20px]'>
                        <button className='border lg:w-[140px] lg:h-[44px] rounded-[4px] p-[5px] border-[#7772F1] text-[#7772F1]'>Learn more</button>
                        <button className='bg-[#7772F1] text-white lg:w-[166px] p-[5px] lg:h-[44px] rounded-[4px]'>Try SEO toolkit</button>
                    </div>
                </aside>
            </section>
            <section className='flex items-center justify-between mt-[100px] gap-[40px] flex-col lg:flex-row'>
                <aside className='flex flex-col gap-[30px]'>
                    <h1 className='font-[900] text-[32px]'>Payed Traffic Management</h1>
                    <p className='lg:w-[575px]'>Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. </p>
                    <div className='flex items-center gap-[20px]'>
                        <button className='border lg:w-[140px] lg:h-[44px] rounded-[4px] p-[5px] border-[#7772F1] text-[#7772F1]'>Learn more</button>
                        <button className='bg-[#7772F1] text-white lg:w-[166px] p-[5px] lg:h-[44px] rounded-[4px]'>Try SEO toolkit</button>
                    </div>
                </aside>
                <aside>
                    <img src={sub5} alt="" />
                </aside>
            </section>
            <section className='pb-[100px]'>
                <FormOne />
            </section>
            <section>
                <h1 className='font-[900] lg:text-[46px] text-[30px] text-center'>Markets in which we operate</h1>
                <div className='flex items-center justify-between flex-col lg:flex-row gap-[30px] py-[100px]'>
                    <article className='flex flex-col items-center gap-[10px] text-center'>
                        <img src={mag} alt="" />
                        <b className='font-[700] text-[20px]'>E-commerce Websites</b>
                        <p className='text-[16px]'>Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. </p>
                    </article>
                    <article className='flex flex-col items-center gap-[10px] text-center'>
                        <img src={wbsite} alt="" />
                        <b className='font-[700] text-[20px]'>Content-rich Websites</b>
                        <p className='text-[16px]'>Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. </p>
                    </article>
                    <article className='flex flex-col items-center gap-[10px] text-center'>
                        <img src={sCase} alt="" />
                        <b className='font-[700] text-[20px]'>B2B /B2C Services</b>
                        <p className='text-[16px]'>Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. </p>
                    </article>
                    <article className='flex flex-col items-center gap-[10px] text-center'>
                        <img src={startup} alt="" />
                        <b className='font-[700] text-[20px]'>Startup Projects</b>
                        <p className='text-[16px]'>Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. </p>
                    </article>
                </div>
            </section>
            <section>
                <SwiperWithButtons />
                <div className='flex items-center gap-[20px] lg:flex-row flex-col text-center mt-[50px] justify-center'>
                    <h1 className='text-[28px] font-[700]'>Explore more case studies</h1>
                    <button className='bg-[#7772F1] lg:w-[185px] lg:h-[44px] p-[5px] rounded-[4px] text-white'>View all case studies</button>
                </div>
            </section>
            <section className='mt-[50px] lg:mt-[150px]'>
                <img src={clients} alt="" />
            </section>
            <section className='flex py-[50px] flex-col lg:flex-row gap-[40px] lg:py-[150px] items-start justify-between'>
                <div className='lg:w-[285px] flex flex-col gap-[20px] items-start'>
                    <h1 className='lg:text-[46px] text-[30px] font-[900]'>Latest news</h1>
                    <p className='text-[20px]'>Check more posts in our blog for featured news and advertising insights</p>
                    <button className='lg:w-[180px] lg:h-[52px] text-white rounded-[4px] p-[5px] bg-[#7772F1]'>Go to blog</button>
                </div>
                <div className='flex flex-col justify-between lg:h-[507px] lg:w-[390px]'>
                    <div>
                        <img src={pic1} alt="" />
                        <div className='flex items-center gap-[10px]'>
                            <span className='text-[10px]'>
                                SEO
                            </span>
                            <span>
                                July 5,2020
                            </span>
                            <span>
                                By Diane McCoy
                            </span>
                        </div>
                    </div>
                    <b>Read more</b>
                </div>
                <div className='flex flex-col justify-between lg:h-[507px] lg:w-[390px]'>
                    <div>
                        <img src={pic2} alt="" />
                        <div className='flex items-center gap-[10px]'>
                            <span className='text-[10px]'>
                                Marketing
                            </span>
                            <span>
                                July 2,2020
                            </span>
                            <span>
                                By Diane McCoy
                            </span>
                        </div>
                    </div>
                    <b>The Basics of Blogging Search Engine Optimization.</b>
                    <p>Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit...</p>
                    <b>Read more</b>
                </div>
            </section>
        </main>
    )
}

export default Services