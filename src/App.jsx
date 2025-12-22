import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="relative min-h-screen text-pink-800 bg-pink-50 overflow-hidden">
      
      {/* BACKGROUND ANIMATION LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Blob 1: Top Left */}
        <div className="absolute top-0 left-[-10%] w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        {/* Blob 2: Top Right */}
        <div className="absolute top-0 right-[-10%] w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        {/* Blob 3: Bottom Left */}
        <div className="absolute bottom-[-10%] left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        {/* Blob 4: Bottom Right */}
        <div className="absolute bottom-[-10%] right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      {/* CONTENT LAYER (z-10 ensures text is above the blobs) */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}