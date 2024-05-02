
const ProjectCountState = () => {
    return (
        <div className="flex justify-around">
            <div className="inline-flex gap-4">
                <h1 className="text-[64px] text-[#fff] font-bold font-mono">14</h1>
                <span className="text-[#fff] font-bold font-mono text-[18px] text-[#dddddd] pt-6 w-40">Years of Experience</span>
            </div>
            <div className="inline-flex gap-4">
                <h1 className="text-[64px] text-[#fff] font-bold font-mono">5</h1>
                <span className="text-[#fff] font-bold font-mono text-[18px] text-[#dddddd] pt-6 w-40">Project Completed</span>
            </div>
            <div className="inline-flex gap-4">
                <h1 className="text-[64px] text-[#fff] font-bold font-mono">19</h1>
                <span className="text-[#fff] font-bold font-mono text-[18px] text-[#dddddd] pt-6 w-20">Happy Clients</span>
            </div>
        </div>
    );
};

export default ProjectCountState;