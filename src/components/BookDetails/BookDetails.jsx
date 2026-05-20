import { useLoaderData, useParams } from "react-router-dom";
import { getLocalItem, setLocalItem } from "../../LocalStorage";
import { ToastContainer, toast } from 'react-toastify';
const BookDetails = () => {
    const { id } = useParams()

    const books = useLoaderData()
    const book = books.find(book => book.bookId == id)
    const { bookId, image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book

    const clickHandler = (type, id) => {
        const item = getLocalItem(type)
        const exists = item.find(i => i === id)
        if (!exists) {
            if (type === 'Wishlist') {
                const reads = getLocalItem('Read')
                const existRead = reads.find(read => read === id)
                if (!existRead) {
                    setLocalItem(type, id)
                    toast(`Added To ${type}`)
                } else {
                    toast(`It was already readed`)
                }
            } else {
                setLocalItem(type, id)
                toast(`Added To ${type}`)
            }

        } else {
            toast(`Already Added To ${type}`)
        }
    }


    return (
        <div className="grid grid-cols-2 mt-20 gap-8">
            <div className=" bg-[#F3F3F3] flex justify-center p-16 rounded-2xl">
                <img
                    src={image} className="w-md rounded-2xl"
                    alt="book" />
            </div>
            <div className="space-y-5">
                <h2 className="font-bold text-4xl">{bookName}</h2>
                <p className="font-medium text-xl text-[#131313CC]">By : {author}</p>
                <hr className="border-dashed" />
                <p className="font-medium text-xl text-[#131313CC]">{category}</p>

                <hr className="border-dashed" />
                <h1 className="font-bold text-base">Review : <span className="font-normal text-base text-[#131313B3]">{review}</span></h1>
                <div className="flex gap-5 mb-4 items-center">
                    <span className="font-bold text-base">Tag</span>
                    {
                        tags.map((tag, i) => <button key={i} className="text-[#23BE0A] rounded-4xl bg-[#23BE0A0D] font-medium text-base px-7 py-2">#{tag}</button>
                        )
                    }
                </div>
                <hr className="border-dashed" />
                <h1 className="flex gap-12 font-normal text-base text-[#131313B3]">Number of Pages: <span className="font-bold text-black">{totalPages}</span></h1>
                <h1 className="flex gap-12 font-normal text-base text-[#131313B3]">Publisher: <span className="font-bold text-black">{publisher}</span></h1>
                <h1 className="flex gap-12 font-normal text-base text-[#131313B3]">Year of Publishing: <span className="font-bold text-black">{yearOfPublishing}</span></h1>
                <h1 className="flex gap-12 font-normal text-base text-[#131313B3]">Rating: <span className="font-bold text-black">{rating}</span></h1>
                <div className="flex gap-6">
                    <button onClick={() => clickHandler('Read', bookId)} className="btn border px-5 py-6 rounded-lg bg-white">Read</button>
                    <button onClick={() => clickHandler('Wishlist', bookId)} className="btn bg-[#50B1C9] py-6 text-white px-7 rounded-lg">Wishlist</button>
                </div>


            </div>
            <ToastContainer />
        </div>

    );
};

export default BookDetails;