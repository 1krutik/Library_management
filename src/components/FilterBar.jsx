import React, { useState } from 'react';

const FilterBar = ({ onFilter }) => {
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');

  const handleFilter = () => {
    onFilter({ genre, author, date });
  };

  return (
    <div className="filter-bar p-4 bg-gray-100 flex space-x-4">
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-2 border rounded"
      />
      <button
        onClick={handleFilter}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Filter
      </button>
    </div>
  );
};

export default FilterBar;
