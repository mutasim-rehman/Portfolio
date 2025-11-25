import React, { useState } from 'react';
import { Scene } from './components/Scene';
import { Navigation } from './components/Navigation';
import { ProjectCard } from './components/ProjectCard';
import { PROJECTS, CINEMA_PLAYLIST, MAIN_COURSE_SKILLS, DESSERT_SKILLS } from './constants';
import { Section } from './types';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Mail, MapPin, UtensilsCrossed, Bell, Film, PlayCircle } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.RECEPTION);
  const [currentFilmIndex, setCurrentFilmIndex] = useState(0);

  const scrollToSection = (section: Section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const SectionTitle = ({ subtitle, title }: { subtitle: string, title: string }) => (
      <div className="text-center mb-16 relative">
          <span className="font-cinematic text-xs text-hotel-red uppercase tracking-[0.4em] mb-2 block font-bold">{subtitle}</span>
          <h2 className="font-serif text-5xl md:text-6xl text-hotel-dark relative inline-block z-10">
            {title}
            <span className="absolute -z-10 bottom-2 left-0 w-full h-3 bg-hotel-gold/30 -rotate-1"></span>
          </h2>
      </div>
  );

  return (
    <div className="relative min-h-screen bg-hotel-cream text-hotel-dark font-sans selection:bg-hotel-red selection:text-white overflow-x-hidden">

      {/* 3D Background - The Bistro Facade */}
      <Scene />

      {/* Cinematic Overlays */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-[0.15] bg-noise mix-blend-multiply"></div>
      <div className="fixed inset-0 pointer-events-none z-10 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(44,44,44,0.15)_100%)]"></div>

      {/* Mobile Nav Overlay (Simple for now) */}
      <div className="fixed top-0 left-0 w-full z-40 bg-hotel-cream/90 backdrop-blur-sm p-4 flex justify-between items-center md:hidden border-b border-hotel-gold">
         <span className="font-cinematic font-bold text-hotel-red">Mutasim ur Rehman</span>
         <button onClick={() => scrollToSection(Section.RESERVATIONS)} className="text-hotel-dark"><Bell size={20}/></button>
      </div>

      {/* Main Navigation - Elevator Panel */}
      <Navigation currentSection={activeSection} setSection={scrollToSection} />

      {/* Main Content Area */}
      <main className="relative z-20 min-h-screen flex flex-col pt-20 pb-24 px-4 md:px-8 max-w-7xl mx-auto">

        {/* Grand Header - Always Visible but changes subtly */}
        <header className="text-center mb-16 relative perspective-1000">
             <motion.div
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="inline-block"
             >
                <div className="flex justify-center items-center gap-4 text-hotel-gold mb-4 opacity-80">
                    <div className="h-[1px] w-12 bg-hotel-gold"></div>
                    <Star size={12} fill="currentColor" />
                    <Star size={16} fill="currentColor" className="-mt-1" />
                    <Star size={12} fill="currentColor" />
                    <div className="h-[1px] w-12 bg-hotel-gold"></div>
                </div>

                <h1 className="font-cinematic text-4xl md:text-7xl lg:text-8xl font-black text-hotel-red uppercase tracking-widest drop-shadow-sm leading-tight">
                    Mutasim<br/>
                    <span className="block text-hotel-purple text-2xl md:text-5xl lg:text-6xl font-serif italic capitalize tracking-normal mt-2 transform -rotate-1 text-transparent bg-clip-text bg-gradient-to-r from-hotel-purple to-hotel-blue">
                        ur Rehman
                    </span>
                </h1>

                <div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-8 font-cinematic text-xs tracking-widest text-hotel-dark/60">
                    <span>Head Chef of Data</span>
                    <span>&bull;</span>
                    <span>Visual Sommelier</span>
                    <span>&bull;</span>
                    <span>AI Architect</span>
                </div>
            </motion.div>
        </header>

        {/* Content Stages */}
        <AnimatePresence mode='wait'>

            {/* RECEPTION SECTION */}
            {activeSection === Section.RECEPTION && (
                <motion.section
                    key="reception"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center max-w-4xl mx-auto"
                >
                    <div className="bg-white p-1 md:p-2 shadow-2xl rotate-1">
                        <div className="border-4 border-double border-hotel-gold p-8 md:p-16 bg-hotel-cream relative">
                             {/* Corner Decorations */}
                             <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-hotel-red"></div>
                             <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-hotel-red"></div>
                             <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-hotel-red"></div>
                             <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-hotel-red"></div>

                            <SectionTitle subtitle="Part I" title="The Reception" />

                            <p className="font-serif text-xl md:text-2xl text-center text-hotel-dark/80 leading-loose mb-10 italic">
                                "Welcome to the Grand Bistro of Ideas, where every line of code is seasoned with creativity."
                            </p>

                            <div className="font-sans text-center text-hotel-dark/70 max-w-2xl mx-auto leading-relaxed space-y-4">
                                <p>
                                    I am Mutasim, your Head Chef of Technology. As a Data Science student at FAST-NUCES, I blend the raw ingredients of algorithms with the garnish of game development and astrophysics.
                                </p>
                                <p>
                                    My kitchen is dedicated to creating impactful digital solutions that not only function perfectly but are plated with thoughtful design.
                                </p>
                            </div>

                            <div className="mt-12 flex justify-center">
                                <button
                                    onClick={() => scrollToSection(Section.MENU)}
                                    className="group relative px-10 py-4 bg-hotel-red text-white font-cinematic font-bold uppercase tracking-[0.25em] transition-all hover:bg-hotel-purple shadow-lg overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-3">
                                        <UtensilsCrossed size={18} /> View Menu
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 transform -translate-x-full skew-x-12 group-hover:animate-[shimmer_1s_infinite]"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.section>
            )}

            {/* SCREENING SECTION */}
            {activeSection === Section.SCREENING && (
                 <motion.section
                    key="screening"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center max-w-5xl mx-auto w-full"
                >
                     <SectionTitle subtitle="Part II" title="Screening Room" />

                     <div className="w-full bg-hotel-dark p-4 rounded-lg shadow-2xl border-4 border-hotel-gold relative">
                         {/* Theatre Curtains Effect */}
                         <div className="absolute -left-2 top-4 bottom-4 w-4 bg-hotel-red rounded-l-lg border-l border-hotel-dark/50 shadow-inner z-10"></div>
                         <div className="absolute -right-2 top-4 bottom-4 w-4 bg-hotel-red rounded-r-lg border-r border-hotel-dark/50 shadow-inner z-10"></div>

                         <div className="relative aspect-video w-full bg-black overflow-hidden rounded border border-white/20">
                            {/* Adding key forces reload when source changes */}
                             <video
                                key={currentFilmIndex}
                                controls
                                className="w-full h-full object-contain"
                                poster={CINEMA_PLAYLIST[currentFilmIndex].poster}
                             >
                                 <source src={CINEMA_PLAYLIST[currentFilmIndex].source} type="video/mp4" />
                                 Your browser does not support the video tag.
                             </video>
                         </div>

                         <div className="mt-6 text-center px-8">
                             <h3 className="text-hotel-gold font-cinematic text-2xl uppercase tracking-widest mb-2">
                                {CINEMA_PLAYLIST[currentFilmIndex].title}
                             </h3>
                             <p className="text-hotel-cream/70 font-serif italic max-w-2xl mx-auto">
                                {CINEMA_PLAYLIST[currentFilmIndex].description}
                             </p>
                         </div>

                         {/* Film Strip Selector */}
                         <div className="mt-8 pt-6 border-t border-hotel-gold/20">
                            <h4 className="font-cinematic text-xs text-hotel-gold/50 uppercase tracking-[0.2em] mb-4 text-center">Featured Screenings</h4>
                            <div className="flex flex-wrap justify-center gap-4">
                                {CINEMA_PLAYLIST.map((film, index) => (
                                    <button
                                        key={film.id}
                                        onClick={() => setCurrentFilmIndex(index)}
                                        className={`group relative w-24 md:w-32 aspect-video rounded overflow-hidden border-2 transition-all duration-300 ${
                                            currentFilmIndex === index 
                                            ? 'border-hotel-red scale-110 shadow-[0_0_15px_rgba(155,35,53,0.5)]' 
                                            : 'border-hotel-gold/30 opacity-60 hover:opacity-100 hover:border-hotel-gold'
                                        }`}
                                    >
                                        <img src={film.poster} alt={film.title} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                                            {currentFilmIndex === index ? (
                                                 <div className="w-2 h-2 rounded-full bg-hotel-red animate-pulse"></div>
                                            ) : (
                                                <PlayCircle size={20} className="text-white opacity-80" />
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                         </div>

                         <div className="flex justify-center mt-8 pb-2">
                             <button onClick={() => scrollToSection(Section.MENU)} className="text-hotel-gold hover:text-white transition-colors flex items-center gap-2 font-cinematic text-xs uppercase tracking-[0.2em]">
                                 <Film size={14}/> Back to The Menu
                             </button>
                         </div>
                     </div>
                </motion.section>
            )}

            {/* MENU SECTION */}
            {activeSection === Section.MENU && (
                 <motion.section
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full"
                >
                    <SectionTitle subtitle="Part III" title="The Grand Menu" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-0">
                        {PROJECTS.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </motion.section>
            )}

            {/* RESERVATIONS SECTION */}
            {activeSection === Section.RESERVATIONS && (
                 <motion.section
                    key="reservations"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto w-full"
                >
                    <SectionTitle subtitle="Part IV" title="Reservations" />

                    <div className="bg-hotel-purple text-hotel-cream p-1 shadow-2xl mx-auto transform -rotate-1">
                        <div className="border border-hotel-gold/50 p-10 md:p-14 bg-gradient-to-br from-hotel-purple to-[#564878]">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    <h3 className="font-cinematic text-2xl text-hotel-gold border-b border-hotel-gold/30 pb-4">
                                        Chef's Specialties
                                    </h3>

                                    {/* Main Course Skills */}
                                    <div>
                                        <h4 className="font-cinematic text-xs text-hotel-gold/80 uppercase tracking-[0.2em] mb-3">Main Course</h4>
                                        <ul className="space-y-2 font-serif text-md italic text-hotel-pink/90">
                                            {MAIN_COURSE_SKILLS.map((skill, idx) => (
                                                <li key={idx} className="flex items-center gap-3">
                                                    <span className="w-1.5 h-1.5 bg-hotel-gold rounded-full"></span> {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Dessert Skills */}
                                    <div className="pt-2">
                                        <h4 className="font-cinematic text-xs text-hotel-gold/80 uppercase tracking-[0.2em] mb-3">Desserts</h4>
                                        <ul className="space-y-2 font-serif text-md italic text-hotel-pink/90">
                                            {DESSERT_SKILLS.map((skill, idx) => (
                                                <li key={idx} className="flex items-center gap-3">
                                                    <span className="w-1.5 h-1.5 bg-hotel-gold rounded-full"></span> {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-8 space-y-4 border-t border-white/5">
                                        <div className="flex items-center gap-4 text-hotel-cream">
                                            <Mail className="text-hotel-gold" size={18} />
                                            <span className="font-sans tracking-wide text-sm">motasimurrehman565@gmail.com</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-hotel-cream">
                                            <MapPin className="text-hotel-gold" size={18} />
                                            <span className="font-sans tracking-wide text-sm">Islamabad, Pakistan</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 p-6 border border-white/10 rounded-sm">
                                    <h4 className="font-cinematic text-sm font-bold text-hotel-gold uppercase tracking-widest mb-6">Book a Table</h4>
                                    <form className="space-y-4">
                                        <input type="text" placeholder="Name of Guest" className="w-full bg-transparent border-b border-hotel-gold/30 py-2 font-serif text-hotel-cream placeholder-hotel-cream/30 focus:outline-none focus:border-hotel-gold transition-colors" />
                                        <input type="email" placeholder="Contact (Email)" className="w-full bg-transparent border-b border-hotel-gold/30 py-2 font-serif text-hotel-cream placeholder-hotel-cream/30 focus:outline-none focus:border-hotel-gold transition-colors" />
                                        <textarea rows={3} placeholder="Dietary Requirements (Message)" className="w-full bg-transparent border-b border-hotel-gold/30 py-2 font-serif text-hotel-cream placeholder-hotel-cream/30 focus:outline-none focus:border-hotel-gold transition-colors resize-none"></textarea>
                                        
                                        <button className="w-full mt-4 bg-hotel-gold text-hotel-dark font-cinematic font-bold uppercase text-xs py-4 tracking-[0.2em] hover:bg-white transition-colors">
                                            Confirm Booking
                                        </button>
                                    </form>
                                    <div className="mt-6 flex justify-center gap-4">
                                        <a href="https://github.com/Mutasim2514" target="_blank" rel="noreferrer" className="text-hotel-gold hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Github</a>
                                        <a href="https://www.linkedin.com/in/mutasim-ur-rehman/" target="_blank" rel="noreferrer" className="text-hotel-gold hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">LinkedIn</a>
                                        <a href="https://www.instagram.com/mutasim_rehman/" target="_blank" rel="noreferrer" className="text-hotel-gold hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Instagram</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.section>
            )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="mt-auto pt-24 text-center relative z-20">
            <div className="w-8 h-8 mx-auto bg-hotel-gold rotate-45 mb-6 shadow-lg"></div>
            <p className="font-cinematic text-[10px] text-hotel-dark/50 uppercase tracking-[0.3em]">
                Mutasim ur Rehman &copy; {new Date().getFullYear()} &bull; 3 Michelin Stars
            </p>
        </footer>

      </main>
    </div>
  );
};

export default App;