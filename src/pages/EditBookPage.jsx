import React from 'react';
import { useParams } from 'react-router-dom';
import BookForm from '../components/BookForm';

const EditBookPage = () => {
  const { id } = useParams();
  return (
    <div className="edit-book-page">
      <h2 className="text-xl">Edit Book</h2>
      <BookForm bookId={id} />
    </div>
  );
};

export default EditBookPage;
