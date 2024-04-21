import '../CSS/Home.css'

import Link from 'next/link'


const HomePage = () => {
    return (
        <div className="min-h-screen w-full">
            <div className="homeContainer flex justify-between w-[96%] m-auto pt-4">
                <div className="sideBarContainer">
                    <div className="text-[#fff] uppercase leading-4 text-[12px]">
                        <nav>
                            <ul className='flex gap-4'>
                                <li>
                                    <Link
                                        className='active text-[#BCAB10] ' href="/">Home
                                        <span className='hoverActive '><hr className='mt-[2px] bg-yellow-500 border-none h-[2px]'/></span> </Link>
                                </li>
                                <li> <Link href="/about">about</Link></li>
                                <li> <Link href="/services">services</Link></li>
                                <li> <Link href="/project">project</Link></li>
                                <li> <Link href="/contact">contact</Link></li>
                            </ul>
                        </nav>
                    </div>


                </div>
                <div className="contentContainer">
                    <h1 className=" text-red-600">gggg</h1>

                </div>

            </div>



        </div>
    );
};

export default HomePage;