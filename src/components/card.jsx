import React from 'react'
import mark from '../assets/Mark.png'
const Card = ({ first, second, third, fourth, color, textColor, btnColor, bgBtn }) => {
    return (
        <article style={{ backgroundColor: color }} className='border p-[30px] transition-all duration-500 border-[#7772F166] rounded-[4px] lg:w-[350px] flex flex-col gap-[20px] lg:items-center justify-around lg:h-[500px]'>
            <div className='flex flex-col gap-[10px] text-center'>
                <h1 className='text-[28px] font-[700]'>{first}</h1>
                <div className='flex items-start gap-[5px]'>
                    <b style={{ color: textColor }} className='text-[46px] font-[900]'>{second}</b>
                    <b style={{ color: textColor }} className='mt-[10px]'>/mon</b>
                </div>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <div className='flex items-center gap-[5px]'>
                    <img src={mark} alt="" />
                    <b style={{ color: btnColor }}>Advanced Analytics</b>
                </div>
                <div className='flex items-center gap-[5px]'>
                    <img src={mark} alt="" />
                    <b style={{ color: btnColor }}>Change Management</b>
                </div>
                <div className='flex items-center gap-[5px]'>
                    <img src={mark} alt="" />
                    <b style={{ color: btnColor }}>Corporate Finance</b>
                </div>
                <div className='flex items-center gap-[5px]'>
                    <img src={mark} alt="" />
                    <b style={{ color: btnColor }}>One Way Link Building</b>
                </div>
                <div className='flex items-center gap-[5px]'>
                    <img src={mark} alt="" />
                    <b style={{ color: btnColor }}>Social Media Marketing</b>
                </div>
                <div className='flex items-center gap-[5px]'>
                    <img src={third} alt="" />
                    <b style={{ color: btnColor }}>Strategy & Marketing</b>
                </div>
                <div className='flex items-center gap-[5px]'>
                    <img src={fourth} alt="" />
                    <b style={{ color: btnColor }}>Information Technology</b>
                </div>
            </div>
            <button style={{ color: btnColor, backgroundColor: bgBtn }} className='border border-[#7772F1] lg:w-[146px] lg:h-[44px] rounded-[4px] p-[5px]'>Choose plan</button>
        </article>
    )
}

export default Card