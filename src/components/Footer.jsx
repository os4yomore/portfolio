import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-pink-900 text-pink-200 py-8 text-center relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-sm font-medium">
          © {new Date().getFullYear()} Ruth Olotu. All rights reserved.
        </div>

        <div className="flex items-center gap-2 text-sm opacity-80">
          <span>Built with</span>
          <FaHeart className="text-pink-400 animate-pulse" />
          <span>using React & Tailwind CSS</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;