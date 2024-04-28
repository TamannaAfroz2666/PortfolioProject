import '../CSS/Home.css'
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSkype } from "react-icons/fa";
import Link from 'next/link'
import InformationImages from '../pages/informationImages';
import Image from 'next/image';
import { Button, Modal } from 'antd';


const HomePage = () => {
    return (
        <div className="min-h-screen w-full homePgeSection bg-[#212529] mainSection">
            <div className='homeContainer h-[100px] bg-[#343a40]'>
                <div className=" flex justify-between w-[86%] m-auto  ">
                    <div className="contentContainer text-[#fff] mr-[20px] flex gap-[4rem] pt-[40px]">
                        <div>
                            <nav>

                                <Image
                                    src="/Imges/aa.jpg"
                                    width={90}
                                    height={80}
                                    alt="Picture "
                                    className='imge rounded-lg '
                                />
                            </nav>
                        </div>
                        <div>
                            <Link
                                className='active text-[#BCAB10] text-[18px] emailSection font-semibold hover:text-[#8750f7]' href="/example@gmail.com">example@gmail.com
                            </Link>


                        </div>


                    </div>
                    <div className="sideBarContainer pt-[40px] flex gap-[4rem]">
                        <div className="text-[#fff] uppercase text-[14px]">
                            <nav>
                                <ul className='flex gap-4'>
                                    <li>
                                        <Link
                                            className='active text-[#BCAB10] ' href="/">Home
                                            <span className='hoverActive '><hr className='mt-[2px] bg-yellow-500 border-none h-[2px]' /></span> </Link>
                                    </li>
                                    <li> <Link href="/about">about</Link></li>
                                    <li> <Link href="/services">services</Link></li>
                                    <li> <Link href="/project">project</Link></li>
                                    <li> <Link href="/contact">contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className=' bg-[#212529] bottom-4 relative'>
                            <button className=" hireMeBtn hover:bg-blue-700 hover:border-0  text-[#fff] font-bold py-3 px-6 text-[18px] font-sans  capitalize rounded-[40px] border-[#BCAB10]">
                                hire me!
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="InformationImageSection  w-[96%] m-auto">
                <InformationImages></InformationImages>

            </div>



        </div>
    );
};

export default HomePage;