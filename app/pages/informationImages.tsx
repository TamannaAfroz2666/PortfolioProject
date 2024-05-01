import { FaChevronRight } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import Image from 'next/image'
import { Button, Modal } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { BiSolidMessage } from "react-icons/bi";
import { useState } from "react";
import ModalLayout from "./modalLayout";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
const InformationImages = () => {

    return (
        <>
            <div className="flex gap-12 w-[86%] m-auto ">
                <div className=" ">
                    <p className="pt-[8rem]  text-[2rem] text-[#14AEB9]  font-semibold tracking-normal animate__animated animate__slideInLeft">I am Gerold</p>
                    <p className="pt-[.6rem] text-[4rem]  capitalize font-semibold tracking-normal gradient-text">data scientist</p>
                    <p className="pt-[.2rem] text-[22px] tracking-wide text-[#F8FFFB] capitalize font-semibold tracking-normal w-[60%]"> I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                    <div className="flex gap-4 pt-[2rem]">
                        <button className="relative overflow-hidden rounded-[40px] text-[#8750f7] border-solid border-2 border-[#8750f7]  font-bold py-4 px-10 text-[18px] font-sans capitalize  transition-all duration-500 hover:bg-[#8750f7] hover:text-[#fff] ">
                            <span className="flex items-center">
                                <span className="mr-2">Download CV </span>
                                <MdOutlineFileDownload size={24} />
                            </span>
                            <span className="absolute top-0 left-0 bg-blue-700 h-full w-0 transition-all duration-500 hover:w-full"></span>
                        </button>
                        <div>
                            {/* <button className="border-solid border-2 border-[#BCAB10] hover:bg-blue-700 hover:border-0   text-[#fff] font-bold py-2 px-4 text-[18px] font-sans  capitalize rounded border-[#BCAB10]">
                                <span className="flex "> 555 555-1234 <span> <FaPhoneFlip size={24} className=" pl-2 mt-[.1rem]" /></span> </span>
                            </button> */}
                            <span className="">
                                <Link className="border-solid border-2 border-[#BCAB10] " href='/facebook'>
                                    <FaFacebook size={24} />
                                </Link>
                            </span>
                        </div>
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
            {/* <div className=" ">
                <Button className="mx-6 px-6 w-[60px]"
                 type="primary" 
                 icon={<BiSolidMessage size={20} />} 
                 style={{ padding: '18px 18px' }}  />
            </div> */}
            <ModalLayout></ModalLayout>

        </>
    );
};

export default InformationImages;