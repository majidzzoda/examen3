import React from 'react'
import img1 from '../assets/illustration.png'
import play from '../assets/hover.png'
import award from '../assets/award.png'
import ichat from '../assets/ic-chart.png'
import iccc from '../assets/ic-speaker.png'
import icpc from '../assets/ic-computer.png'
import clients from '../assets/Clients.png'
import img2 from '../assets/img1.png'
import orange from '../assets/orange.png'
import red from '../assets/red.png'
import blue from '../assets/blue.png'
import green from '../assets/green.png'
import mark from '../assets/Mark.png'
import sub from '../assets/sub.png'
import FormOne from '../components/formOne'
import question from '../assets/question.png'
import SwiperWithButtons from '../components/swiper'
import mainMan from '../assets/mainMan.png'
import Card from '../components/card'
import third from '../assets/Cross.png'
import SwiperWithButtons2 from '../components/swiper2'
import pic1 from '../assets/pic.png'
import pic2 from '../assets/pic — копия.png'

const Home = () => {
    return (
        <main className='p-[20px] lg:py-[50px] lg:px-[75px] transition-all duration-500 dark:bg-gray-950 bg-gray-200 dark:text-white'>
            <section className='mt-[50px]'>
                <div className='flex flex-col lg:flex-row lg:gap-[0px] gap-[25px] items-start lg:items-center justify-between'>
                    <aside className='flex flex-col gap-[25px]'>
                        <div className='font-[900] text-[30px] lg:text-[72px] lg:w-[810px]'>
                            <h1>Best</h1>
                            <h1 className='text-[#7772F1]'>SEO & Marketing</h1>
                            <h1>Solutions for You</h1>
                        </div>
                        <div className='lg:flex hidden items-center gap-[20px] lg:flex-row flex-col'>
                            <button className='border border-[#FFFFFF] bg-white dark:bg-gray-900 transition-all duration-500 lg:px-[40px] lg:py-[10px] rounded-[4px]'>Get a free analysis</button>
                            <div className='flex items-center gap-[5px]'>
                                <img src={play} alt="" />
                                <b>Play video</b>
                            </div>
                        </div>
                    </aside>
                    <aside>
                        <img src={img1} alt="" />
                    </aside>
                </div>
                <div className='flex lg:items-center mt-[100px] lg:mt-[150px] flex-col lg:flex-row gap-[40px] justify-between'>
                    <div className='flex items-center gap-[10px]'>
                        <img src={ichat} alt="" />
                        <b>SEO Content Strategy</b>
                    </div>
                    <div className='lg:border-x-[2px] flex items-center lg:px-[150px] gap-[10px] border-gray-900'>
                        <img src={iccc} alt="" />
                        <b>Content Marketing</b>
                    </div>
                    <div className='flex items-center gap-[10px]'>
                        <img src={icpc} alt="" />
                        <b>Website & Social Media Marketing</b>
                    </div>
                </div>
            </section>
            <section className='flex items-center mt-[100px] justify-between flex-col lg:flex-row gap-[40px] lg:gap-[0px]'>
                <aside>
                    <p className='lg:w-[630px]'>Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.</p>
                </aside>
                <aside>
                    <img src={award} alt="" />
                </aside>
            </section>
            <section className='mt-[50px] lg:mt-[150px]'>
                <img src={clients} alt="" />
            </section>
            <section className='flex items-center gap-[40px] mt-[50px] lg:mt-[150px] lg:flex-row flex-col-reverse justify-between'>
                <aside className='flex flex-col gap-[40px]'>
                    <h1 className='lg:text-[46px] text-[30px] font-[900]'>Createx Agency </h1>
                    <p className='lg:w-[390px]'>Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.</p>
                    <button className='bg-[#7772F1] lg:w-[161px] py-[10px] lg:h-[44px] rounded-[4px] text-white'>More about us</button>
                </aside>
                <aside>
                    <img src={img2} alt="" />
                </aside>
            </section>
            <section className='flex items-center justify-between my-[50px] lg:flex-row flex-col gap-[40px] lg:my-[150px]'>
                <img src={orange} alt="" />
                <img src={red} alt="" />
                <img src={blue} alt="" />
                <img src={green} alt="" />
            </section>
            <section className='flex flex-col gap-[40px]'>
                <h1 className='text-center font-[900] lg:text-[46px] text-[25px]'>Our services</h1>
                <div className='flex items-center lg:text-[18px] gap-[5px] text-[8px] justify-between'>
                    <button className='border border-[#7772F1] text-[#7772F1] rounded-[4px] px-[10px] lg:w-[246px] lg:h-[46px] py-[10px]'>Social Media</button>
                    <button>SEO</button>
                    <button>Research</button>
                    <button>Content & PR</button>
                    <button>Payed Traffic</button>
                </div>
                <div className='flex items-center lg:flex-row flex-col gap-[40px] justify-between mt-[50px]'>
                    <aside className='flex flex-col gap-[40px]'>
                        <h1 className='text-[28px] font-[700]'>Complete Worflow For Any SEO Professional</h1>
                        <div className='flex flex-col gap-[20px]'>
                            <div className='flex items-center gap-[10px]'>
                                <img src={mark} alt="" />
                                <b>Aenean enim tellus morbi nisl vulputate dictumst.</b>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <img src={mark} alt="" />
                                <b>Nibh sapien volutpat lacus augue.</b>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <img src={mark} alt="" />
                                <b>Vel in amet, placerat adipiscing est pharetra.</b>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <img src={mark} alt="" />
                                <b>Gravida ornare sit in et ut sit sem id.</b>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <img src={mark} alt="" />
                                <b>Ultrices pellentesque dictum enim egestas ac diam.</b>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <img src={mark} alt="" />
                                <b>Sit semper enim senectus integer ut turpis et.</b>
                            </div>
                        </div>
                        <div className='flex items-center gap-[20px]'>
                            <button className='border lg:w-[140px] lg:h-[44px] rounded-[4px] p-[5px] border-[#7772F1] text-[#7772F1]'>Learn more</button>
                            <button className='bg-[#7772F1] text-white lg:w-[166px] p-[5px] lg:h-[44px] rounded-[4px]'>Try SEO toolkit</button>
                        </div>
                    </aside>
                    <aside>
                        <img src={sub} alt="" />
                    </aside>
                </div>
            </section>
            <section>
                <FormOne />
            </section>
            <section className='flex lg:items-center lg:flex-row flex-col gap-[40px] justify-between'>
                <aside className='flex flex-col gap-[40px]'>
                    <h1 className='font-[900] lg:text-[46px] text-[30px]'>Freequently Ask Questions</h1>
                    <div>
                        <div className='flex items-center gap-[10px]'>
                            <span className='text-[#7772F1] text-[20px]'>+</span>
                            <b>Aliquet lectus urna viverra in odio?</b>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <span className='text-[#7772F1] text-[20px]'>+</span>
                            <b>Orci commodo, viverra orci mollis ut euismod?</b>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <span className='text-[#7772F1] text-[20px]'>+</span>
                            <b>Sagittis vitae facilisi rutrum amet mauris quisque vel convallis?</b>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <span className='text-[#7772F1] text-[20px]'>+</span>
                            <b>In id dolor quis nunc, urna hendrerit pharetra?</b>
                        </div>
                    </div>
                    <button className='bg-[#7772F1] lg:w-[185px] lg:h-[44px] p-[5px] rounded-[4px] text-white'>Discover more</button>
                </aside>
                <aside>
                    <img src={question} alt="" />
                </aside>
            </section>
            <section>
                <SwiperWithButtons />
                <div className='flex items-center gap-[20px] lg:flex-row flex-col text-center mt-[50px] justify-center'>
                    <h1 className='text-[28px] font-[700]'>Explore more case studies</h1>
                    <button className='bg-[#7772F1] lg:w-[185px] lg:h-[44px] p-[5px] rounded-[4px] text-white'>View all case studies</button>
                </div>
            </section>
            <section>
                <h1 className='font-[900] lg:text-[46px] text-[30px] text-center my-[50px] lg:my-[150px]'>Our benefits</h1>
                <div className='flex items-start lg:items-center justify-evenly lg:flex-row flex-col gap-[40px]'>
                    <aside className='flex lg:w-[390px] bg-gray-200 dark:bg-gray-900 transition-all duration-500 shadow-2xl p-[25px] rounded-[12px] flex-col gap-[20px] items-center text-center'>
                        <img src={iccc} alt="" />
                        <b>Social Advertising Experts</b>
                        <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
                    </aside>
                    <aside>
                        <img src={mainMan} alt="" />
                    </aside>
                </div>
            </section>
            <section className='my-[50px] lg:my-[150px]'>
                <h1 className='font-[900] lg:text-[46px] text-[25px] text-center'>Flexible pricing plans</h1>
                <div className='flex flex-col lg:flex-row gap-[5px] mt-[20px] justify-center'>
                    <button className='bg-[#7772F1] text-white lg:w-[210px] lg:h-[46px] rounded-[40px] px-[20px] py-[5px]'>Monthly</button>
                    <button className='border lg:ml-[-40px] border-[#7772F1] text-[#7772F1] lg:w-[210px] lg:h-[46px] rounded-[40px] px-[20px] py-[5px]'>
                        <b>Yearly</b>
                        <b className='text-[12px]'> -12% Off</b>
                    </button>
                </div>
                <div className='flex items-center gap-[40px] justify-evenly my-[50px] flex-col lg:flex-row'>
                    <Card textColor="#7772F1" btnColor="#7772F1" color="whitesmoke" first={"Basic"} second={"$24"} third={third} fourth={third} />
                    <Card textColor="#146159" btnColor='white' bgBtn="#7772F1" color="#1E212C" third={mark} fourth={third} />
                    <Card textColor="#7772F1" btnColor="#7772F1" color="whitesmoke" third={mark} fourth={mark} />
                </div>
            </section>
            <section>
                <SwiperWithButtons2 />
            </section>
            <section className='flex my-[50px] flex-col lg:flex-row gap-[40px] lg:my-[150px] items-start justify-between'>
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

export default Home