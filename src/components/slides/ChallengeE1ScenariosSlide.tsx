import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import Card from '../ui/Card'
import { FileSearch, MessageSquareQuote, Video, Globe2 } from 'lucide-react'

const showcases = [
  {
    title: "Video Insights Analyzer",
    desc: "Eine App, die Video-Uploads (Gemini Vision) analysiert und z.B. Handlungsstränge, Objekte oder Emotionen maschinell extrahiert.",
    feature: "Multi-Modal Video Processing",
    url: "https://aistudio.google.com/apps?source=showcase&showcaseTag=featured",
    color: "from-blue-500/10 to-transparent",
    border: "border-blue-500/30",
    icon: <Video className="w-8 h-8 text-blue-400" />
  },
  {
    title: "Document Data Extractor",
    desc: "Einen PDF-Reader bauen, der gezielt Rechnungsdaten (OCR) ausliest und als saubere JSON-Struktur für euer Programm exportiert.",
    feature: "Unstructured to Structured Data",
    url: "https://aistudio.google.com/apps?source=showcase&showcaseTag=featured",
    color: "from-fhgr-petrol/10 to-transparent",
    border: "border-fhgr-petrol/30",
    icon: <FileSearch className="w-8 h-8 text-fhgr-petrol" />
  },
  {
    title: "Interactive Storyteller",
    desc: "Ein Chat-Interface, das basierend auf User-Eingaben dynamisch Geschichten strickt, Rollen annimmt und den Status der Narrative behält.",
    feature: "Context Retention & System Prompts",
    url: "https://aistudio.google.com/apps?source=showcase&showcaseTag=featured",
    color: "from-purple-500/10 to-transparent",
    border: "border-purple-500/30",
    icon: <MessageSquareQuote className="w-8 h-8 text-purple-400" />
  },
  {
    title: "Language Translator Tool",
    desc: "Weit mehr als Google Translate: Eine App, die Slang oder branchenspezifische Begriffe (Medizin, Jura) kontextbezogen übersetzt.",
    feature: "Prompt Constraints & Tone Control",
    url: "https://aistudio.google.com/apps?source=showcase&showcaseTag=featured",
    color: "from-orange-500/10 to-transparent",
    border: "border-orange-500/30",
    icon: <Globe2 className="w-8 h-8 text-orange-400" />
  }
]

export default function ChallengeE1ScenariosSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center lg:overflow-hidden relative z-10 w-full max-w-6xl mx-auto">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-10 text-center">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge E.1 · Phase 2</div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Der AI Showcase</h2>
          <p className="text-white/50 text-lg max-w-3xl mx-auto">
            Ihr findet auf <a href="https://aistudio.google.com/apps?source=showcase&showcaseTag=featured" target="_blank" rel="noreferrer" className="text-fhgr-petrol underline">AI Studio</a> (oder auch bei v0/Lovable) dutzende Open-Source AI-Beispiele. Analysiert 2-3 Modelle davon. Diese 4 Rubriken eignen sich hervorragend für den Start:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {showcases.map((scenario, i) => (
            <motion.div key={i} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: i * 0.1}}>
              <a href={scenario.url} target="_blank" rel="noreferrer" className="block h-full cursor-pointer">
                <Card 
                  variant="glass"
                  className={`!p-6 flex flex-col h-full border ${scenario.border} bg-gradient-to-br ${scenario.color} group hover:bg-white/5 transition-colors`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 group-hover:scale-110 transition-transform">
                      {scenario.icon}
                    </div>
                    <div className="text-[10px] uppercase font-mono tracking-widest text-fhgr-accent bg-fhgr-petrol/20 px-3 py-1 rounded-full border border-fhgr-petrol/30">
                      {scenario.feature}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-white text-xl mb-2 group-hover:text-fhgr-petrol transition-colors">{scenario.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed flex-1">
                    {scenario.desc}
                  </p>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </SlideLayout>
  )
}
