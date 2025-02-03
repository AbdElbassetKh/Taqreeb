import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Library from './pages/Library';
import Authors from './pages/Authors';
import Search from './pages/Search';
import BookDetail from './pages/BookDetail';
import AuthorDetail from './pages/AuthorDetail';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/search" element={<Search />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/author/:id" element={<AuthorDetail />} />
        </Routes>
      </main>
      <footer className="bg-[#1a1f36] text-white py-8 mt-20">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400 font-arabic">© {new Date().getFullYear()} تقريب الأثر.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
