
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Book, 
  BarChart, 
  Menu, 
  X, 
  User,
  LogIn,
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white bg-opacity-80 backdrop-blur-md py-3 shadow-subtle' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 transition-opacity duration-200 hover:opacity-80"
          >
            <Book className="h-8 w-8 text-wordsmith-blue" />
            <span className="text-xl font-medium tracking-tight">Wordsmith's Corner</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-all duration-200 hover:text-wordsmith-blue ${
                location.pathname === '/' ? 'text-wordsmith-blue' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/learn" 
              className={`transition-all duration-200 hover:text-wordsmith-blue ${
                location.pathname === '/learn' ? 'text-wordsmith-blue' : 'text-foreground'
              }`}
            >
              Learn
            </Link>
            <Link 
              to="/dashboard" 
              className={`transition-all duration-200 hover:text-wordsmith-blue ${
                location.pathname === '/dashboard' ? 'text-wordsmith-blue' : 'text-foreground'
              }`}
            >
              Dashboard
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="rounded-full">
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" className="rounded-full bg-wordsmith-blue hover:bg-wordsmith-blue/90">
              <User className="h-4 w-4 mr-2" />
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 md:hidden focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 pt-20 pb-6 px-4 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col space-y-6 items-center">
          <Link 
            to="/"
            className={`text-lg font-medium ${location.pathname === '/' ? 'text-wordsmith-blue' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/learn"
            className={`text-lg font-medium ${location.pathname === '/learn' ? 'text-wordsmith-blue' : ''}`}
          >
            Learn
          </Link>
          <Link 
            to="/dashboard"
            className={`text-lg font-medium ${location.pathname === '/dashboard' ? 'text-wordsmith-blue' : ''}`}
          >
            Dashboard
          </Link>
          <div className="pt-6 w-full flex flex-col space-y-3">
            <Button variant="outline" className="w-full rounded-full">
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button className="w-full rounded-full bg-wordsmith-blue hover:bg-wordsmith-blue/90">
              <User className="h-4 w-4 mr-2" />
              Sign Up
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
