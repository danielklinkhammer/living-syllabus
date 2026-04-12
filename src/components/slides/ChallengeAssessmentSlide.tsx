import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { LayoutDashboard, Component, Scale } from 'lucide-react'

export default function ChallengeAssessmentSlide() {
  const criteria = [
    {
      title: "Ästhetische Reichweite",
      weight: "30%",
      icon: <LayoutDashboard className="w-5 h-5 text-fhgr-accent" />,
      color: "border-fhgr-accent/30 bg-fhgr-accent/5",
      desc: "Haben die Studierenden explorativ gearbeitet? Wie radikal, mutig und unterscheidbar sind die 3 gewählten Stile? Verlangt eine hohe Bandbreite im Prompting und ein Gespür für echte visuelle Identitäten."
    },
    {
      title: "Systemische Dekonstruktion",
      weight: "40%",
      icon: <Component className="w-5 h-5 text-fhgr-petrol" />,
      color: "border-fhgr-petrol/30 bg-fhgr-petrol/5",
      desc: "Das Reverse-Engineering: Wie präzise wurde das generierte UI in Textform (`design.md`) zerlegt? Sind die dokumentierten Design-Regeln so analytisch erfasst, dass man das Design rein textbasiert reproduzieren könnte?"
    },
    {
      title: "Cross-Matrix Konsistenz",
      weight: "30%",
      icon: <Scale className="w-5 h-5 text-purple-400" />,
      color: "border-purple-500/30 bg-purple-500/5",
      desc: "Bleibt die Informationsarchitektur über alle Stile hinweg logisch stabil, während umgekehrt die visuelle DNA (Regelwerk) innerhalb der 3 Ansichten eines Stils strikt und halluzinationsfrei erhalten bleibt?"
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 lg:mt-0 items-center">
        
        {/* Left: Intro */}
        <div className="lg:col-span-5">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge C · Part 3</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Bewertungsschema</h2>
            <p className="text-lg text-white/50 leading-relaxed mb-6">
              Dieses Modul wächst organisch in eurer zentralen Figma-Datei und fließt am Ende des Semesters in die Gesamtbewertung des Portfolios ein. Es gibt hier keinen isolierten Abgabe-Link.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-white/60 leading-relaxed">
              <strong>Die Essenz:</strong> Wir bewerten am Ende nicht, wer handwerklich am schönsten "Pixel schubst" – sondern wir bewerten das analytische Systemverständnis und den strategischen Umgang mit den KI-Generatoren.
            </div>
          </motion.div>
        </div>

        {/* Right: The Rubric */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="text-sm font-semibold tracking-widest uppercase text-white/30 ml-2 mb-2">Die 3 Säulen der Evaluierung</div>
          
          {criteria.map((c, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
            >
              <Card variant="glass" className={`!p-6 border transition-all duration-300 ${c.color}`}>
                <div className="flex gap-4 items-start w-full">
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 shrink-0 mt-1">
                    {c.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2 w-full">
                      <h3 className="font-bold text-white text-lg">{c.title}</h3>
                      <span className="font-mono text-xs font-bold px-2 py-1 bg-black/40 rounded text-white/70">
                        {c.weight}
                      </span>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
