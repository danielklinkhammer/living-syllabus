import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { Search, GitBranch, LayoutTemplate } from 'lucide-react'

export default function ChallengeDIntroSlide() {
  const steps = [
    { 
      title: "Pattern Research", 
      desc: "Ihr durchsucht Mobbin.com nach bewährten UX-Patterns und Best-Practices für komplexe Onboardings und Checkouts.",
      icon: <Search className="w-8 h-8 text-fhgr-petrol" />
    },
    { 
      title: "Flow Mapping", 
      desc: "Ihr skizziert den Nutzerweg visuell in FigJam oder Whimsical. Dazu gehören auch Abzweigungen, Log-Ins und Fehler-Popups (Unhappy Paths).",
      icon: <GitBranch className="w-8 h-8 text-purple-400" />
    },
    { 
      title: "IA & Wireframing", 
      desc: "Mittels Relume übersetzt ihr euren theoretischen Pfad in eine echte Sitemap. Daraus erstellt ihr mit wenigen Klicks fertige Low-Fi Ansichten.",
      icon: <LayoutTemplate className="w-8 h-8 text-orange-400" />
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-5xl w-full mx-auto relative z-10 text-center">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-fhgr-petrol to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg mb-6 shadow-fhgr-petrol/20">
             <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge D · Part 1</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Die Aufgabenstellung</h2>
          <div className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto mb-12 space-y-4">
            <p>
              <strong>Das Ziel:</strong> Ihr baut ein inhaltliches Fundament. Wer wild drauf los designt, scheitert an der Komplexität. Ihr benötigt vorab <strong>User Flows</strong> und <strong>Informationsarchitektur (IA)</strong>!
            </p>
            <p className="text-base text-white/50">
              Ihr widmet euch einem komplexen Service-Szenario. Eure Aufgabe ist es, den gesamten Ablauf von Start bis Ziel zu definieren – systematisch analysiert in Mobbin, abstrahiert als Flowchart, und schließlich mit KI (Relume) zu einem Wireframe-Grundgerüst umgewandelt.
            </p>
          </div>
        </motion.div>

        <div className="text-sm font-semibold tracking-widest uppercase text-white/30 mb-6">Der Kern der Aufgabe:</div>

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
