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
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import SocialLink from "./SocialLink";
import ProjectCountState from "./ProjectCountState/ProjectCountState";
const InformationImages = () => {

    return (
        <><div className="w-[70%] m-auto ">
              <div className="flex  ">
                <div className="w-[60%]">
                    <p className="pt-[8rem]  text-[2rem] text-[#14AEB9]  font-semibold tracking-normal animate__animated animate__slideInLeft">I am Gerold</p>
                    <p className="pt-[.6rem] text-[4rem]  capitalize font-semibold tracking-normal gradient-text">data scientist</p>
                    <p className="pt-[.4rem] text-[18px] tracking-wide text-[#F8FFFB]  font-semibold tracking-[1px] w-[66%] leading-[28px]"> I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                    <div className="flex gap-8 pt-[2rem] mt-8">
                        <button className="relative overflow-hidden rounded-[40px] text-[#8750f7] border-solid border-2 border-[#8750f7]  font-bold py-4 px-10 text-[18px] font-sans capitalize  transition-all duration-500 hover:bg-[#8750f7] hover:text-[#fff] ">
                            <span className="flex items-center">
                                <span className="mr-2">Download CV </span>
                                <MdOutlineFileDownload size={24} />
                            </span>
                            <span className="absolute top-0 left-0 bg-blue-700 h-full w-0 transition-all duration-500 hover:w-full"></span>
                        </button>
                        <div>
                            <SocialLink></SocialLink>
                        </div>

                    </div>
                </div>
                <div className="mt-[8rem] ">
                    <Image
                        src="/Imges/home/imgH2.jpg"
                        width={400}
                        height={500}
                        alt="Picture "
                        className='border-[2px] border-solid border-[#8850f78e] rounded-[20px] rotate-6 imageSection hover:rotate-0'
                    />
                </div>
            </div>

            <div className="mt-[6rem]">
                <ProjectCountState/>
            </div>
            {/* <div className="w-[70%] m-auto mt-2">
                <ModalLayout />
            </div> */}

        </div>
          

        </>
    );
};

export default InformationImages;