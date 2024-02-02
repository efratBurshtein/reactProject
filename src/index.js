import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit'
import TaskSlice from './redux/Todoslice'
import UserSlice from './redux/Userslice'
import PostSlice from './redux/Postslice'
import PhotoSlice from './redux/Photoslice'

import { Provider } from 'react-redux'
const myStore = configureStore({
  reducer: {
    TaskSlice,
    PostSlice,
    UserSlice,
    PhotoSlice
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={myStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
