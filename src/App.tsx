/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Menu,
  X,
  ChevronRight,
  Download,
  GraduationCap,
  Briefcase,
  Code
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS, PROJECTS, EXPERIENCES, EDUCATION } from './constants';
import AIChat from './components/AIChat';
import ResumeModal from './components/ResumeModal';

const SectionHeader = ({ title, description }: { title: string, description?: string }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold text-slate-900 mb-2">{title}</h2>
    {description && <p className="text-slate-500">{description}</p>}
    <div className="h-1 w-12 bg-brand mt-4 rounded-full" />
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'My Skills', href: '#skills' },
    { name: 'My Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-brand">
            Sravya Kadari<span className="text-slate-900"></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => setIsResumeOpen(true)}
              className="btn-primary !py-2 !px-4 text-sm flex items-center gap-2"
            >
              <Download size={16} /> Resume
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 px-6 py-8 space-y-4"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-medium text-slate-700 hover:text-brand"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsResumeOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Download size={18} /> My Resume
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
              Hi there! I'm a Fresher
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
               I'm <span className="text-brand">Kadari Sravya.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              A passionate software developer who loves solving problems and learning new technologies. I specialize in AI and Full-Stack development.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary flex items-center gap-2">
                See My Work <ChevronRight size={18} />
              </a>
              <a href="#contact" className="btn-outline">
                Let's Talk
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="aspect-square bg-brand/10 rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" 
                alt="Coding at night" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/10 to-transparent" />
            </div>
            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Code size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Skills</p>
                <p className="text-sm font-bold text-slate-900">Java & Python</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                <GraduationCap size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Education</p>
                <p className="text-sm font-bold text-slate-900">B.Tech Graduate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader title="About Me" description="Who am I and what do I do?" />
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {PERSONAL_INFO.about}
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{EDUCATION.degree}</h4>
                  <p className="text-slate-500 text-sm">{EDUCATION.institution} • {EDUCATION.grade}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 shrink-0">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Looking for Opportunities</h4>
                  <p className="text-slate-500 text-sm">I'm excited to start my career and contribute to innovative projects.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">My Interests</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Artificial Intelligence', 'Web Development', 'Data Science', 'Machine Learning', 'Cloud Computing', 'Mobile Apps'].map(interest => (
                <div key={interest} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <div className="w-2 h-2 bg-brand rounded-full" />
                  <span className="text-sm font-medium text-slate-700">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-slate-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">My Skills</h2>
            <p className="text-slate-400">These are the tools and technologies I'm good at.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((group) => (
              <div key={group.category} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-brand/50 transition-all">
                <h3 className="text-brand font-bold mb-6 text-sm uppercase tracking-wider">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-700 text-slate-200 text-xs font-medium rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container">
        <SectionHeader title="My Projects" description="Things I've built recently." />
        
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <motion.div 
              key={project.title}
              whileHover={{ y: -5 }}
              className="card flex flex-col h-full"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Experience" description="My professional journey so far." />
          
          <div className="space-y-8">
            {EXPERIENCES.map((exp) => (
              <div key={exp.company} className="relative pl-8 border-l-2 border-slate-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-brand rounded-full border-4 border-white" />
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{exp.company}</h3>
                      <p className="text-brand font-medium">{exp.role}</p>
                    </div>
                    <span className="text-sm font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full">{exp.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-600 text-sm flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <SectionHeader title="Let's Connect" description="I'm always open to new opportunities and collaborations." />
            <div className="space-y-8 mt-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-brand">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email Me</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-bold text-slate-900 hover:text-brand transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-brand">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">LinkedIn</p>
                  <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" className="text-lg font-bold text-slate-900 hover:text-brand transition-colors">
                    Kadari Sravya
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-8">Send me a message</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Your Name</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand focus:bg-white outline-none transition-all text-slate-900" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Your Email</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand focus:bg-white outline-none transition-all text-slate-900" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand focus:bg-white outline-none transition-all text-slate-900 resize-none" placeholder="How can I help you?" />
              </div>
              <button type="button" className="w-full btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100 bg-slate-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Kadari Sravya.
          </p>
          <div className="flex gap-6">
            <a href={`https://${PERSONAL_INFO.github}`} target="_blank" className="text-slate-400 hover:text-brand transition-colors"><Github size={20} /></a>
            <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" className="text-slate-400 hover:text-brand transition-colors"><Linkedin size={20} /></a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-brand transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <AIChat />

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  );
}
