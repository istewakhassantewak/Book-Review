import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row justify-around mt-10 bg-[#1313130D] rounded-3xl px-6">
            <div className="flex flex-col gap-10 justify-center items-start">
                <h1 className="font-bold mt-5 md:mt-0 text-5xl">Books to freshen up <br /> your bookshelf</h1>
                <NavLink to="/listed" className="btn bg-[#23BE0A] text-white rounded-lg p-6">View The List</NavLink>
            </div>
            <div>
                <img src="/pngwing 1.png" className="w-80 my-10" alt="bbok" />
            </div>
        </div >
    );
};

export default Banner;