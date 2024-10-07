import axios from 'axios';

const API_URL = 'http://localhost:4000/books';  // URL of your JSON server

const getBooks = async (filters, page) => {
    let url = API_URL;
    if (filters || page) {
        const params = new URLSearchParams();
        if (filters?.genre) params.append('genre', filters.genre);
        if (filters?.author) params.append('author', filters.author);
        if (filters?.date) params.append('publicationDate', filters.date);
        if (page) params.append('_page', page);
        url += `?${params.toString()}`;
    }

    const response = await axios.get(url);
    return response.data;
};

const getBookById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

const addBook = async (book) => {
    const response = await axios.post(API_URL, book);
    return response.data;
};

const updateBook = async (id, book) => {
    const response = await axios.put(`${API_URL}/${id}`, book);
    return response.data;
};

const deleteBook = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};

export default { getBooks, getBookById, addBook, updateBook, deleteBook };
