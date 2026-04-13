import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { Telescope, BrainCircuit, Blocks, PlaySquare } from 'lucide-react'

export default function ChallengeE1WorkflowSlide() {
  const workflow = [
    {
      step: "01",
      title: "Exploration (FigJam)",
      desc: "Sammelt eure Favoriten auf dem Board. Diskutiert im Team und entscheidet euch für den Fokus eures Prototypen (AI Core, Motion Vibe oder Template Hack).",
      icon: <Telescope className="w-5 h-5 text-blue-400" />
    },
    {
      step: "02",
      title: "Context Injection",
      desc: "Übergt die Fremdlogik an die KI: (1) Screenshot vom UI (Vision), (2) URL posten (bei Agenten wie Cursor), oder (3) den Raw-Code (.tsx) hart in den Prompt kopieren.",
      icon: <BrainCircuit className="w-5 h-5 text-indigo-400" />
    },
    {
      step: "03",
      title: "Vibe Prompting",
      desc: "Die Instruktion. Beispiel: 'Nimm diese referenzierte Aceternity-Komponente und baue mir damit eine Landingpage. Passe die Farben an diesen Screenshot an.'",
      icon: <Blocks className="w-5 h-5 text-purple-400" />
    },
    {
      step: "04",
      title: "Iterate & Hack",
      desc: "Die KI macht Fehler. Keine Panik. Kopiert den Error-Log roh zurück in den Chat. Vergesst API-Keys: Werft vorerst überall statische Mock-Daten rein.",
      icon: <PlaySquare className="w-5 h-5 text-red-400" />
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-5xl w-full mx-auto relative z-10">
        
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} className="mb-12">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge E.1 · Part 3</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Der Workflow</h2>
          <p className="text-lg text-white/50 max-w-3xl leading-relaxed">
            Eine KI-App zu bauen ist kein Hexenwerk mehr. Der schwierigste Part ist der "Initial Context". Wie kommen eure Inspirationen vom Browser in euren AI-Builder?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflow.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{delay: 0.1 * idx}}
              className="relative"
            >
              <Card variant="glass" className="!p-6 h-full border border-white/5 bg-[#0A1220] hover:bg-white/5 transition-colors group flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-3xl font-bold font-mono text-white/10 group-hover:text-white/20 transition-colors">
                    {item.step}
                  </div>
                  <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </Card>
              
              {/* Connector line on desktop */}
              {idx < workflow.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-white/10 z-0" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
