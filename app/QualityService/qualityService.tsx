'use client'
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { useState } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";


const QualityService = () => {
    // const [customBgColor, setCustomBgColor] = useState(null);

    return (
        <div className="w-[70%] m-auto  ">
            <div className='customBgColor'>
                <h1 className=' gradient-text-header text-center text-[45px] pt-[3em]'>My Quality Services</h1>
                <p className='text-center text-center text-[#DDDDE0] text-[16px] w-[50%] m-auto py-4'>We put your ideas and thus your wishes
                    in the form of a unique web project that inspires you and you customers.</p>
                <div className='inline-flex gap-12  hover:bg-[#8750f7] px-12 py-6 sectionBg'>
                    <span className='text-[#fff] text-[20px] font-semibold pt-2'>01</span>
                    <h2 className='text-[#dddddd] text-[30px] font-semibold'>Branding Design</h2>
                    <p className='text-[#dddddd] w-[60%]  tracking-wide px-[8em] leading-[28px]'> I break down complex user experinece problems to create integritiy focussed
                        solutions
                        that connect billions of people</p>
                    <span className='mt-4'> <FaArrowUpLong color='white' className='rotate-45' /> </span>

                </div>
                </div>
                <hr color='black' />
                <div className=''>
                    <div className='inline-flex gap-12  hover:bg-[#8750f7] px-12 py-6'>
                        <span className='text-[#fff] text-[20px] font-semibold pt-2'>02</span>
                        <h2 className='text-[#dddddd] text-[30px] font-semibold'>Data Analyst</h2>
                        <p className='text-[#dddddd] w-[60%]  tracking-wide px-[8em] leading-[28px]'> I break down complex user experinece problems to create integritiy focussed
                            solutions
                            that connect billions of people</p>
                        <span className='mt-4'><FaArrowUpLong color='white' className='rotate-45' /></span>
                    </div>

                </div>
                <hr color='black' />
                <div className=''>
                    <div className='inline-flex gap-12  hover:bg-[#8750f7] px-12 py-6'>
                        <span className='text-[#fff] text-[20px] font-semibold pt-2'>03</span>
                        <h2 className='text-[#dddddd] text-[30px] font-semibold'>Data Visualization </h2>
                        <p className='text-[#dddddd] w-[60%]  tracking-wide px-[8em] leading-[28px]'> I break down complex user experinece problems to create integritiy focussed
                            solutions
                            that connect billions of people</p>
                        <span className='mt-4'><FaArrowUpLong color='white' className='rotate-45' /></span>
                    </div>

                </div>
                <hr color='black' />
                <div className=''>
                    <div className='inline-flex gap-12  hover:bg-[#8750f7] px-12 py-6'>
                        <span className='text-[#fff] text-[20px] font-semibold pt-2'>04</span>
                        <h2 className='text-[#dddddd] text-[30px] font-semibold'>Software Development </h2>
                        <p className='text-[#dddddd] w-[60%]  tracking-wide px-[8em] leading-[28px]'> I break down complex user experinece problems to create integritiy focussed
                            solutions
                            that connect billions of people</p>
                        <span className='mt-4'><FaArrowUpLong color='white' className='rotate-45' /></span>
                    </div>

                </div>


    


        </div>
    );
};

export default QualityService;