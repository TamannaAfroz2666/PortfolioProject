import { FaChevronRight } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
const InformationImages = () => {
    return (
        <div className="flex  ">
            <div className="">
                <p className="pt-[8rem] text-[2rem] text-[#14AEB9] uppercase font-semibold tracking-normal">power washing services near me</p>
                <p className="pt-[1rem] text-[2rem] text-[#fff] capitalize font-semibold tracking-normal">Exterior Cleaning that <span className="text-[#14AEB9] pr-2">transforms</span>your property</p>
                <p className="pt-[1rem] text-[2rem] text-[#fff] capitalize font-semibold tracking-normal"> We'll <span className="text-[#ffff] pr-2 uppercase text-[2.5rem]">instantly </span>restore the look of your home!</p>
                <div className="flex gap-4 pt-[4rem]">
                    <button className="bg-[#BCAB10] hover:bg-blue-700 hover:text-[#fff]  text-[#111] font-bold py-2 px-4 text-[18px] font-sans  capitalize rounded">
                        <span className="flex "> get a fast contact <span> <FaChevronRight size={14} className=" pl-2 mt-[.44rem]" /></span> </span>
                    </button>

                    <button className="border-solid border-2 border-[#BCAB10] hover:bg-blue-700   text-[#fff] font-bold py-2 px-4 text-[18px] font-sans  capitalize rounded border-[#BCAB10]">
                        <span className="flex "> 555 555-1234 <span> <FaPhoneFlip size={24} className=" pl-2 mt-[.1rem]" /></span> </span>
                    </button>

                </div>


            </div>
            <div>

            </div>

        </div>
    );
};

export default InformationImages;