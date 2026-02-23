import React from 'react';
import { motion } from 'motion/react';
import { X, Printer, Download } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <h3 className="font-bold text-slate-900">Resume Preview</h3>
          <div className="flex items-center gap-2">
            <button 
              onClick={handlePrint}
              className="p-2 hover:bg-slate-200 rounded-lg text-slate-600 transition-colors flex items-center gap-2 text-sm font-medium"
              title="Print Resume"
            >
              <Printer size={18} /> <span className="hidden sm:inline">Print</span>
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-200 rounded-lg text-slate-600 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="flex-1 overflow-y-auto p-8 sm:p-12 bg-white selection:bg-blue-100">
          <div id="resume-content" className="max-w-3xl mx-auto text-slate-800 font-serif">
            {/* Header */}
            <header className="text-center mb-10">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Kadari Sravya</h1>
              <div className="text-sm text-slate-600 flex flex-wrap justify-center gap-x-4 gap-y-1 font-sans">
                <span>(+91) 9866103922</span>
                <span>•</span>
                <a href="mailto:sravyakadari09@gmail.com" className="hover:text-blue-600">sravyakadari09@gmail.com</a>
                <span>•</span>
                <a href="https://linkedin.com/in/sravyakadari" target="_blank" className="hover:text-blue-600">linkedin.com/in/sravyakadari</a>
              </div>
            </header>

            {/* Experience */}
            <section className="mb-8">
              <h2 className="text-xl font-bold border-b-2 border-slate-200 pb-1 mb-4 uppercase tracking-wide font-sans">Experience</h2>
              
              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">Tap Academy</h3>
                  <span className="text-sm text-slate-500 font-sans">Mar 2025 – Aug 2025</span>
                </div>
                <p className="italic text-slate-700 mb-2">Full stack Java Development Intern</p>
                <ul className="list-disc ml-5 space-y-1 text-sm leading-relaxed">
                  <li>Developed a capstone Online Food Delivery System showcasing end-to-end full-stack development—implementing responsive UI, backend logic, and database integration.</li>
                  <li>Gained proficiency in Core and Advanced Java, MySQL for backend development, and HTML, CSS, JavaScript for frontend.</li>
                  <li>Strengthened skills in Object-Oriented Programming, Collections, Multithreading, and Exception Handling through real-world projects.</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">Academic Research</h3>
                  <span className="text-sm text-slate-500 font-sans">Jan 2025 – Jun 2025</span>
                </div>
                <p className="italic text-slate-700 mb-2">Research Intern</p>
                <ul className="list-disc ml-5 space-y-1 text-sm leading-relaxed">
                  <li>Worked on AI and deep learning models for real-time detection.</li>
                  <li>Developed and improved AI and deep learning models for real-time problem detection and response.</li>
                  <li>Performed statistical evaluations to study model behavior under real-time constraints.</li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-8">
              <h2 className="text-xl font-bold border-b-2 border-slate-200 pb-1 mb-4 uppercase tracking-wide font-sans">Projects</h2>
              
              <div className="mb-5">
                <h3 className="font-bold text-lg inline">AI-Driven Ambulance Tracking System</h3>
                <span className="text-sm text-slate-500 font-sans ml-2">(Python, OpenCV, Deep Learning)</span>
                <ul className="list-disc ml-5 mt-2 space-y-1 text-sm leading-relaxed">
                  <li>Engineered an AI-driven system for real-time ambulance tracking and availability prediction using deep learning models.</li>
                  <li>Built a Python-based system integrating real-time data processing and predictive analytics, and demonstrated it at a tech symposium.</li>
                </ul>
              </div>

              <div className="mb-5">
                <h3 className="font-bold text-lg inline">Virtual Mouse Using Hand Gesture</h3>
                <span className="text-sm text-slate-500 font-sans ml-2">(Python, OpenCV)</span>
                <ul className="list-disc ml-5 mt-2 space-y-1 text-sm leading-relaxed">
                  <li>Developed a gesture-based virtual mouse system enabling touch-free cursor control and interaction.</li>
                  <li>Implemented real-time hand movement detection and action mapping to simulate mouse operations accurately.</li>
                </ul>
              </div>

              <div className="mb-5">
                <h3 className="font-bold text-lg inline">Ai Driven Habit Tracker App</h3>
                <span className="text-sm text-slate-500 font-sans ml-2">(HTML, CSS, JavaScript, React, MySQL)</span>
                <ul className="list-disc ml-5 mt-2 space-y-1 text-sm leading-relaxed">
                  <li>Developed an intelligent habit-tracking application that analyzes user behavior to provide personalized insights and progress tracking.</li>
                  <li>Implemented AI-based recommendations and reminders to improve consistency, motivation, and long-term habit formation.</li>
                </ul>
              </div>
            </section>

            {/* Skills */}
            <section className="mb-8">
              <h2 className="text-xl font-bold border-b-2 border-slate-200 pb-1 mb-4 uppercase tracking-wide font-sans">Technical Skills</h2>
              <div className="space-y-1 text-sm">
                <p><span className="font-bold">Programming:</span> C, Python, Java, SQL, JavaScript, HTML, CSS</p>
                <p><span className="font-bold">Core Concepts:</span> Operating Systems, DBMS</p>
                <p><span className="font-bold">Libraries:</span> React.js</p>
                <p><span className="font-bold">Tools:</span> GitHub, VScode</p>
                <p><span className="font-bold">Generative AI:</span> ChatGPT, Perplexity, Hostinger horizons, Gemini (Prompt Engineering)</p>
                <p><span className="font-bold">Databases:</span> MySQL</p>
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className="text-xl font-bold border-b-2 border-slate-200 pb-1 mb-4 uppercase tracking-wide font-sans">Education</h2>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-lg">B.Tech – Computer Science and Engineering (AI & ML)</h3>
                <span className="text-sm text-slate-500 font-sans">2021 – 2025</span>
              </div>
              <div className="flex justify-between items-baseline">
                <p className="italic text-slate-700">Siddhartha institute of technology and sciences</p>
                <span className="font-bold text-slate-900 font-sans">CGPA: 7.54</span>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-xl font-bold border-b-2 border-slate-200 pb-1 mb-4 uppercase tracking-wide font-sans">Certifications</h2>
              <ul className="list-disc ml-5 space-y-1 text-sm leading-relaxed">
                <li>Full Stack java developer intern - Tap Academy</li>
                <li>Google Cloud Computing Foundations - Google Cloud</li>
                <li>Generative AI - Microsoft</li>
                <li>Ethical Hacking - Supraja Technologies</li>
              </ul>
            </section>
          </div>
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body * {
            visibility: hidden;
          }
          #resume-content, #resume-content * {
            visibility: visible;
          }
          #resume-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0 !important;
            margin: 0 !important;
          }
        }
      `}} />
    </div>
  );
}
