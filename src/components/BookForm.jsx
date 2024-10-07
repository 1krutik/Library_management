import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bookService from '../services/bookService';

const BookForm = ({ bookId }) => {
    const [book, setBook] = useState({ title: '', author: '', genre: '', publicationDate: '', image: '' });
    const navigate = useNavigate();

    useEffect(() => {
        if (bookId) {
            const fetchBook = async () => {
                const fetchedBook = await bookService.getBookById(bookId);
                setBook(fetchedBook);
            };
            fetchBook();
        }
    }, [bookId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (bookId) {
            await bookService.updateBook(bookId, book);
        } else {
            await bookService.addBook(book);
        }
        navigate('/');
    };

    return (
        <div className="form-container max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">{bookId ? 'Edit Book' : 'Add Book'}</h2>
            <form className="book-form space-y-4" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="block text-gray-700">Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={book.title} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="form-group">
                    <label className="block text-gray-700">Author</label>
                    <input 
                        type="text" 
                        name="author" 
                        value={book.author} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="form-group">
                    <label className="block text-gray-700">Genre</label>
                    <input 
                        type="text" 
                        name="genre" 
                        value={book.genre} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="form-group">
                    <label className="block text-gray-700">Publication Date</label>
                    <input 
                        type="date" 
                        name="publicationDate" 
                        value={book.publicationDate} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="form-group">
                    <label className="block text-gray-700">Book Image URL</label>
                    <input 
                        type="text" 
                        name="image" 
                        value={book.image} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn-submit w-full py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-200"
                >
                    {bookId ? 'Update Book' : 'Add Book'}
                </button>
            </form>
        </div>
    );
};

export default BookForm;
