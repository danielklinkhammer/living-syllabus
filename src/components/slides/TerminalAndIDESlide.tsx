import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'

export default function TerminalAndIDESlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-16 items-center">
        
        {/* Left: Terminal */}
        <div className="flex-1 w-full space-y-6">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Tech für Designer · Part 1</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Das Terminal</h2>
            <p className="text-white/50 leading-relaxed mb-6">
              Das Terminal ist keine "Hacker"-Magie, sondern eure textbasierte Fernbedienung. Statt mit der Maus Ordner zu öffnen, tippt ihr Befehle.
            </p>
          </motion.div>

          <motion.div 
            initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.1}}
            className="w-full bg-[#0A1624] border border-fhgr-petrol/30 rounded-xl overflow-hidden font-mono text-[13px]"
          >
            <div className="px-4 py-2 bg-white/5 border-b border-white/5 text-xs text-white/40 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/50"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/50"></span>
              <span className="ml-2">bash - workspace</span>
            </div>
            <div className="p-4 text-white/80 space-y-3">
              <div>
                <span className="text-green-400">~/mein-projekt $</span> <span className="text-white">ls</span>
                <div className="text-white/40 mt-1">index.html  styles.css  app.tsx</div>
              </div>
              <div className="pt-2 border-t border-white/5">
                <span className="text-green-400">~/mein-projekt $</span> <span className="text-white">cd ordner</span>
                <div className="text-white/40 mt-1 text-xs italic">// Wechselt in den Ordner</div>
              </div>
              <div className="pt-2 border-t border-white/5">
                <span className="text-green-400">~/mein-projekt $</span> <span className="text-white text-fhgr-petrol-light">npm run dev</span>
                <div className="text-white/40 mt-1 text-xs italic">// Startet den lokalen Entwicklungs-Server</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: IDE Diagram */}
        <div className="flex-1 w-full space-y-6">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2}}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Die IDE</h2>
            <p className="text-white/50 leading-relaxed mb-6">
              Die <em>Integrated Development Environment</em> (z.B. VS Code oder Cursor) ist eure Leinwand für Code – genau wie Figma die Leinwand für Pixel ist.
            </p>
          </motion.div>

          <motion.div 
            initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.3}}
            className="relative w-full aspect-video rounded-xl border border-white/10 bg-black overflow-hidden flex flex-col p-1 gap-1"
          >
            {/* Mock IDE Layout */}
            <div className="flex flex-1 gap-1">
              {/* Sidebar / Explorer */}
              <div className="w-[25%] bg-[#1A1A1A] rounded flex flex-col p-3 border border-white/5">
                <div className="text-[10px] text-white/30 uppercase tracking-widest font-mono mb-2">1. File Explorer</div>
                <div className="text-xs text-white/50 mb-1">📁 src</div>
                <div className="text-xs text-white/50 mb-1 pl-3">📄 App.tsx</div>
                <div className="text-xs text-white/50 mb-1 pl-3">📄 main.tsx</div>
                <div className="mt-auto pt-2 border-t border-white/5 text-[9px] text-fhgr-petrol-light">Wie das "Layers" Panel in Figma</div>
              </div>

              {/* Main Editor */}
              <div className="flex-1 bg-[#1A1A1A] rounded flex flex-col p-3 border border-white/5 relative">
                <div className="text-[10px] text-white/30 uppercase tracking-widest font-mono mb-2">2. Editor</div>
                <div className="text-xs text-fhgr-accent font-mono">export default function ...</div>
                <div className="mt-auto absolute bottom-3 right-3 text-[9px] text-fhgr-petrol-light">Wie das "Canvas" in Figma</div>
              </div>

              {/* Chat / Copilot */}
              <div className="w-[30%] bg-blue-900/10 rounded flex flex-col p-3 border border-blue-500/20">
                <div className="text-[10px] text-blue-400 uppercase tracking-widest font-mono mb-2">3. KI Chat</div>
                <div className="text-[10px] text-white/60 bg-white/5 p-2 rounded mb-2">Wie zentriere ich das?</div>
                <div className="text-[10px] text-blue-300 bg-blue-500/10 p-2 rounded">Nutze flex items-center...</div>
              </div>
            </div>

            {/* Bottom Terminal */}
            <div className="h-[25%] bg-fhgr-dark rounded flex flex-col p-3 border border-white/5">
              <div className="text-[10px] text-white/30 uppercase tracking-widest font-mono mb-1">4. Integriertes Terminal</div>
              <div className="text-xs text-green-400 font-mono">~/project $ npm install</div>
            </div>
          </motion.div>
        </div>

      </div>
    </SlideLayout>
  )
}
