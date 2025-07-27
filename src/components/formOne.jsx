import React from 'react'
import girl from '../assets/girl.png'
const FormOne = () => {
    return (
        <div className='flex lg:flex-row flex-col-reverse gap-[40px] lg:items-center justify-between lg:my-[150px] my-[50px]'>
            <aside>
                <img src={girl} alt="" />
            </aside>
            <aside className='flex flex-col gap-[30px]'>
                <h1 className='font-[900] lg:text-[46px] text-[30px]'>Get a Free SEO Analysis!</h1>
                <div className='lg:w-[600px] gap-[40px] flex flex-col lg:flex-row lg:flex-wrap'>
                    <input type="text" placeholder='Your name' className='lg:w-[280px] bg-gray-300 dark:bg-[#FFFFFF33] p-[10px] transition-all duration-500 rounded-[4px] border border-[#FFFFFF1F]' />
                    <input type="text" placeholder='Your working email' className='lg:w-[280px] bg-gray-300 dark:bg-[#FFFFFF33] transition-all duration-500 p-[10px] rounded-[4px] border border-[#FFFFFF1F]' />
                    <input type="text" placeholder='http://yoursite.com' className='lg:w-[600px] bg-gray-300 dark:bg-[#FFFFFF33] transition-all duration-500 p-[10px] rounded-[4px] border border-[#FFFFFF1F]' />
                </div>
                <div className='flex flex-col lg:flex-row lg:items-center gap-[40px] justify-between'>
                    <div className='flex items-start gap-[10px]'>
                        <input className='mt-[6px]' type="checkbox" />
                        <b className='lg:w-[287px] text-[14px]'>I agree to receive communications from Createx SEO Agency</b>
                    </div>
                    <button className='bg-[#7772F1] p-[5px] lg:w-[220px] lg:h-[52px] text-white rounded-[4px]'>Get a free analysis</button>
                </div>
            </aside>
        </div>
    )
}

export default FormOne