import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { getLocalItem } from "../../LocalStorage";
import ListedBook from "../ListedBook/ListedBook";

const ListedBooks = () => {
    const [activeTab, setActiveTab] = useState('Read');
    const books = useLoaderData()
    const loadData = (type) => {
        const localBooks = getLocalItem(type)
        const loadedBooks = books.filter(book => {
            return localBooks.find(localId => localId === book.bookId)
        })
        return loadedBooks
    }
    const [displayData, setDisplayData] = useState(loadData('Read'))
    const [activeFilter, setActiveFilter] = useState('');

    const handleOnClick = (type = 'Read') => {

        if (type === 'Read') {
            setDisplayData(loadData('Read'))
            setActiveTab('Read')
        } else if (type === 'Wishlist') {
            setDisplayData(loadData('Wishlist'))
            setActiveTab('Wishlist')
        }
    }
    const handleFilter = type => {
        setActiveFilter(type)
        if (type === 'Rating') {
            const descendingBooks = [...displayData].sort((a, b) => b.rating - a.rating);
            setDisplayData(descendingBooks)
        } else if (type === 'Pages') {
            const descendingBooks = [...displayData].sort((a, b) => b.totalPages - a.totalPages);
            setDisplayData(descendingBooks)

        } else if (type === 'Year') {
            const descendingBooks = [...displayData].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setDisplayData(descendingBooks)

        }
    }


    return (
        <>
            <div className="flex items-center justify-center p-12 mt-9 rounded-2xl bg-[#1313130D]">
                <h1 className="font-bold text-3xl">Books</h1>
            </div>
            <div className="flex justify-center my-10">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn bg-[#23BE0A] p-7 text-2xl text-white rounded-lg m-1">Hover <MdOutlineKeyboardArrowDown className="font-bold text-2xl" /></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">

                        <li onClick={() => handleFilter('Rating')} className={activeFilter === 'Rating' ? 'bg-yellow-200' : ''}><a>Rating</a></li>
                        <li onClick={() => handleFilter('Pages')} className={activeFilter === 'Pages' ? 'bg-yellow-200' : ''}><a>Number
                            of pages</a></li>
                        <li onClick={() => handleFilter('Year')} className={activeFilter === 'Year' ? 'bg-yellow-200' : ''}><a>Published year</a></li>

                    </ul>
                </div>
            </div>
            <div className="w-full px-4 py-8 bg-white">
                {/* Tab Container */}
                <div className="flex items-end border-b border-gray-300 w-full">

                    {/* Read Books Tab */}
                    <button
                        onClick={() => handleOnClick('Read')}
                        className={`px-6 py-2.5 text-sm font-medium transition-all duration-150 rounded-t-lg relative -mb-[1px] ${activeTab === 'Read'
                            ? 'bg-white border-t border-x border-gray-300 text-gray-700'
                            : 'bg-transparent border-transparent text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        Read Books
                    </button>

                    {/* Wishlist Books Tab */}
                    <button
                        onClick={() => handleOnClick('Wishlist')}
                        className={`px-6 py-2.5 text-sm font-medium transition-all duration-150 rounded-t-lg relative -mb-[1px] ${activeTab === 'Wishlist'
                            ? 'bg-white border-t border-x border-gray-300 text-gray-700'
                            : 'bg-transparent border-transparent text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        Wishlist Books
                    </button>

                </div>
            </div>
            <div className="mt-4 space-y-4">
                {
                    displayData.map(book => <ListedBook key={book.bookId} book={book}></ListedBook>)



                }
            </div>



        </>
    );
};

export default ListedBooks;