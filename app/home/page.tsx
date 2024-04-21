import '../CSS/Home.css'
import Image from 'next/image'


const HomePage = () => {
    return (
        <div className="min-h-screen w-full">
            <div className="homeContainer flex gap-2 w-[98%] m-auto">
                <div className="sideBarContainer w-[10%]">
                    <div className="">
                        <nav>
                            <ul>
                                <li>
                                    <div className="timeCls">
                                        <span id="current-time" className='text-[#c0c0c0] text-[22px]'
                                        >9:09AM</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <Image
                                            src="/Imges/pic3.jpg"
                                            width={90}
                                            height={100}
                                            alt="Picture "
                                            className='m-[22px] rounded-md'
                                        />
                                    </div>
                                </li>
                                <li>time1</li>
                                <li>time2</li>
                                <li>time3</li>
                                <li>time5</li>
                            </ul>
                        </nav>
                    </div>
                    <h1>HomePage</h1>

                </div>
                <div className="contentContainer">
                    <h1 className=" text-red-600">gggg</h1>

                </div>

            </div>



        </div>
    );
};

export default HomePage;