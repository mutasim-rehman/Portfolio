import React from 'react';
import { Section } from '../types';

interface NavigationProps {
  currentSection: Section;
  setSection: (section: Section) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentSection, setSection }) => {
  const floors = [
    { id: Section.RECEPTION, label: "Reception", num: "R" },
    { id: Section.SCREENING, label: "Screening", num: "S" },
    { id: Section.MENU, label: "Menu", num: "M" },
    { id: Section.RESERVATIONS, label: "Booking", num: "B" },
  ];

  return (
    <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      {/* Brass Plate Background */}
      <div className="bg-gradient-to-br from-hotel-gold to-[#8a6e36] p-3 rounded-lg shadow-retro border-2 border-[#5c4722] flex flex-col gap-4 items-center w-20">
        
        {/* Screws */}
        <div className="w-full flex justify-between px-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5c4722] opacity-50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#5c4722] opacity-50"></div>
        </div>

        {floors.map((floor) => (
          <div key={floor.id} className="relative group">
             {/* Label Plate */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-hotel-dark text-hotel-gold px-3 py-1 rounded-sm text-[10px] font-cinematic uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap border border-hotel-gold shadow-lg pointer-events-none transform translate-x-2 group-hover:translate-x-0">
                {floor.label}
            </div>

            <button
                onClick={() => setSection(floor.id)}
                className={`
                w-12 h-12 rounded-full flex items-center justify-center 
                border-4 transition-all duration-300 relative overflow-hidden
                shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]
                ${currentSection === floor.id 
                    ? 'bg-hotel-red border-hotel-cream text-white ring-2 ring-hotel-red/50 ring-offset-2 ring-offset-[#8a6e36]' 
                    : 'bg-[#e8dcc0] border-[#b09b75] text-hotel-dark/50 hover:bg-white hover:text-hotel-dark'}
                `}
            >
                <span className="font-cinematic font-bold text-lg relative z-10">{floor.num}</span>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent pointer-events-none"></div>
            </button>
          </div>
        ))}

         {/* Screws */}
         <div className="w-full flex justify-between px-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5c4722] opacity-50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#5c4722] opacity-50"></div>
        </div>
      </div>
    </nav>
  );
};