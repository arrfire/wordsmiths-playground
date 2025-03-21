
import { Link } from 'react-router-dom';
import { Book, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Book className="h-6 w-6 text-wordsmith-blue" />
              <span className="text-xl font-medium">Wordsmith's Corner</span>
            </Link>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Revolutionizing language education by combining AI and Web3 technologies on Polygon, 
              creating an interactive learn-to-earn ecosystem.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-wordsmith-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-wordsmith-blue transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-wordsmith-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-wordsmith-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-muted-foreground hover:text-wordsmith-blue transition-colors">
                  Learn
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-wordsmith-blue transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-wordsmith-blue transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-wordsmith-blue transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-wordsmith-blue transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-wordsmith-blue transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-wordsmith-blue transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-wordsmith-blue transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-wordsmith-blue transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-wordsmith-blue transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-wordsmith-blue transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Wordsmith's Corner. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-wordsmith-blue transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-wordsmith-blue transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-wordsmith-blue transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
