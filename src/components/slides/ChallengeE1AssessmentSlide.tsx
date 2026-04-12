import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { Microscope, Zap, Component } from 'lucide-react'

export default function ChallengeE1AssessmentSlide() {
  const criteria = [
    {
      title: "Tiefe der Exploration",
      desc: "Habt ihr euch nur ein einfaches Text-Beispiel angeschaut oder mutig mit Multi-Modalen Eingaben (Vision/Audio) im AI Studio experimentiert? Wir honorieren die Neugierde, das Unbekannte zu testen.",
      icon: <Microscope className="w-6 h-6 text-indigo-400" />,
      color: "from-indigo-500/10 to-transparent",
      borderColor: "border-indigo-500/30"
    },
    {
      title: "Hacking & Mutation",
      desc: "Wurde das Beispiel-Projekt nur stumpf kopiert oder habt ihr versucht, es radikal umzubauen? Es gibt Extrapunkte, wenn eure App eine völlig neue (oder völlig absurde) Funktion übernimmt.",
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      color: "from-purple-500/10 to-transparent",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Reflexion der Limitierung",
      desc: "KI ist nicht perfekt. Ein wichtiger Teil der Bewertung ist eure Erkenntnis: Wo hat das AI-Modell oder euer Prompt bei der Umsetzung versagt? Wo stießen die Auto-Generatoren an ihre Grenzen?",
      icon: <Component className="w-6 h-6 text-fhgr-accent" />,
      color: "from-fhgr-petrol/10 to-transparent",
      borderColor: "border-fhgr-petrol/30"
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-5xl w-full mx-auto relative z-10 text-center">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-12">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge E.1 · Part 5</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Evaluationskriterien</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            In dieser Phase gibt es kaum richtig oder falsch. Wir bewerten euren <strong>Forscherdrang</strong> und eure Bereitschaft, generative Features in echten Interfaces zusammenzubrechen und neu aufzubauen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {criteria.map((item, idx) => (
            <motion.div key={idx} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1 * idx}} className="h-full">
              <Card variant="glass" className={`!p-8 flex flex-col h-full border ${item.borderColor} bg-gradient-to-br ${item.color} group hover:scale-[1.02] transition-all`}>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl w-fit mb-6 group-hover:bg-white/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
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
