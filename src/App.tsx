import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectsStack, type ProjectData } from './components/ProjectsStack';
import { TrustedBy } from './components/TrustedBy';
import { Playground } from './components/Playground';
import { ContactFooter } from './components/ContactFooter';
import { ProjectModal } from './components/ProjectModal';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth',
      });
    }
  };

  // Scroll listener to update active navbar item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'playground', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        if (sectionId === 'home' && window.scrollY < 300) {
          setActiveSection('home');
          break;
        }
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="ca-grid min-h-screen selection:bg-[var(--ca-yellow)] selection:text-[var(--ca-ink)]">
      {/* Subtle paper grain texture overlay */}
      <div className="ca-grain-overlay" aria-hidden="true" />

      {/* Sticky Navigation Header */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Page Content */}
      <main>
        {/* Section 1: Hero */}
        <div id="home">
          <Hero onContactClick={() => handleNavigate('contact')} />
        </div>

        {/* Section 2: About Me & Polaroid Scrapbook */}
        <About />

        {/* Section 3: Featured Works (Sticky Folder Stack) */}
        <ProjectsStack onSelectProject={(project) => setSelectedProject(project)} />

        {/* Section 4: Trusted By & Mascot */}
        <TrustedBy />

        {/* Section 5: Interactive Playground Canvas */}
        <Playground />

        {/* Section 6: Big Contact Sticky Card & Footer */}
        <ContactFooter onNavigate={handleNavigate} />
      </main>

      {/* Interactive Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
