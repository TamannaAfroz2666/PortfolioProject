
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLink = () => {
    return (
        <div className="">
             <div className="flex gap-4 mt-2">

<div>
    <div className="p-2 border-solid border-2 border-[#5503fa] rounded-[100%] hover:bg-[#5503fa] hover:text-[#fff] ">
        <Link className=" " href='/facebook'>
            <FaFacebookF size={24} className="iconFb" />
        </Link>
    </div>

</div>
<div>
    <div className="p-2 border-solid border-2 border-[#5503fa] rounded-[100%] hover:bg-[#5503fa] hover:text-[#fff] ">
        <Link className=" " href='/facebook'>
            <FaLinkedinIn size={24} className="iconFb" />
        </Link>
    </div>

</div>

<div>
    <div className="p-2 border-solid border-2 border-[#5503fa] rounded-[100%] hover:bg-[#5503fa] hover:text-[#fff] ">
        <Link className=" " href='/facebook'>
            <FaGithub size={24} className="iconFb" />
        </Link>
    </div>

</div>
</div>
            
        </div>
    );
};

export default SocialLink;