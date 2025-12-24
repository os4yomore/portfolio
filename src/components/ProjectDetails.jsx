import { FaArrowLeft, FaGithub, FaCheckCircle, FaLayerGroup, FaFingerprint } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import projectImage1 from '../assets/pau_sms1.png';
import projectImage2 from '../assets/pau_sms2.png';
import projectImage3 from '../assets/pau_sms3.png';
import projectImage4 from '../assets/pau_sms4.png';
import projectImage5 from '../assets/pau_sms5.png';
import projectImage6 from '../assets/pau_sms6.png';
import projectImage7 from '../assets/pau_sms7.png';
const ProjectDetails = () => {
  return (
    <div className="min-h-screen bg-pink-50 text-pink-900 font-sans selection:bg-pink-200">
      
      {/* navigation bar */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-pink-700 font-bold hover:text-pink-500 transition-colors">
          <FaArrowLeft /> Back to Home
        </Link>
        <div className="font-serif text-2xl font-bold tracking-wider"></div>
      </nav>

      {/* header section */}
      <header className="py-20 px-6 text-center">
        <div className="inline-block p-4 bg-pink-100 rounded-full mb-6 shadow-sm">
           <FaFingerprint className="text-4xl text-pink-600" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-pink-900 mb-6 font-serif">
          Biometric Staff Management
        </h1>
        <p className="text-xl text-pink-800/70 max-w-2xl mx-auto">
          An enterprise Java solution for Pan-Atlantic University to automate attendance, shift swapping, and fraud prevention.
        </p>
        
        {/* project stck */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="px-4 py-2 bg-white border border-pink-100 rounded-full text-sm font-bold text-pink-600 shadow-sm">
                Java (Apache Netbeans) & SQL (MySQL)
            </span>
            <span className="px-4 py-2 bg-white border border-pink-100 rounded-full text-sm font-bold text-pink-600 shadow-sm">
                JavaMail API
            </span>
            <span className="px-4 py-2 bg-white border border-pink-100 rounded-full text-sm font-bold text-pink-600 shadow-sm">
                Biometric SDK
            </span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20 space-y-20">
        
        {/* main screenshot */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            
            <img 
                src={projectImage1}
                alt="System Login Page" 
                className="w-full object-cover"
            />
        </div>

        {/* probleam and solution grid */}
        <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white shadow-lg">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-pink-500">01.</span> The Problem
                </h2>
                <p className="text-pink-900/80 leading-relaxed">
                    The university faced challenges with their manual process: it was difficult to accurately track attendance for support staff (Security, Horticulture, Maintenance), verify shift changes, and manage schedules efficiently. This led to accountability issues and payroll discrepancies.
                </p>
            </div>
            <div className="bg-pink-600 text-white p-8 rounded-3xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-pink-200">02.</span> The Solution
                </h2>
                <p className="opacity-90 leading-relaxed">
                   I developed a centralized, role-based system. It mandates biometric authentication to eliminate proxy attendance and automates the entire shift management lifecycle—from roster uploads to email notifications for approved swaps.
                </p>
            </div>
        </div>

        {/* 3. Key Features */}
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center font-serif text-pink-900">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {[
                    "Biometric Sign-In/Out with Timestamp Logging",
                    "Automated Email Alerts for Shifts & Swaps",
                    "Role-Based Access (Staff vs. Supervisor vs. Director)",
                    "Secure Password Hashing & Auto-Generation",
                    "Shift Swapping Logic Engine",
                    "CSV Roster Upload & Report Generation"
                ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-pink-50">
                        <FaCheckCircle className="text-pink-500 flex-shrink-0" />
                        <span className="font-medium text-pink-800">{feature}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* 4. Technical Architecture (What you learned) */}
        <div className="bg-pink-900 text-pink-100 rounded-3xl p-10 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
                <FaLayerGroup className="text-4xl text-pink-400" />
                <h2 className="text-3xl font-bold font-serif">Under the Hood & Lessons Learned</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <h3 className="font-bold text-pink-300 mb-2">Technologies Used</h3>
                    <ul className="list-disc list-inside space-y-2 opacity-80">
                        <li><strong>Core:</strong> Java (OOP Principles)</li>
                        <li><strong>Database:</strong> SQL (Relational Data Management)</li>
                        <li><strong>Security:</strong> Biometric SDK Integration</li>
                        <li><strong>Communication:</strong> JavaMail API for notifications</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-pink-300 mb-2">What I Learned</h3>
                    <p className="opacity-80 leading-relaxed">
                        Building this taught me how to manage complex state in an enterprise application. I learned to implement <strong>Role-Based Access Control (RBAC)</strong> to secure sensitive data and how to handle hardware integration (fingerprint scanners) within a software workflow.
                    </p>
                </div>
            </div>
        </div>

        {/* 5. Image Gallery */}
        <div className="space-y-6">
             <h2 className="text-3xl font-bold font-serif text-pink-900">System Screenshots</h2>
             <div className="grid md:grid-cols-2 gap-6">
                <img src={projectImage2} className="rounded-2xl shadow-lg border border-pink-100" alt="Head Of IT Dashboard, Views roster records." />
                <img src={projectImage3} className="rounded-2xl shadow-lg border border-pink-100" alt="Staff shift viewing" />
                <img src={projectImage4} className="rounded-2xl shadow-lg border border-pink-100" alt="Supervisors viewing the attendance logs and reports for their units" />
                <img src={projectImage5} className="rounded-2xl shadow-lg border border-pink-100" alt="Supervisors viewing the rosters they've uploaded" />
                <img src={projectImage6} className="rounded-2xl shadow-lg border border-pink-100" alt="Staff dashboard for swapping shifts." />
                <img src={projectImage7} className="rounded-2xl shadow-lg border border-pink-100" alt="Head Of IT Dashboard, Views staff detials." />
             </div>
        </div>

        {/* footer */}
        <div className="text-center pt-10">
            <a href="https://github.com/os4yomore/PAU-SMS" target="_blank" className="inline-flex items-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-pink-700 transition-all hover:-translate-y-1">
                <FaGithub /> View Source Code
            </a>
        </div>

      </main>
    </div>
  );
};

export default ProjectDetails;