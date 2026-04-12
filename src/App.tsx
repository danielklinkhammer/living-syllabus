import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SlideContainer from './components/SlideContainer'
import Sidebar from './components/Sidebar'
import DesignSystemViewer from './components/DesignSystemViewer'

import { schedule, allGroups } from './config/syllabus.config'

export default function App() {
  const [activeGroupId, setActiveGroupId] = useState(allGroups[0].id)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => window.innerWidth >= 1024)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024)
  const [isDesignSystemOpen, setIsDesignSystemOpen] = useState(false)

  const activeGroup = allGroups.find(g => g.id === activeGroupId) || allGroups[0]
  const currentSlides = activeGroup.slides

  const next = () => setCurrentIndex(c => Math.min(c + 1, currentSlides.length - 1))
  const prev = () => setCurrentIndex(c => Math.max(c - 1, 0))
  const goTo = (index: number) => setCurrentIndex(index)

  const handleSelectGroup = (groupId: string) => {
    setIsDesignSystemOpen(false)
    setActiveGroupId(groupId)
    setCurrentIndex(0)
  }

  const handleSelectSlide = (groupId: string, index: number) => {
    setIsDesignSystemOpen(false)
    setActiveGroupId(groupId)
    setCurrentIndex(index)
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false)
    }
  }

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(prevMobile => {
        if (mobile && !prevMobile) {
          setIsSidebarOpen(false)
        }
        return mobile;
      });
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div className="flex w-screen h-screen overflow-hidden bg-fhgr-dark">
        <Sidebar 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen}
          isMobile={isMobile}
          schedule={schedule} 
          activeGroupId={activeGroupId}
          currentIndex={currentIndex}
          onSelectGroup={handleSelectGroup}
          onSelectSlide={handleSelectSlide}
          onOpenDesignSystem={() => setIsDesignSystemOpen(true)}
        />
        
        <div className="relative flex-1 flex flex-col h-full overflow-hidden">
          <motion.button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute top-4 left-4 lg:top-6 lg:left-6 z-[60] flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A1624]/90 border border-white/10 hover:bg-[#0A1624] hover:border-fhgr-petrol/50 text-white/50 hover:text-white backdrop-blur-md transition-all shadow-lg text-xs font-mono group"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`mr-1 opacity-50 group-hover:opacity-100 group-hover:text-fhgr-petrol-light transition-all ${isSidebarOpen ? 'rotate-180' : ''}`}>
              {isSidebarOpen ? (
                <path d="M15 18l-6-6 6-6" />
              ) : (
                <>
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                </>
              )}
            </svg>
            <span className="hidden sm:inline">{activeGroup.title}</span>
            <span className="hidden sm:inline opacity-30">/</span>
            <span className="text-white drop-shadow-md truncate max-w-[200px] sm:max-w-none">
              {isDesignSystemOpen ? 'Design System' : currentSlides[currentIndex].title}
            </span>
          </motion.button>

          {isDesignSystemOpen ? (
            <DesignSystemViewer />
          ) : (
            <SlideContainer 
              current={currentIndex} 
              onNext={next} 
              onPrev={prev} 
              onGoTo={goTo}
              total={currentSlides.length}
            >
              {currentSlides.map(slide => slide.component)}
            </SlideContainer>
          )}
        </div>
      </div>
    </>
  )
}
