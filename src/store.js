import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  books: [],
  filters: {},
  currentPage: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return { ...state, books: action.payload };
    case 'SET_FILTERS':
      return { ...state, filters: action.payload };
    case 'SET_PAGE':
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

const ReduxProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export { store, ReduxProvider };
