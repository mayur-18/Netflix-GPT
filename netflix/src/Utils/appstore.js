import { configureStore } from '@reduxjs/toolkit';
import userReducer from './useSlice';
import movieReducer from './movieSlice';

// Create the Redux store
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  // You can optionally add middleware or other configurations here
  // DevTools will be enabled by default in development mode
});


export default appStore;
