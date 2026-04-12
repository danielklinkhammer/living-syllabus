import { motion, AnimatePresence } from 'framer-motion';
import type { DaySchedule } from '../config/syllabus.config';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isMobile: boolean;
  schedule: DaySchedule[];
  activeGroupId: string;
  currentIndex: number;
  onSelectGroup: (groupId: string) => void;
  onSelectSlide: (groupId: string, index: number) => void;
  onOpenDesignSystem: () => void;
}

export default function Sidebar({ isOpen, setIsOpen, isMobile, schedule, activeGroupId, currentIndex, onSelectGroup, onSelectSlide, onOpenDesignSystem }: SidebarProps) {
  // Flatten schedule into a single array for the continuous path
  const allGroups = schedule.flatMap(d => d.groups);
  const activeIndex = allGroups.findIndex(g => g.id === activeGroupId);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{ width: isOpen ? (isMobile ? '85vw' : 320) : 76 }}
        className="relative h-full bg-fhgr-dark border-r border-white/10 flex-shrink-0 overflow-hidden z-50 transition-colors shadow-[4px_0_24px_rgba(0,0,0,0.2)]"
      >
        <div 
          className={`w-[320px] h-full flex flex-col pt-8 pb-6 scrollable overflow-y-auto ${!isOpen ? 'cursor-pointer hover:bg-white/5' : ''}`}
          onClick={() => {
            if (!isOpen) setIsOpen(true)
          }}
        >
        <div className="flex items-center gap-2 mb-10 pl-[8px] pr-6 relative w-full pt-1">
          <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center">
            <img 
               src="/dwfai_logo.png" 
               alt="DWFAI Logo" 
               className="w-full h-full object-cover scale-[1.25] mix-blend-screen drop-shadow-md brightness-90 contrast-200 opacity-90" 
               style={{ WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 90%)', maskImage: 'radial-gradient(circle, black 60%, transparent 90%)' }}
            />
          </div>
          <div className={`flex-1 transition-opacity duration-300 ${!isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <h2 className="text-fhgr-beige font-bold text-[15px] leading-tight tracking-wide pr-2">Designing for and with AI</h2>
            <p className="text-fhgr-petrol-light text-[9px] uppercase font-mono tracking-widest mt-1">Block 2</p>
          </div>
          <div className={`transition-opacity duration-300 ${!isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <button 
              onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 text-white/50 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
          </div>
        </div>

        <div className="flex-1 px-6">
          <div className="relative">
            {allGroups.map((group, groupIndex) => {
              const isActiveGroup = group.id === activeGroupId;
              const isPast = groupIndex < activeIndex;

              return (
                <div key={group.id} className="relative pb-8 last:pb-0">
                  {/* Connection Line to next item */}
                  {groupIndex !== allGroups.length - 1 && (
                    <div className={`absolute left-[13px] top-8 bottom-0 w-[2px] rounded-full transition-colors duration-500 delay-100 ${isPast ? 'bg-fhgr-petrol' : 'bg-white/10'}`} />
                  )}

                  <div className="flex items-start gap-4 relative z-10">
                    <div className="flex flex-col items-center">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectGroup(group.id);
                        }}
                        className={`w-7 h-7 mt-0.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300
                          ${isActiveGroup ? 'border-fhgr-petrol bg-fhgr-petrol-dark text-white ring-4 ring-fhgr-petrol/20' : 
                            isPast ? 'border-fhgr-petrol bg-fhgr-petrol text-white' : 
                            'border-white/20 bg-[#060F1A] text-white/30 hover:border-white/40 hover:text-white/60'}`}
                      >
                         <div className="transform scale-[0.65]">
                            {group.icon}
                         </div>
                      </button>

                      <AnimatePresence>
                        {isActiveGroup && group.slides.length > 1 && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pt-4 space-y-1.5 flex flex-col items-center"
                          >
                            {group.slides.map((slide, slideIdx) => {
                              const isSlideActive = isActiveGroup && currentIndex === slideIdx;
                              return (
                                <div key={`dot-${slide.id}`} className="h-[34px] flex items-center justify-center">
                                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 z-10 ${isSlideActive ? 'bg-fhgr-petrol-light shadow-[0_0_8px_rgba(131,197,190,0.8)] scale-150' : 'bg-white/20'}`} />
                                </div>
                              )
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className={`flex-1 pt-1 transition-opacity duration-300 ${!isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectGroup(group.id);
                        }}
                        className={`w-full text-left rounded-lg transition-all duration-200 block
                          ${isActiveGroup ? 'text-white' : 'text-white/60 hover:text-white'}
                        `}
                      >
                        <span className={`block text-[15px] font-semibold transition-colors ${isActiveGroup ? 'text-fhgr-beige' : ''}`}>{group.title}</span>
                      </button>
                      
                      <AnimatePresence>
                        {isActiveGroup && group.slides.length > 1 && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pt-4 space-y-1.5"
                          >
                            {group.slides.map((slide, slideIdx) => {
                              const isSlideActive = isActiveGroup && currentIndex === slideIdx;
                              return (
                                <button
                                  key={`text-${slide.id}`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onSelectSlide(group.id, slideIdx);
                                  }}
                                  className={`w-full text-left px-3 rounded-md text-sm transition-colors flex items-center h-[34px] ${
                                    isSlideActive ? 'text-fhgr-petrol-light bg-fhgr-petrol/10 border border-fhgr-petrol/20' : 'text-white/40 hover:text-white/80 hover:bg-white/5 border border-transparent'
                                  }`}
                                >
                                  <span className="truncate leading-tight text-[13px]">{slide.title}</span>
                                </button>
                              )
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className={`mt-2 pt-4 border-t border-white/10 px-6 pb-4 transition-opacity duration-300 ${!isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="flex items-start gap-4 relative z-10">
            <div className="flex flex-col items-center">
              <button 
                onClick={(e) => { e.stopPropagation(); onOpenDesignSystem(); }}
                className="w-7 h-7 mt-0.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 border-white/20 bg-[#060F1A] text-white/30 hover:border-fhgr-petrol/50 hover:bg-fhgr-petrol/10 hover:text-fhgr-petrol-light"
              >
                <div className="transform scale-[0.65]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                </div>
              </button>
            </div>
            
            <div className="flex-1 pt-1">
              <button 
                onClick={(e) => { e.stopPropagation(); onOpenDesignSystem(); }}
                className="w-full text-left rounded-lg block text-white/60 hover:text-white transition-all duration-200"
              >
                <span className="block text-[15px] font-semibold transition-colors">Templates & Styles</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  );
}
