import { FaChevronRight } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import Image from 'next/image'
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { BiSolidMessage } from "react-icons/bi";
import { useState } from "react";
const InformationImages = () => {
  
    return (
        <>
            <div className="flex gap-12">
                <div className="w-[60%] ">
                    <p className="pt-[8rem] text-[1.5rem] text-[#14AEB9] uppercase font-semibold tracking-normal animate__animated animate__slideInLeft">power washing services near me</p>
                    <p className="pt-[.6rem] text-[2rem] text-[#fff] capitalize font-semibold tracking-normal">Exterior Cleaning that <span className="text-[#14AEB9] pr-2">transforms</span>your property</p>
                    <p className="pt-[.2rem] text-[2rem] text-[#F8FFFB] capitalize font-semibold tracking-normal"> We'll <span className="text-[#ffff] pr-2 uppercase text-[2.2rem]">instantly </span>restore the look of your home!</p>
                    <div className="flex gap-4 pt-[2rem]">
                        <button className="relative overflow-hidden bg-[#BCAB10] text-[#111] font-bold py-2 px-4 text-[18px] font-sans capitalize rounded transition-all duration-500 hover:bg-blue-700 hover:text-[#fff]">
                            <span className="flex items-center">
                                <span className="mr-2">get a fast contact</span>
                                <FaChevronRight size={14} />
                            </span>
                            <span className="absolute top-0 left-0 bg-blue-700 h-full w-0 transition-all duration-500 hover:w-full"></span>
                        </button>
                        <button className="border-solid border-2 border-[#BCAB10] hover:bg-blue-700 hover:border-0   text-[#fff] font-bold py-2 px-4 text-[18px] font-sans  capitalize rounded border-[#BCAB10]">
                            <span className="flex "> 555 555-1234 <span> <FaPhoneFlip size={24} className=" pl-2 mt-[.1rem]" /></span> </span>
                        </button>
                    </div>
                </div>
                <div className="mt-[6rem] ">
                    <Image
                        src="/Imges/home/imgH2.jpg"
                        width={300}
                        height={180}
                        alt="Picture "
                        className='border-4 border-solid border-white-700 rounded-md'
                    />
                    <Image
                        src="/Imges/home/imgh3.jpg"
                        width={300}
                        height={180}
                        alt="Picture "
                        className='rounded-md -translate-y-[2rem] ml-[2rem] border-4 border-solid border-[#BCAB10]'
                    />
                    <Image
                        src="/Imges/home/imgH2.jpg"
                        width={300}
                        height={180}
                        alt="Picture "
                        className='rounded-md -translate-y-[4rem]  border-4 border-solid border-[#40E0D0]'
                    />
                </div>

            </div>
            <div className=" ">
                <Button className="mx-6 px-6 w-[60px]"
                 type="primary" 
                 icon={<BiSolidMessage size={20} />} 
                 style={{ padding: '18px 18px' }}  />
            </div>
        </>
    );
};

export default InformationImages;