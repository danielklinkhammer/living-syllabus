import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { Baseline, ShieldAlert, Sparkles, Wand2, Layers, Search } from 'lucide-react'

export default function StitchVsMakeSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-4 lg:px-12 overflow-y-auto lg:overflow-hidden relative custom-scrollbar">
      <div className="max-w-7xl w-full mx-auto relative z-10 py-12 pt-20">
        
        {/* WIP Header Banner */}
        <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} className="flex justify-center mb-8">
           <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-mono tracking-widest uppercase">
              <ShieldAlert className="w-4 h-4" /> State of the Industry: Wild West
           </div>
        </motion.div>

        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">System-Kampf: Exploration vs. One-Shot</h2>
          <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
            Aktuell streitet die Industrie um den Standard der Zukunft. Es gibt keinen klaren Gewinner, 
            dafür zwei völlig gegensätzliche Philosophien, wie Agenten Design-Systeme lernen und anwenden.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Left: Google Stitch (Exploration & Danger to Figma) */}
          <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay: 0.2}}>
            <Card variant="glass" className="h-full !p-8 border-fhgr-petrol/30 bg-gradient-to-br from-fhgr-petrol/10 to-transparent relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                 <Baseline className="w-32 h-32" />
              </div>
              
              <div className="flex justify-between items-start mb-6">
                 <div className="flex items-center gap-3">
                   <div className="p-3 bg-fhgr-petrol/20 rounded-xl">
                     <Baseline className="w-6 h-6 text-fhgr-petrol-light" />
                   </div>
                   <h3 className="text-2xl font-bold">Google Stitch</h3>
                 </div>
                 <div className="text-[10px] font-mono text-fhgr-petrol bg-fhgr-petrol/10 px-2 py-1 rounded uppercase">The Explorer</div>
              </div>
              
              <div className="space-y-6">
                 <div>
                    <h4 className="flex items-center gap-2 font-bold text-fhgr-petrol-light mb-2"><Search className="w-4 h-4" /> Sea of Designs</h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Stitch ist <strong>explorativ</strong>. Der Output ist selten nur ein Screen, sondern eine endlose Matrix an iterativen Layout-Entwürfen. Es sucht nicht <em>die</em> Lösung, sondern spannt den Lösungsraum auf.
                    </p>
                 </div>
                 
                 <div>
                    <h4 className="flex items-center gap-2 font-bold text-fhgr-petrol-light mb-2"><Layers className="w-4 h-4" /> Integration: Leichtgewichtige MD</h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Feeded durch die <code>DESIGN.md</code>. Weil der Ansatz text-nativ ist, funktioniert er derzeit extrem zuverlässig und fehlerfrei.
                    </p>
                 </div>

                 <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-lg mt-4">
                    <h4 className="text-xs font-mono uppercase text-orange-400 mb-1">Strategische Gefahr</h4>
                    <p className="text-xs text-orange-300/80 leading-relaxed">
                      Stitch entkoppelt UI-Design komplett vom klassischen Canvas. Es dekonstruiert die Notwendigkeit, Pixel von Hand hin und her zu schieben – und läuft damit Figma massiv den Rang ab.
                    </p>
                 </div>
              </div>
            </Card>
          </motion.div>

          {/* Right: Figma Make & Design */}
          <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay: 0.3}} className="flex flex-col gap-4 h-full">
            
            {/* Make Layer */}
            <Card variant="glass" className="flex-1 !p-8 border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 to-transparent relative overflow-hidden group">
              <div className="flex justify-between items-start mb-6">
                 <div className="flex items-center gap-3">
                   <div className="p-3 bg-indigo-500/20 rounded-xl">
                     <FigmaIcon className="w-6 h-6 text-indigo-400" />
                   </div>
                   <h3 className="text-2xl font-bold">Figma Make</h3>
                 </div>
                 <div className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded uppercase">The AI Studio</div>
              </div>
              
              <div className="space-y-6">
                 <div>
                    <h4 className="flex items-center gap-2 font-bold text-indigo-300 mb-2"><Wand2 className="w-4 h-4" /> Prompt-to-Build</h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Make orchestriert das Deployment. Es ist ein "One-Shot" Tool. Du gibst Anweisungen, es baut <em>ein</em> Resultat basierend auf fixen Komponenten.
                    </p>
                 </div>

                 <div>
                    <h4 className="flex items-center gap-2 font-bold text-indigo-300 mb-2"><Baseline className="w-4 h-4" /> Integration: Komplexe Extraktion</h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Make saugt Stylesheets aus existierenden Libraries (<code>styles.css</code>). 
                      <span className="text-red-300 block mt-1">
                        <strong>Der Schwachpunkt:</strong> Unitless Values und Quirks zerstören oft das CSS. Man muss diese Fehler händisch in einer <code>Guidelines.md</code> mit dem System "ausdiskutieren".
                      </span>
                    </p>
                 </div>
              </div>
            </Card>

            {/* Figma Design Fallback Layer */}
            <div className="relative pt-2">
               <div className="absolute -top-3 left-10 w-px h-6 bg-indigo-500/50"></div>
               <Card variant="glass" className="!p-4 border-indigo-500/10 bg-indigo-900/10 border-dashed">
                 <div className="flex items-start gap-4">
                    <div className="p-2 bg-indigo-500/10 rounded shrink-0">
                       <FigmaIcon className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                       <h4 className="text-sm font-bold text-indigo-300 mb-1">Figma Design (Der Rettungsanker)</h4>
                       <p className="text-xs text-white/50 leading-relaxed">
                         Weil Make eher ein Studio als ein Explorations-Raum ist, ist man für echte Iterationen nach wie vor auf das klassische, manuelle Figma Canvas ("Pixelschieben") angewiesen.
                       </p>
                    </div>
                 </div>
               </Card>
            </div>
            
          </motion.div>

        </div>

        {/* Honorable Mentions: v0 & Claude */}
        <motion.div 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          transition={{delay: 0.5}}
          className="flex justify-center pb-8"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-full flex-wrap justify-center text-center">
             <div className="flex items-center gap-2 text-white/40 font-mono text-sm">
                <Sparkles className="w-4 h-4 text-white/30" />
                Alternative Pipelines:
             </div>
             <div className="flex items-center gap-4 text-white/70 text-sm font-semibold">
                <span className="hover:text-white transition-colors cursor-default">v0.dev</span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span className="hover:text-white transition-colors cursor-default">Claude Artifacts</span>
             </div>
             <div className="text-xs text-white/40 ml-2">
                (Screenshot-to-Code basierte Generierung ohne echte Token-Architektur)
             </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

function FigmaIcon({className}: {className?: string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
    </svg>
  )
}
