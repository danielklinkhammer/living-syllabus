import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { Image, FileCode2, Link2, Paintbrush2, Bug, Database } from 'lucide-react'

export default function ChallengeE1WorkflowSlide() {
  const tactics = [
    {
      title: "Visual Injection",
      desc: "Nutzt Screenshots von Dribbble, Apple oder euren Figma-Skizzen. Per Vision-API könnt ihr dem Agenten befehlen: 'Baue die Struktur exakt so nach.'",
      icon: <Image className="w-5 h-5 text-pink-400" />,
      color: "from-pink-500/10 to-transparent",
      borderColor: "border-pink-500/30"
    },
    {
      title: "Raw Code Injection",
      desc: "Für komplexe Animationen (z.B. Aceternity): Kopiert den enormen .tsx-Codeblock, werft ihn in den Chat und sagt: 'Integriere das als meinen Header.'",
      icon: <FileCode2 className="w-5 h-5 text-blue-400" />,
      color: "from-blue-500/10 to-transparent",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Docs Injection",
      desc: "Braucht ihr eine externe API (z.B. Wetter)? Gebt Cursor per '@Docs' direkt den Link zur API-Dokumentation, damit die modernste Datensyntax genutzt wird.",
      icon: <Link2 className="w-5 h-5 text-indigo-400" />,
      color: "from-indigo-500/10 to-transparent",
      borderColor: "border-indigo-500/30"
    },
    {
      title: "Setup First, Style Second",
      desc: "Baut zuerst eine hässliche Basis, bei der die Mechanik klappt. Erst danach kommt der Vibe-Prompt: 'Refactore nun das ganze CSS auf ein Dark Neon-Theme.'",
      icon: <Paintbrush2 className="w-5 h-5 text-yellow-400" />,
      color: "from-yellow-500/10 to-transparent",
      borderColor: "border-yellow-500/30"
    },
    {
      title: "Error-Driven Fixes",
      desc: "Wenn der Screen crasht: Nicht selbst im Code suchen! Kopiert den roten Error-Log aus der Konsole und lasst den Agenten seine eigenen Fehler aufräumen.",
      icon: <Bug className="w-5 h-5 text-red-400" />,
      color: "from-red-500/10 to-transparent",
      borderColor: "border-red-500/30"
    },
    {
      title: "Radical Mocking",
      desc: "Verliert beim Prototypen keine Zeit mit Datenbanken. Lasst die KI ein langes 'mockData' JSON-Array generieren, um dem UI sofort Leben einzuhauchen.",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      color: "from-emerald-500/10 to-transparent",
      borderColor: "border-emerald-500/30"
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 py-12 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-10 text-center lg:text-left">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge E.1 · Part 3</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Die Vibe Coding Taktiken</h2>
          <p className="text-lg text-white/50 max-w-3xl leading-relaxed mx-auto lg:mx-0">
            Verabschiedet euch vom linearen Phasen-Workflow. Vibe Coding ist chaotisch und hochiterativ. Bedient euch bei eurem Prototypen an diesem Arsenal aus 6 Injection- und Refactoring-Hacks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tactics.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{delay: 0.1 * idx}}
            >
              <Card variant="glass" className={`!p-6 h-full border ${item.borderColor} bg-gradient-to-br ${item.color} group hover:bg-white/5 transition-colors flex flex-col`}>
                <div className="flex justify-between items-start mb-5">
                  <h3 className="text-xl font-bold text-white max-w-[80%]">{item.title}</h3>
                  <div className={`p-2 bg-black/40 rounded-lg border ${item.borderColor}`}>
                    {item.icon}
                  </div>
                </div>
                <p className="text-sm text-white/60 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
