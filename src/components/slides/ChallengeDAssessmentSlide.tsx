import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { Target, AlertTriangle, Blocks } from 'lucide-react'

export default function ChallengeDAssessmentSlide() {
  const criteria = [
    {
      title: "Flow Logic & Edge Cases",
      desc: "Ist der User Flow in sich logisch aufgebaut? Wurden Sackgassen bedacht (Unhappy Paths) und fängt das Flowchart Fehlermeldungen sauber mit Rückwegen ab?",
      weight: "40%",
      icon: <AlertTriangle className="w-5 h-5 text-red-400" />,
      color: "from-red-500/10 to-transparent",
      borderColor: "border-red-500/30"
    },
    {
      title: "Pattern Nutzung",
      desc: "Erfindet ihr das Rad neu oder habt ihr etablierte App-Mechaniken via Mobbin adaptiert? Ein guter Flow greift auf bekannte UX-Heuristiken zurück (z.B. bei Checkout-Wizards).",
      weight: "30%",
      icon: <Blocks className="w-5 h-5 text-indigo-400" />,
      color: "from-indigo-500/10 to-transparent",
      borderColor: "border-indigo-500/20"
    },
    {
      title: "Relume Translation",
      desc: "Wie gut wurde der theoretische Flowchart in die Relume-Sitemap (und Wireframes) übersetzt? Wurde das KI-Ergebnis nachgebessert oder nur der erste Wurf blind abgenommen?",
      weight: "30%",
      icon: <Target className="w-5 h-5 text-fhgr-accent" />,
      color: "from-fhgr-petrol/10 to-transparent",
      borderColor: "border-fhgr-petrol/30"
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-4xl w-full mx-auto relative z-10">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-center mb-12">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge D · Part 5</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Bewertungskriterien</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Wir bewerten hier keine hochglänzenden UI-Farben, sondern <strong>pure Informationsarchitektur</strong>. Eine hübsche App, in der der User in Dead-Ends rennt, fällt an diesem Punkt der Konzeption durch.
          </p>
        </motion.div>

        <div className="space-y-4">
          {criteria.map((item, idx) => (
            <motion.div key={idx} initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay: 0.1 * idx}}>
              <Card variant="glass" className={`!p-6 flex flex-col md:flex-row md:items-center gap-6 border ${item.borderColor} bg-gradient-to-r ${item.color}`}>
                <div className="p-4 bg-black/40 rounded-xl border border-white/5 flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
                <div className="md:text-right pt-4 md:pt-0 border-t md:border-t-0 border-white/10 md:border-l md:pl-6">
                  <div className="text-[10px] uppercase font-mono tracking-widest text-white/40 mb-1">Gewichtung</div>
                  <div className="text-3xl font-bold text-white">{item.weight}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
