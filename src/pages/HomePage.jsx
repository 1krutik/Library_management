import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import bookService from '../services/bookService';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const fetchedBooks = await bookService.getBooks();
      setBooks(fetchedBooks);
    };
    fetchBooks();
  }, []);

  return (
    <div className="home-page">
      <h1 className="text-2xl font-bold">Word World </h1>
      <BookList books={books} />
    </div>
  );
};

export default HomePage;
