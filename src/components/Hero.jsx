import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import heroImage from '../assets/website_picture.JPG';
const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 md:pt-0 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* intro text */}
        <div className="text-center md:text-left space-y-6 animate-fade-in-up">
          <h2 className="text-xl md:text-2xl font-medium text-pink-600">
            Hey there! I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-pink-900 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-700">
              Ruth Osayomore Olotu
            </span>
          </h1>
          <p className="text-lg md:text-xl text-pink-800/80 max-w-lg mx-auto md:mx-0 leading-relaxed">
            A Computer Science student trying to tell little (and big!) scraps of metal what to do.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-pink-500 text-white font-medium rounded-full shadow-lg hover:bg-pink-600 hover:shadow-pink-500/30 transition-all transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-pink-500 text-pink-600 font-medium rounded-full hover:bg-pink-50 transition-all"
            >
              Contact Me
            </a>
          </div>

          {/* socials  */}
          <div className="flex justify-center md:justify-start space-x-6 pt-6">
             <a href="https://github.com/os4yomore" className="text-2xl text-pink-400 hover:text-pink-700 transition-colors"><FaGithub/></a>
             <a href="https://www.linkedin.com/in/rutholotu/" className="text-2xl text-pink-400 hover:text-pink-700 transition-colors"><FaLinkedin/></a>
             <a href="mailto:osayomoreolotu@gmail.com" className="text-2xl text-pink-400 hover:text-pink-700 transition-colors"><FaEnvelope/></a>
          </div>
        </div>

        {/* right side: image */}
        <div className="relative flex justify-center items-center">
          {/* Decorative Blob Background */}
          <div className="absolute w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 -right-4"></div>
          
          {/* my circular face container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-2xl overflow-hidden">
            
            <img 
              src={heroImage}
              alt="Profile" 
              className="w-full h-full object-cover object-[50%_20%]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;