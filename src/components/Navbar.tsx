import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, Home, Library, Search, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Book className="h-6 w-6 text-emerald-600" />
            <span className="font-arabic text-xl font-semibold">تقريب الأثر</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" icon={<Home className="h-4 w-4" />} text="Home" />
            <NavLink to="/library" icon={<Library className="h-4 w-4" />} text="Library" />
            <NavLink to="/authors" icon={<Book className="h-4 w-4" />} text="Authors" />
            <NavLink to="/search" icon={<Search className="h-4 w-4" />} text="Search" />
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-emerald-700 transition">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/" icon={<Home className="h-4 w-4" />} text="Home" />
              <MobileNavLink to="/library" icon={<Library className="h-4 w-4" />} text="Library" />
              <MobileNavLink to="/authors" icon={<Book className="h-4 w-4" />} text="Authors" />
              <MobileNavLink to="/search" icon={<Search className="h-4 w-4" />} text="Search" />
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2">
                <User className="h-4 w-4" />
                <span>Sign In</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link to={to} className="flex items-center space-x-1 text-gray-600 hover:text-emerald-600 transition">
    {icon}
    <span>{text}</span>
  </Link>
);

const MobileNavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link to={to} className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition px-4">
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;
