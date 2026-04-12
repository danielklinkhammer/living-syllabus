import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { Sparkles, Pickaxe, TestTube2 } from 'lucide-react'

export default function ChallengeE1IntroSlide() {
  const steps = [
    { 
      title: "1. Prompt Engineering", 
      desc: "Ihr durchlauft den AI Studio Showcase und analysiert die verwendeten Prompts. Wie steuert man ein LLM, damit es die Rolle einer App übernimmt?",
      icon: <Sparkles className="w-8 h-8 text-fhgr-petrol" />
    },
    { 
      title: "2. Reverse Engineering", 
      desc: "Ihr nehmt eine bestehende KI-Anwendung auseinander und versucht den Source-Code in Tools wie Lovable oder v0.dev zu rekonstruieren.",
      icon: <Pickaxe className="w-8 h-8 text-purple-400" />
    },
    { 
      title: "3. Mutate & Extend", 
      desc: "Sobald eure Basis-KI-App läuft, erweitert ihr sie um eigene, komplexere Features oder baut ihr ein visuell komplett neues Interface.",
      icon: <TestTube2 className="w-8 h-8 text-orange-400" />
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-5xl w-full mx-auto relative z-10 text-center">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-fhgr-petrol to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg mb-6 shadow-fhgr-petrol/20">
             <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge E.1 · Part 1</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">AI App Exploration</h2>
          <div className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto mb-8 space-y-4">
            <p>
              <strong>Das Ziel:</strong> Ihr verlasst die Welt der Wireframes und taucht in die faszinierende Entwicklungs-Sandbox echter KI-Applikationen ab (Multi-Modal Vision, Audio, Text-Generation).
            </p>
            <p className="text-base text-white/50">
              Wir nutzen das <a href="https://aistudio.google.com/apps?source=showcase&showcaseTag=featured" target="_blank" rel="noreferrer" className="text-fhgr-petrol underline hover:text-white transition-colors">Google AI Studio</a> als Forschungslabor. Eure Sandbox-Challenge: Erkundet die verfügbaren Generative-AI Schnittstellen, testet 2-3 komplexe Feature-Beispiele aus, und entwickelt dann eines davon zu einer eigenen, veränderten App weiter.
            </p>
          </div>
        </motion.div>

        <div className="text-sm font-semibold tracking-widest uppercase text-white/30 mb-6">Wie ihr vorgeht:</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full">
          {steps.map((s, idx) => (
            <Card 
              key={idx}
              delay={0.1 * idx}
              variant="glass"
              className="!p-6 flex flex-col items-center text-center group hover:bg-white/5 transition-colors"
            >
              <div className="mb-4 p-4 rounded-full bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>

      </div>
    </div>
  )
}
