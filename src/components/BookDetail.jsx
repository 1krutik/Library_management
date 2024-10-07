import React from 'react';

const BookDetail = ({ book }) => {
    if (!book) return <p className="text-center text-gray-500">Loading...</p>;

    return (
        <div className="book-detail p-6 bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center">
            <img 
                src={book.image} 
                alt="book-image" 
                className="rounded-lg shadow-md mb-4 md:mb-0 md:mr-6 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl" 
                style={{ width: "400px", height: "400px" }} 
            />
            <div className="flex-1">
                <h2 className="text-3xl font-bold text-blue-600 mb-2">{book.title}</h2>
                <p className="text-lg"><strong>Author:</strong> {book.author}</p>
                <p className="text-lg"><strong>Genre:</strong> {book.genre}</p>
                <p className="text-lg"><strong>Publication Date:</strong> {book.publicationDate}</p>
            </div>
        </div>
    );
};

export default BookDetail;
