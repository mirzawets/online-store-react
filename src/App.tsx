import React from 'react';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/online-store-react' element={<ProductsPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  );
}
