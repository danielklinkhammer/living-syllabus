import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { Bot, LineChart, Code2, ShieldAlert } from 'lucide-react'

export default function ChallengeDWorkflowSlide() {
  const workflow = [
    {
      step: "01",
      title: "KI Sparring (Textuell)",
      desc: "Gebt ChatGPT euer Szenario und bittet es: 'Definiere die Service-Architektur. Welche Microservices, API-Calls und Akteure sind involviert? Welche Edge-Cases gibt es?'",
      icon: <Bot className="w-5 h-5 text-blue-400" />
    },
    {
      step: "02",
      title: "Blueprint Modellierung",
      desc: "Basierend auf dem KI-Output zeichnet ihr in Whimsical den System-Flow oder lasst euch von ChatGPT direkt ein 'Mermaid.js Sequence Diagram' generieren.",
      icon: <LineChart className="w-5 h-5 text-indigo-400" />
    },
    {
      step: "03",
      title: "Sitemap Generierung",
      desc: "Geht zu Relume.io und generiert aus eurer Blueprint-Logik die passenden Wireframes der Frontend-Ansicht.",
      icon: <Code2 className="w-5 h-5 text-purple-400" />
    },
    {
      step: "04",
      title: "Logik prüfen",
      desc: "Zieht harte Kanten! Fragt wieder ChatGPT: 'Hier ist mein Blueprint. Was habe ich übersehen? Wie verhält sich mein Flow, wenn die Datenbank keine Verbindung hat?'",
      icon: <ShieldAlert className="w-5 h-5 text-red-400" />
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-5xl w-full mx-auto relative z-10">
        
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} className="mb-12">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge D · Part 4</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Die AI Pipeline</h2>
          <p className="text-lg text-white/50 max-w-3xl leading-relaxed">
            Versucht nicht, die Architektur von Grund auf im Kopf zu lösen. Wendet den <strong>Vibe Coding</strong> Ansatz an: Nutzt Large Language Models systematisch als Architektur-Sparringspartner.
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
