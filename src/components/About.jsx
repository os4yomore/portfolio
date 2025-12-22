import { FaGraduationCap, FaCode, FaMusic, FaCalculator, FaUtensils, FaTasks, FaBasketballBall, FaBook, FaChalkboardTeacher, FaCity } from 'react-icons/fa';
import { SiPython, SiReact, SiTypescript, SiPostgresql, SiMysql, SiRust } from 'react-icons/si';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-900 mb-6 font-serif">
            The Story So Far
          </h2>
          <p className="text-pink-800/70 max-w-3xl mx-auto text-lg leading-relaxed">
            I'm a Computer Science student at <span className="font-semibold">Pan-Atlantic University</span> with a 4.98 CGPA. 
            I am a builder at heart, trying to use code and calculus to solve problems that actually matter.
          </p>
        </div>

        {/* The Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Card 1: The Professional (Span 2 columns) */}
          <div className="md:col-span-2 row-span-2 bg-white/40 backdrop-blur-md p-10 rounded-3xl border border-white/60 shadow-xl hover:shadow-pink-200/50 transition-all group">
            <div className="flex items-center gap-3 mb-6">
              <FaGraduationCap className="text-4xl text-pink-600" />
              <h3 className="text-3xl font-bold text-pink-800">The Professional Journey</h3>
            </div>
            
            <div className="space-y-6 text-pink-900/90 text-lg leading-relaxed">
              <p>
                My technical foundation was built in high-stakes environments. At <span className="font-bold text-pink-700">Deloitte</span>, I helped build the engines behind financial decisions. I worked on Python models to optimize Loss Given Default (LGD) and Exposure at Default (EAD) algorithms, and I developed stochastic simulations using Brownian motion to price financial instruments. It was the perfect blend of my coding abilities and my deep-rooted passion for advanced mathematics.
              </p>
              
              <p>
                At <span className="font-bold text-pink-700">PwC</span>, I shifted my focus to operational strategy and visualization. I developed interactive Power BI dashboards, turning raw complex data into clear, actionable narratives for the Technology unit. Beyond data, I collaborated with the Project Management Team to execute major transformations: migrating a client's banking services to a new HyperConverged infrastructure and helping manage the operational transition of a client’s complete brand identity overhaul.
              </p>

              <p className="border-l-4 border-pink-400 pl-4 italic bg-pink-50/50 p-4 rounded-r-xl">
                <span className="font-bold block mb-2 text-pink-800">Math is My First Love</span>
                While my roots are in Finance, my future lies at the intersection of math and tangible impact. Mathematics has always been the lens through which I decode the world. I am now trying to actively pivot towards <span className="font-bold text-pink-700">HealthTech</span> and <span className="font-bold text-pink-700">Engineering</span>. I want to apply mathematical rigor to solve fundamental human problems—improving how we <span className="font-bold text-pink-700">build</span> (engineering), how we <span className="font-bold text-pink-700">learn</span> (education), and how we <span className="font-bold text-pink-700">live</span> (healthcare).
              </p>
            </div>
          </div>

          {/* Card 2: The Tech Stack */}
          <div className="bg-gradient-to-br from-pink-500 to-pink-700 p-8 rounded-3xl text-white shadow-xl flex flex-col justify-between">
            <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaCode /> Technical Arsenal
                </h3>
                <div className="flex flex-wrap gap-4 mb-8">
                    <SiPython className="text-3xl hover:text-pink-200 transition-colors" title="Python (Data Science & Backend)" />
                    <SiReact className="text-3xl hover:text-pink-200 transition-colors" title="React (Frontend)" />
                    <SiTypescript className="text-3xl hover:text-pink-200 transition-colors" title="TypeScript" />
                    <SiPostgresql className="text-3xl hover:text-pink-200 transition-colors" title="PostgreSQL" />
                    <SiMysql className="text-3xl hover:text-pink-200 transition-colors" title="MySQL" />
                </div>
                
                <div className="space-y-4 text-pink-100 text-sm leading-relaxed">
                    <p>
                        <strong className="text-white">Languages:</strong> Java, C++, Python (Pandas, NumPy, Matplotlib), JavaScript, Rust.
                    </p>
                    <p>
                        <strong className="text-white">Project Management:</strong> I don't just write code; I manage the lifecycle. Proficient in Asana, Sprint Planning, and Agile methodologies.
                    </p>
                </div>
            </div>
            
            <p className="mt-6 pt-6 border-t border-pink-400/30 text-pink-100 text-sm opacity-90 italic flex items-center gap-2">
                <SiRust className="text-lg" /> 
                <span>Rust (if you pay me a lot of money).</span>
            </p>
          </div>

          {/* Card 3: The Thesis */}
          <div className="md:col-span-1 bg-pink-800 text-pink-100 p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden group">
             <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-pink-600 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
             
             <h3 className="font-bold text-2xl mb-4 flex items-center gap-3 relative z-10">
                <FaTasks /> Current Focus
             </h3>
             <p className="text-pink-200 text-base leading-relaxed relative z-10">
               I am currently deep in the trenches of my <span className="font-bold text-white">Final Year Thesis</span>. 
               This research is consuming most of my time, but I've come to find it a lot more enjoyable than I originally expected. 
             </p>
          </div>

          {/* Card 4: Music */}
          <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/60 shadow-lg flex flex-col justify-center items-center text-center hover:scale-[1.01] transition-transform">
            <FaMusic className="text-5xl text-pink-500 mb-4" />
            <h3 className="font-bold text-pink-800 text-xl mb-2">The Soundtrack</h3>
            <p className="text-pink-800/80 text-base leading-relaxed">
              I am an avid Taylor Swift enthusiast. I once studied for six hours straight to "Wildest Dreams" and got a perfect score on my math exam.
            </p>
            <div className="mt-4 inline-block bg-pink-100 px-4 py-2 rounded-full text-pink-700 text-sm font-medium">
              On Repeat: "Solitude" by Bedouine 
            </div>
          </div>

          {/* Card 5: Math & Kitchen */}
          <div className="md:col-span-2 bg-white/60 backdrop-blur-md p-10 rounded-3xl border border-white/60 shadow-xl flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                 <FaCalculator className="text-pink-600 text-2xl" />
                 <h3 className="text-2xl font-bold text-pink-800">Why Math?</h3>
              </div>
              <p className="text-pink-900/80 text-lg leading-relaxed">
                I'm obsessed with math because numbers are ubiquitous, the fundamental language I use to decode the world around me. 
                Whether it was generating random walks for stock simulations at Deloitte or calculating angles on the tennis court for a perfect serve, math makes "it" make sense.
              </p>
            </div>
            
            <div className="h-auto min-h-[150px] w-px bg-pink-300 hidden md:block"></div>
            
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                 <FaUtensils className="text-pink-600 text-2xl" />
                 <h3 className="text-2xl font-bold text-pink-800">The Kitchen Rule</h3>
              </div>
              <p className="text-pink-900/80 text-lg leading-relaxed">
                I find immense joy in cooking, but I operate under one strict, non-negotiable condition: 
                <span className="font-bold text-pink-700"> NO ONE</span> else is allowed in the kitchen while I'm chef-ing it up. It is a solitary art form.
              </p>
            </div>
          </div>

          {/* Card 6: Random Facts (NEW - Full Width) */}
          <div className="md:col-span-3 bg-pink-900 text-pink-100 p-8 rounded-3xl shadow-xl">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                
                {/* Fact 1: Reading */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-pink-300 font-bold mb-1">
                        <FaBook /> Current Read
                    </div>
                    <p className="text-sm leading-relaxed">
                        ALWAYS <span className="italic">Confessions</span> by St. Augustine.
                    </p>
                    <p className="text-xs text-pink-400 italic">
                        (However, my H1 2026 reading list will be dropping pretty soon!)
                    </p>
                </div>

                {/* Fact 2: Tennis */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-pink-300 font-bold mb-1">
                        🎾 Lawn Tennis
                    </div>
                    <p className="text-sm leading-relaxed">
                        I consider myself a halfway decent player. It's all in the numbers.
                    </p>
                </div>

                {/* Fact 3: The Dream */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-pink-300 font-bold mb-1">
                        <FaChalkboardTeacher /> The Dream
                    </div>
                    <p className="text-sm leading-relaxed">
                        To retire as a tenured professor in a city with a beautiful skyline <FaCity className="inline ml-1" />.
                    </p>
                </div>

                {/* Fact 4: WNBA */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-pink-300 font-bold mb-1">
                        <FaBasketballBall /> Welcome To The W
                    </div>
                    <p className="text-sm leading-relaxed">
                        Unapologetic WNBA Fan. 
                        <span className="block font-bold text-white mt-1">#GoFever</span> 
                        <span className="block font-bold text-white">#CaitlinClarkILoveYou</span>
                    </p>
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;