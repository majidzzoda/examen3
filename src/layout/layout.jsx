import React, { useState } from 'react'
import Switcher from '../components/switcher'
import useDarkSide from '../config/useDarkMode'
import { Link, NavLink, Outlet } from 'react-router-dom'
import socials from '../assets/socials.png'
import phone from '../assets/iPhone.png'
import mail from '../assets/Mail.png'
import awards from '../assets/awards.png'
import sideBar from '../assets/SideBar.png'


const Layout = () => {
    const [theme, toggleTheme] = useDarkSide();
    const [modal, setModal] = useState(false)
    function showModal() {
        setModal(true);
        console.log(1);
    }
    return (
        <div>
            <div className={`fixed inset-0 mt-[70px] z-50 ${modal ? '' : 'pointer-events-none'}`}>
                <div className={`absolute inset-0 bg-black/30 backdrop-blur-[5px] transition-opacity duration-300 ${modal ? 'opacity-100' : 'opacity-0'}`} onClick={() => setModal(false)}></div>
                <div className={`absolute right-0 top-0 h-full w-[250px] transition-all duration-500 dark:bg-gray-950 bg-white border-l-[2px] border-[#262626] shadow-lg p-[20px] flex flex-col gap-[15px] ${modal ? 'translate-x-0' : 'translate-x-full'}`} >
                    <NavLink to={"/"} onClick={() => setModal(false)} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black dark:text-white transition-all duration-500'}>Home</NavLink>
                    <NavLink to={"services"} onClick={() => setModal(false)} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black transition-all duration-500 dark:text-white'}>Services</NavLink>
                    <NavLink to={"about"} onClick={() => setModal(false)} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black transition-all duration-500 dark:text-white'}>About Us</NavLink>
                    <NavLink to={"todo"} onClick={() => setModal(false)} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black transition-all duration-500 dark:text-white'}>To Do List</NavLink>
                    <button onClick={() => setModal(false)} className="mt-auto  text-left border-[2px] font-bold text-red-500 bg-white border-red-500 p-[10px] rounded-[10px]" > Close  </button>
                </div>
            </div>
            <header className='dark:bg-gray-900 fixed w-full z-50 shadow-2xl flex items-center p-[20px] lg:py-[25px] justify-between lg:px-[75px] dark:text-white bg-gray-200 transition-all duration-500'>
                <div className='flex items-center gap-[50px]'>
                    <div className='flex items-center gap-[10px]'>
                        <Switcher toggleTheme={toggleTheme} />
                        <div className='flex text-[20px] gap-[5px] items-center'>
                            <h1>CREATE</h1>
                            <span className='text-[#7772F1] font-black'>X</span>
                        </div>
                    </div>
                    <ul className='lg:flex hidden items-center gap-[20px]'>
                        <Link to={"/"}>
                            <li>Home</li>
                        </Link>
                        <Link to={"services"}>
                            <li>Services</li>
                        </Link>
                        <Link to={"about"}>
                            <li>About Us</li>
                        </Link>
                        <Link to={"todo"}>
                            <li>To Do List</li>
                        </Link>
                    </ul>
                </div>
                <img onClick={() => showModal()} src={sideBar} className='lg:hidden block transition-all duration-500 bg-gray-300 dark:bg-gray-950 p-[5px] rounded-[5px]' alt="" />
                <button className='bg-[#7772F1] lg:block hidden lg:w-[199px] text-[10px] lg:text-[18px] py-[5px] px-[10px] lg:h-[52px] rounded-[4px] text-white'>Talk to a human</button>
            </header>
            <Outlet />
            <footer className='bg-gray-200 transition-all duration-500 dark:text-white dark:bg-gray-950 p-[20px] lg:px-[75px] lg:py-[25px]'>
                <div className='flex border-b border-[#1E212C] dark:border-[#DADBDD] transition-all duration-500 pb-[25px] lg:gap-[0px] gap-[30px] flex-wrap justify-between'>
                    <article className='flex items-start flex-col gap-[10px]'>
                        <div className='flex text-[20px] gap-[5px] items-center'>
                            <h1>CREATE</h1>
                            <span className='text-[#7772F1] font-black'>X</span>
                        </div>
                        <p className='lg:w-[281px]'>Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.</p>
                        <img src={socials} alt="" />
                    </article>
                    <article className='flex flex-col gap-[10px]'>
                        <b>COMPANY</b>
                        <span>About Us</span>
                        <span>Case Studies</span>
                        <span>Blog</span>
                        <span>Careers</span>
                        <span>Contacts</span>
                    </article>
                    <article className='flex flex-col gap-[10px]'>
                        <b>SERVICES</b>
                        <span>Social Media</span>
                        <span>SEO</span>
                        <span>Research</span>
                        <span>Content & PR</span>
                        <span>Payed Traffic</span>
                    </article>
                    <article className='flex flex-col gap-[10px]'>
                        <b>CONTACT US</b>
                        <div className='flex items-center gap-[5px]'>
                            <img src={phone} alt="" />
                            <span>(405) 555-0128</span>
                        </div>
                        <div className='flex items-center gap-[5px]'>
                            <img src={mail} alt="" />
                            <span>hello@createx.com</span>
                        </div>
                    </article>
                    <article className='flex flex-col gap-[10px]'>
                        <b>SIGN UP TO OUR NEWSLETTER</b>
                        <div className='flex flex-col items-start gap-[5px]'>
                            <input className='bg-[#FFFFFF33] lg:w-[286px] lg:h-[36px] rounded-[4px] border border-[#FFFFFF33] px-[10px]' type="text" />
                            <span className='text-[10px] lg:w-[286px]'>*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</span>
                        </div>
                    </article>
                </div>
                <img className='pt-[25px]' src={awards} alt="" />
            </footer>
        </div>
    )
}

export default Layout