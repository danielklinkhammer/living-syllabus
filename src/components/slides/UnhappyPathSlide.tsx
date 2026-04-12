import { motion } from 'framer-motion'
import { AlertOctagon, Bot, UserX, AlertTriangle, ShieldAlert } from 'lucide-react'
import Card from '../ui/Card'

export default function UnhappyPathSlide() {
  const blindspots = [
    { icon: <AlertOctagon className="w-5 h-5"/>, title: "Fehlerbehandlung", desc: "KI generiert selten Screens für Server-Timeouts, fehlgeschlagene Uploads oder 404s." },
    { icon: <Bot className="w-5 h-5"/>, title: "Geschäftslogik", desc: "'Druckmethode X nur mit Stoff Y kombinierbar' – Spezifisches Domänenwissen fehlt den Modellen." },
    { icon: <ShieldAlert className="w-5 h-5"/>, title: "Rechtliches", desc: "Cookie-Consent, AGBs im Checkout, Länderspezifische Steuern werden standardisiert übersprungen." },
    { icon: <UserX className="w-5 h-5"/>, title: "Edge Cases (User Error)", desc: "Was passiert, wenn der User im Checkout 'Zurück' navigiert, offline geht oder Tabs schliesst?" }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 lg:mt-0 items-center">
        
        {/* Left: The Theory */}
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}}>
          <div className="text-red-400/80 text-xs font-mono uppercase tracking-widest mb-3">Cognitive Bias der Maschinen</div>
          <h2 className="text-4xl font-bold mb-6 mt-2 tracking-tight">Das Optimismus-Problem</h2>
          <p className="text-white/60 leading-relaxed mb-6">
            KI-Modelle sind extrem "optimistisch" programmiert. Sie zeichnen fast immer nur den <strong>Happy Path</strong> – den idealen Ablauf bei Sonnenschein, bei dem der User sofort zahlt und alles funktioniert.
          </p>
          <Card variant="primary" delay={0.1} className="!p-5 bg-red-500/10 border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.1)] mt-8 text-left">
            <h3 className="font-bold text-red-400 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5"/> The Unhappy Path
            </h3>
            <p className="text-sm text-white/70 italic mb-4">
              "Ein gutes Product Design verbringt 20% der Zeit mit dem Happy Path und 80% der Zeit damit, die Edge Cases zu designen."
            </p>
            <div className="flex gap-2 w-full">
              <div className="flex-1 bg-green-500/20 text-green-400 px-3 py-2 rounded font-mono text-xs text-center border border-green-500/30">
                KI Generiert
              </div>
              <div className="flex-1 bg-red-500/20 text-red-400 px-3 py-2 rounded font-mono text-xs text-center border border-red-500/30">
                Human Required
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Right: The Blindspots */}
        <div className="space-y-3 lg:col-span-1">
          <div className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">Typische KI-Blindspots</div>
          
          {blindspots.map((item, idx) => (
            <Card 
              key={idx}
              delay={0.3 + (idx * 0.1)}
              variant="glass"
              className="!p-4 hover:bg-white/10 transition-colors"
            >
              <div className="flex gap-4 items-start w-full text-left">
                <div className="p-2 rounded-lg bg-[#1A1A1A] border border-white/5 shrink-0 text-fhgr-petrol-light">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 text-sm">{item.title}</h4>
                  <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </div>
  )
}
