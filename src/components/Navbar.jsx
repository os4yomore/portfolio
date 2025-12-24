import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaCode } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // useeffect to detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  //  classes for the navbar background
  const navbarClasses = scrolled 
    ? "fixed w-full z-50 bg-pink-50/90 backdrop-blur-md shadow-md border-b border-pink-100 transition-all duration-300" 
    : "fixed w-full z-50 bg-transparent transition-all duration-300";

  // sets up my text colors (darker when scrolled for contrast)
  const textColor = scrolled ? "text-pink-900" : "text-pink-800";

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* logo/name with hover effect*/}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="bg-pink-200 p-2 rounded-lg group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
               <FaCode className="text-xl" />
            </div>
            <span className={`font-bold text-2xl tracking-wide font-serif ${textColor}`}>
              Ruth Olotu<span className="text-pink-600">.</span>
            </span>
          </div>

          {/* desktop menu, with underlines */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['About', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className={`relative group px-1 py-2 text-sm font-bold uppercase tracking-wider ${textColor}`}
                >
                  {item}
                  {/* sliding underlines */}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* socials icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/os4yomore" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-900 hover:-translate-y-1 transition-transform duration-300 text-xl">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rutholotu/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-900 hover:-translate-y-1 transition-transform duration-300 text-xl">
                <FaLinkedin />
            </a>
          </div>

          {/* mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${textColor} hover:text-pink-600 focus:outline-none`}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu dropdown - smooth fade */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-pink-50 border-t border-pink-100 shadow-xl">
          <a href="#about" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-pink-800 hover:bg-pink-100 hover:text-pink-600">About</a>
          <a href="#projects" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-pink-800 hover:bg-pink-100 hover:text-pink-600">Projects</a>
          <a href="#contact" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-pink-800 hover:bg-pink-100 hover:text-pink-600">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;