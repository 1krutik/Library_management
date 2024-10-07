import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
    return (
        <div className="book-list grid grid-cols-3 gap-4">
            {books.map(book => (
                <div key={book.id} className="book-item border p-4 rounded-md">
                    <div className='flex justify-center object-cover object-top'>
                        <img src={book.image} alt="book-image" style={{ width: "250px", height: "300px" }} />
                    </div>
                    <h2 className="text-xl font-semibold">{book.title}</h2>
                    <p>{book.author}</p>
                    <p>{book.genre}</p>
                    <p>{book.publicationDate}</p>
                    <Link to={`/book/${book.id}`} className="text-blue-500">View Details</Link>
                </div>
            ))}
        </div>
    );
};

export default BookList;
