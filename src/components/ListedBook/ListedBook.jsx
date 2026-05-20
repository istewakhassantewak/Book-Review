import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineRestorePage } from "react-icons/md";
import { NavLink } from "react-router-dom";
const ListedBook = ({ book }) => {
    const { bookId, image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = book
    return (
        <div className="grid grid-cols-4 bg-base-100 shadow-sm rounded-lg">
            <figure className="p-7 col-span-1 bg-[#1313130D] m-4 rounded-lg flex justify-center">
                <img
                    src={image} className="h-60"
                    alt="Movie" />
            </figure>
            <div className="flex col-span-3 flex-1 flex-col justify-center space-y-4">
                <h2 className="font-bold text-2xl">{bookName}</h2>
                <p className="font-medium text-base text-[#131313CC]">By : {author}</p>
                <div className="flex gap-5 mb-4 items-center">
                    <span className="font-bold text-base">Tag</span>
                    {
                        tags.map((tag, i) => <button key={i} className="text-[#23BE0A] rounded-4xl bg-[#23BE0A0D] font-medium text-base px-7 py-1">#{tag}</button>
                        )
                    }
                    <span className="font-normal text-base flex items-center gap-2.5 text-[#131313CC]"><CiLocationOn className="text-2xl" /> Year of Publishing: {yearOfPublishing}</span>
                </div>
                <div className="flex gap-4 font-normal text-base text-[#13131399]">
                    <span className="flex items-center gap-2.5"><FaUserFriends className="text-2xl" />Publisher: {publisher}</span>
                    <span className="flex items-center gap-2.5"><MdOutlineRestorePage className="text-2xl" />Page: {totalPages}</span>
                </div>
                <hr className="border-[#13131399]" />
                <div className="flex gap-2.5">
                    <button className="font-normal text-base text-[#328EFF] p-2 px-4 bg-[#328EFF26] rounded-4xl">Category: {category}</button>
                    <button className="font-normal text-base text-[#FFAC33] p-2 px-4 bg-[#FFAC3326] rounded-4xl">Category: {rating}</button>
                    <NavLink to={`/${bookId}`}><button className="btn text-white bg-[#23BE0A] rounded-4xl">View Details</button></NavLink>

                </div>
            </div>
        </div>
    );
};

export default ListedBook;