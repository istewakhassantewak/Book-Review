import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="my-20">
            <h1 className="font-bold text-4xl text-center">Books</h1>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 justify-between gap-6 my-10">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;