import '../CSS/Home.css'
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSkype } from "react-icons/fa";
import Link from 'next/link'


const HomePage = () => {
    return (
        <div className="min-h-screen w-full ">
            <div className="homeContainer flex justify-between w-[96%] m-auto pt-4">
                <div className="sideBarContainer">
                    <div className="text-[#fff] uppercase leading-4 text-[12px]">
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


                </div>
                <div className="contentContainer text-[#fff] mr-[20px]">
                    <nav>
                        <ul className='flex gap-4'>
                            <li>
                                <Link
                                    className='active text-[#BCAB10] ' href="/"><FaFacebook size={25} />
                                </Link>
                            </li>
                            <li> <Link className='active text-[#BCAB10] ' href="/about"><IoLogoInstagram size={25} /></Link></li>
                            <li> <Link className='active text-[#BCAB10] ' href="/services"><FaSkype size={25} /></Link></li>

                        </ul>
                    </nav>


                </div>

            </div>



        </div>
    );
};

export default HomePage;