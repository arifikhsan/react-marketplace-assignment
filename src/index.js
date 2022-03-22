import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/product-page';
import ProductDetailPage from './pages/product-detail-page';

export const UserContext = React.createContext();

ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider value='Slamet'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductPage />} />
          <Route path='/product' element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
