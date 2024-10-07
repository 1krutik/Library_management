import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination flex justify-center my-4">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`p-2 mx-1 border rounded ${currentPage === page ? 'bg-blue-500 text-white' : ''}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
