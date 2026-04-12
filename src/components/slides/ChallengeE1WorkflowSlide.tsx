import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { Telescope, BrainCircuit, Blocks, PlaySquare } from 'lucide-react'

export default function ChallengeE1WorkflowSlide() {
  const workflow = [
    {
      step: "01",
      title: "Exploration",
      desc: "Öffnet den AI Studio Showcase und klickt euch durch 2-3 verschiedene Projekte. Testet, wie sie mit Videos, Bildern oder reinem Text als Input umgehen.",
      icon: <Telescope className="w-5 h-5 text-blue-400" />
    },
    {
      step: "02",
      title: "Prompt Engineering",
      desc: "Schaut euch bei eurer Favoriten-App den System Prompt an: Welche verdeckten Instruktionen wurden der KI gegeben, damit sie die gewünschte Rolle annimmt?",
      icon: <BrainCircuit className="w-5 h-5 text-indigo-400" />
    },
    {
      step: "03",
      title: "Prototyping",
      desc: "Nutzt das AI Studio als eure Entwicklungsumgebung. Verändert das UI, passt den Prompt an oder baut eine völlig neue Funktion drumherum.",
      icon: <Blocks className="w-5 h-5 text-purple-400" />
    },
    {
      step: "04",
      title: "Testing & Mocking",
      desc: "Testet eure modifizierte App. Solltet ihr für den echten API-Loop keinen API-Key besitzen, nutzt die App als UI-Prototyp und werft statische Mockup-Daten ein.",
      icon: <PlaySquare className="w-5 h-5 text-red-400" />
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-5xl w-full mx-auto relative z-10">
        
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} className="mb-12">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge E.1 · Part 3</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Der Workspace</h2>
          <p className="text-lg text-white/50 max-w-3xl leading-relaxed">
            Eine KI-App zu bauen ist kein Hexenwerk mehr. Nutzt diesen iterativen Workflow, um fremde Code-Beispiele in eure eigenen, kreativen Prototypen zu verwandeln.
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
