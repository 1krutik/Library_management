import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookDetail from '../components/BookDetail';
import bookService from '../services/bookService';

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const fetchedBook = await bookService.getBookById(id);
      setBook(fetchedBook);
    };
    fetchBook();
  }, [id]);

  return (
    <div className="book-detail-page">
      <BookDetail book={book} />
    </div>
  );
};

export default BookDetailPage;
