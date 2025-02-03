import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, Home, Library, Search, User, Menu, X, LogIn, UserPlus } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 transition hover:opacity-80"
          >
            <Book className="h-7 w-7 text-emerald-600" />
            <span className="font-arabic text-xl font-semibold">تقريب الأثر</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" icon={<Home className="h-4 w-4" />} text="الرئيسية" />
            <NavLink to="/library" icon={<Library className="h-4 w-4" />} text="المكتبة" />
            <NavLink to="/authors" icon={<User className="h-4 w-4" />} text="المؤلفون" />
            <NavLink to="/search" icon={<Search className="h-4 w-4" />} text="البحث" />
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 font-arabic">
              <LogIn className="h-4 w-4 ml-1" />
              <span>تسجيل الدخول</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300 shadow-sm hover:shadow font-arabic">
              <UserPlus className="h-4 w-4 ml-1" />
              <span>إنشاء حساب</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="py-4 space-y-4">
            <MobileNavLink to="/" icon={<Home className="h-4 w-4" />} text="الرئيسية" />
            <MobileNavLink to="/library" icon={<Library className="h-4 w-4" />} text="المكتبة" />
            <MobileNavLink to="/authors" icon={<User className="h-4 w-4" />} text="المؤلفون" />
            <MobileNavLink to="/search" icon={<Search className="h-4 w-4" />} text="البحث" />
            
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <button className="flex items-center w-full px-4 py-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 font-arabic">
                <LogIn className="h-4 w-4 ml-2" />
                <span>تسجيل الدخول</span>
              </button>
              <button className="flex items-center w-full px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300 font-arabic">
                <UserPlus className="h-4 w-4 ml-2" />
                <span>إنشاء حساب</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
        isActive
          ? 'text-emerald-600 bg-emerald-50'
          : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50'
      }`}
    >
      {icon}
      <span className="font-arabic">{text}</span>
    </Link>
  );
};

const MobileNavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive
          ? 'text-emerald-600 bg-emerald-50'
          : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50'
      }`}
    >
      {icon}
      <span className="font-arabic mr-2">{text}</span>
    </Link>
  );
};

export default Navbar;
