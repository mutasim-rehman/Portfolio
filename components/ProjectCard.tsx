import React from 'react';
import { Project } from '../types';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Visual themes for the cards
const THEMES = [
    { 
        id: 'patisserie',
        name: 'The Pâtisserie',
        bg: 'bg-hotel-pink', 
        border: 'border-hotel-blue', 
        borderStyle: 'border-4 border-double',
        titleFont: 'font-cinematic',
        textColor: 'text-hotel-red',
        accentColor: 'bg-hotel-blue',
        descriptionColor: 'text-hotel-red/80',
        corner: 'rounded-none',
        shadow: 'shadow-[8px_8px_0_0_rgba(146,168,209,0.5)]'
    },
    { 
        id: 'sommelier',
        name: 'The Sommelier',
        bg: 'bg-hotel-purple', 
        border: 'border-hotel-gold', 
        borderStyle: 'border-[6px]',
        titleFont: 'font-serif italic',
        textColor: 'text-hotel-gold',
        accentColor: 'bg-hotel-red',
        descriptionColor: 'text-hotel-cream/90',
        corner: 'rounded-xl',
        shadow: 'shadow-2xl'
    },
    { 
        id: 'chef',
        name: 'Chef\'s Table',
        bg: 'bg-hotel-cream', 
        border: 'border-hotel-dark', 
        borderStyle: 'border-2',
        titleFont: 'font-sans font-bold tracking-tighter uppercase',
        textColor: 'text-hotel-dark',
        accentColor: 'bg-hotel-dark',
        descriptionColor: 'text-hotel-dark/70',
        corner: 'rounded-sm',
        shadow: 'shadow-retro'
    },
    { 
        id: 'private',
        name: 'Private Dining',
        bg: 'bg-hotel-green', 
        border: 'border-hotel-cream', 
        borderStyle: 'border-[1px] outline outline-4 outline-hotel-green outline-offset-4',
        titleFont: 'font-garamond italic text-4xl',
        textColor: 'text-white',
        accentColor: 'bg-hotel-gold',
        descriptionColor: 'text-white/90',
        corner: 'rounded-lg',
        shadow: 'shadow-xl'
    }
];

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const theme = THEMES[index % THEMES.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.15, type: 'spring' }}
      viewport={{ once: true, margin: "-50px" }}
      className={`
        group relative w-full h-full flex flex-col 
        ${theme.bg} ${theme.border} ${theme.borderStyle} ${theme.corner} ${theme.shadow}
        transition-transform duration-300 hover:-translate-y-2
      `}
    >
        {/* Decorative Badge */}
        <div className={`
            absolute -top-4 left-1/2 transform -translate-x-1/2 
            ${theme.accentColor} text-white px-3 py-1 text-[10px] 
            uppercase tracking-widest font-bold shadow-md z-20
            ${theme.corner === 'rounded-xl' ? 'rounded-full' : 'rounded-none'}
        `}>
            Table No. {project.id}
        </div>

        {/* Image Container */}
        <div className={`
            relative h-48 overflow-hidden m-4 mb-0
            ${theme.id === 'patisserie' ? 'border-b-4 border-dotted border-hotel-blue' : ''}
            ${theme.id === 'sommelier' ? 'rounded-t-lg ring-4 ring-hotel-gold/30' : ''}
            ${theme.id === 'chef' ? 'grayscale group-hover:grayscale-0 transition-all' : ''}
        `}>
             <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Content Body */}
        <div className="p-6 flex flex-col flex-grow text-center relative z-10">
            <h3 className={`text-2xl mb-2 ${theme.titleFont} ${theme.textColor}`}>
                {project.title}
            </h3>
            
            <div className={`w-12 h-0.5 mx-auto mb-4 ${theme.id === 'private' ? 'bg-white' : 'bg-current opacity-30'}`} />

            <p className={`text-sm leading-relaxed mb-6 font-medium ${theme.descriptionColor} font-serif`}>
                {project.description}
            </p>

            <div className="mt-auto">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className={`
                            text-[10px] uppercase tracking-wider px-2 py-1 font-bold
                            bg-white/20 backdrop-blur-sm border border-white/30
                            ${theme.textColor}
                        `}>
                            {tag}
                        </span>
                    ))}
                </div>

                <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                    w-full py-2 flex items-center justify-center gap-2
                    font-cinematic font-bold text-xs uppercase tracking-[0.2em]
                    ${theme.accentColor} text-white
                    hover:brightness-110 transition-all
                    cursor-pointer
                `}>
                    View Recipe <ArrowUpRight size={14} />
                </a>
            </div>
        </div>
    </motion.div>
  );
};