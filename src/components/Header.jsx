import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-purple-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold transition-transform transform hover:scale-105">Book_Heaven</h1>
        <nav>
          <Link
            to="/"
            className="mr-6 text-lg transition-colors duration-200 hover:text-yellow-300"
          >
            Home
          </Link>
          <Link
            to="/add-book"
            className="mr-6 text-lg transition-colors duration-200 hover:text-yellow-300"
          >
            Add Book
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
