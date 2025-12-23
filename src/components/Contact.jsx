import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-900 mb-6 font-serif">
            Let's Connect
          </h2>
          <p className="text-pink-800/70 max-w-2xl mx-auto text-lg">
            I am currently looking for opportunities in <span className="font-bold text-pink-700">HealthTech</span>, <span className="font-bold text-pink-700">Engineering</span>, or <span className="font-bold text-pink-700">Finance</span>.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* left side contact info*/}
          <div className="space-y-8">
            <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/60 shadow-xl">
              <h3 className="text-2xl font-bold text-pink-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:osayomoreolotu@gmail.com" 
                  className="flex items-center gap-4 text-pink-900/80 hover:text-pink-600 transition-colors group"
                >
                  <div className="p-3 bg-pink-100 rounded-full group-hover:bg-pink-200 transition-colors">
                    <FaEnvelope className="text-xl text-pink-600" />
                  </div>
                  <span className="text-lg">osayomoreolotu@gmail.com</span>
                </a>

                <a 
                  href="https://www.linkedin.com/in/rutholotu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-pink-900/80 hover:text-pink-600 transition-colors group"
                >
                  <div className="p-3 bg-pink-100 rounded-full group-hover:bg-pink-200 transition-colors">
                    <FaLinkedin className="text-xl text-pink-600" />
                  </div>
                  <span className="text-lg">Ruth Olotu</span>
                </a>

                <a 
                  href="https://github.com/os4yomore" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-pink-900/80 hover:text-pink-600 transition-colors group"
                >
                  <div className="p-3 bg-pink-100 rounded-full group-hover:bg-pink-200 transition-colors">
                    <FaGithub className="text-xl text-pink-600" />
                  </div>
                  <span className="text-lg">github.com/os4yomore</span>
                </a>
              </div>
            </div>

            {/* pls employ me i'm begging */}
            <div className="bg-pink-800 text-pink-100 p-8 rounded-3xl shadow-xl">
               <h3 className="text-xl font-bold mb-4">Availability</h3>
               <p className="opacity-90 leading-relaxed mb-4">
                 I am currently completing my Final Year Thesis but am open to interviews for roles starting in <span className="font-bold text-white">Late 2026/Early 2027</span> (or internships/part-time immediately).
               </p>
               <div className="inline-block bg-green-500/20 text-green-100 px-4 py-1 rounded-full text-sm font-bold border border-green-500/30">
                 ● Open to Opportunities
               </div>
            </div>
          </div>

          {/* fill this form to get to me */}
          <form 
            action="mailto:osayomoreolotu@gmail.com" 
            method="post" 
            encType="text/plain"
            className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/60 shadow-xl space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-pink-800 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-pink-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-pink-900 placeholder:text-pink-300"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-pink-800 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-pink-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-pink-900 placeholder:text-pink-300"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-pink-800 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message"
                rows="4"
                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-pink-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-pink-900 placeholder:text-pink-300"
                placeholder="Hello Ruth, I'd like to discuss a project..."
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-pink-600 text-white font-bold rounded-xl shadow-lg hover:bg-pink-700 hover:shadow-pink-500/30 transition-all flex items-center justify-center gap-2"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;