import React from 'react';
import BookForm from '../components/BookForm';

const AddBookPage = () => {
  return (
    <div className="add-book-page">
      <h2 className="text-xl">Add a New Book</h2>
      <BookForm />
    </div>
  );
};

export default AddBookPage;
