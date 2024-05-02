'use client'
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { FaArrowUpLong } from "react-icons/fa6";


const QualityService = () => {
   
    return (
        <div className="w-[70%] m-auto">
            <h1 className=' gradient-text-header text-center text-[45px] pt-[3em]'>My Quality Services</h1>
            <p className='text-center text-center text-[#DDDDE0] text-[16px] w-[50%] m-auto py-4'>We put your ideas and thus your wishes
                in the form of a unique web project that inspires you and you customers.</p>
            <div className='py-2'>
                <div className='inline-flex gap-12'>
                    <span className='text-[#fff]'>01</span>
                    <h2 className='text-[#fff]'>Branding Design</h2>
                    <p className='text-[#fff]'> I break down complex user experinece problems to create integritiy focussed
                        solutions
                        that connect billions of people</p>
                        <span ><FaArrowUpLong color='white' className='rotate-45' /></span>
                </div>
            </div>


        </div>
    );
};

export default QualityService;