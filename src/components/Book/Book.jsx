import { CiStar } from "react-icons/ci";
import { NavLink } from "react-router-dom";
const Book = ({ book }) => {

    const { bookId, image, tags, bookName, author, category, rating } = book
    return (

        <div className="card bg-base-100 shadow-sm rounded-2xl">
            <NavLink to={`/${bookId}`}>
                <figure className="p-7">
                    <div className="w-full bg-[#F3F3F3] flex justify-center py-8 rounded-2xl">
                        <img
                            src={image} className="w-36"
                            alt="book" />
                    </div>
                </figure>
                <div className="px-8 space-y-4">
                    <div className="flex gap-5 mb-4">
                        {
                            tags.map((tag, i) => <button key={i} className="text-[#23BE0A] rounded-4xl bg-[#23BE0A0D] font-medium text-base md:px-7 px-3 py-2">{tag}</button>
                            )
                        }
                    </div>
                    <h2 className="font-bold text-2xl ">{bookName}</h2>
                    <p className="font-medium text-base">By : {author}</p>
                    <hr className="border-dashed" />
                    <div className="flex justify-between font-medium text-base text-[#131313CC] mb-3.5">
                        <p>{category}</p>
                        <p className="flex justify-center gap-1 items-center">{rating}<CiStar /></p>
                    </div>

                </div>
            </NavLink>
        </div>

    );
};

export default Book;