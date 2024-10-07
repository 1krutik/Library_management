import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookDetailPage from './pages/BookDetailPage';
import AddBookPage from './pages/AddBookPage';
import EditBookPage from './pages/EditBookPage';
import Header from './components/Header';
import Footer from './components/Footer';
import FilterBar from './components/FilterBar';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;  // Example value; update based on your data

  const handleFilter = (filters) => {
    setFilters(filters);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app-container">
      <Header />
      <FilterBar onFilter={handleFilter} />
      <Routes>
        <Route path="/" element={<HomePage filters={filters} currentPage={currentPage} />} />
        <Route path="/book/:id" element={<BookDetailPage />} />
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="/edit-book/:id" element={<EditBookPage />} />
      </Routes>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      <Footer />
    </div>
  );
};

export default App;
