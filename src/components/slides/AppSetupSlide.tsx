import { motion } from 'framer-motion'
import { Layers, Zap, Braces, Database, Palette, Code2 } from 'lucide-react'
import SlideLayout from '../layout/SlideLayout'

export default function AppSetupSlide() {
  return (
    <SlideLayout>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl w-full h-full flex flex-col justify-center"
      >
        <div className="mb-8">
          <span className="text-fhgr-petrol-light uppercase tracking-widest text-xs font-mono mb-2 block">Tech für Designer · Part 2</span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">The Pro Stack (Under the Hood)</h1>
          <p className="text-white/50 max-w-3xl text-lg">
            Im Gegensatz zu statischen Tools wie Figma baut diese App auf echten Web-Technologien auf. 
            Das Zentrum bildet <strong className="text-white">React</strong> – die beliebte Library für Benutzeroberflächen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 flex-1 max-h-[600px]">
          {/* Main React Highlight Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 bg-fhgr-petrol-dark/30 border border-fhgr-petrol/30 rounded-3xl p-8 relative overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Zap className="w-32 h-32" />
            </div>
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-fhgr-petrol border border-fhgr-petrol-light flex items-center justify-center text-white shadow-[0_0_20px_rgba(33,150,243,0.3)] shrink-0">
                <Zap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">React 19 & Vite</h3>
                <span className="text-xs font-mono text-white/50 tracking-widest uppercase">UI Components & State</span>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 flex-1 relative z-10 text-white/80">
              <div className="flex flex-col justify-between">
                <p className="mb-4 leading-relaxed text-sm">
                  React revolutioniert Web-Entwicklung durch <strong className="text-white">wiederverwendbare Components</strong>. Stell es dir wie Smart Components in Figma vor, aber mit Code-Logik.
                </p>
                <div className="space-y-4">
                  <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                    <h4 className="text-white font-semibold mb-1 flex items-center gap-2"><Code2 className="w-4 h-4"/> Components</h4>
                    <p className="text-xs text-white/60">Jeder Teil (Sidebar, Button) ist ein eigener Baustein. Definiere ihn einmal und verwende z.B. &lt;Button /&gt; beliebig oft.</p>
                  </div>
                  <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                    <h4 className="text-white font-semibold mb-1 flex items-center gap-2"><Layers className="w-4 h-4"/> State (Zustand)</h4>
                    <p className="text-xs text-white/60">React "merkt" sich Dinge (z.B. isOpen = true). Ändert sich der Zustand, aktualisiert React visuell sofort nur die betroffenen Elemente.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/10 shadow-inner flex flex-col font-mono text-[11px]">
                <div className="bg-white/5 px-4 py-2 border-b border-white/5 text-xs text-white/40 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/50"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/50"></span>
                  <span className="ml-2">Counter.tsx</span>
                </div>
                <div className="p-4 overflow-x-auto text-white/70 leading-5">
                  <span className="text-pink-400">export default function</span> <span className="text-yellow-200">Counter</span>() {'{'}
                  <br/>
                  {'  '}
                  <span className="text-blue-400">const</span> [<span className="text-white">c</span>, <span className="text-yellow-200">setC</span>] = <span className="text-yellow-200">useState</span>(<span className="text-orange-300">0</span>)
                  <br/><br/>
                  {'  '}<span className="text-pink-400">return</span> (
                  <br/>
                  {'    '}&lt;<span className="text-blue-300">button</span> <br/>
                  {'      '}<span className="text-blue-200">onClick</span>={'{'}() <span className="text-pink-400">=&gt;</span> <span className="text-yellow-200">setC</span>(c + <span className="text-orange-300">1</span>){'}'}
                  <br/>
                  {'    '}&gt;
                  <br/>
                  {'      '}Clicks: {'{'}c{'}'}
                  <br/>
                  {'    '}&lt;/<span className="text-blue-300">button</span>&gt;
                  <br/>
                  {'  '})
                  <br/>
                  {'}'}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tailwind CSS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 bg-black/40 border border-white/10 rounded-3xl p-6 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-3 relative z-10">
              <Palette className="w-5 h-5 text-fhgr-petrol-light" />
              <h3 className="font-bold text-white">Tailwind CSS</h3>
            </div>
            <p className="text-white/50 text-[13px] mb-3 relative z-10 leading-relaxed">
              Ersetzt externe CSS-Dateien komplett. Man stylt direkt im HTML-Element via Utility Classes.
            </p>
            <code className="block bg-white/5 p-3 rounded-lg text-xs font-mono text-green-300 border border-white/5 break-words relative z-10">
              class="<span className="text-blue-300">p-4 bg-red-500 rounded</span>"
            </code>
          </motion.div>

          {/* shadcn/ui */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="md:col-span-1 bg-black/40 border border-white/10 rounded-3xl p-6 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-3 relative z-10">
              <div className="w-5 h-5 flex items-center justify-center bg-white text-black font-bold rounded-md text-[10px]">cn</div>
              <h3 className="font-bold text-white">shadcn/ui</h3>
            </div>
            <p className="text-white/50 text-[13px] mb-3 relative z-10 leading-relaxed">
              Die "Geheimzutat" generativer AI-Tools. Kopierbare, fantastisch designte React-Blueprints.
            </p>
            <code className="block bg-white/5 p-3 rounded-lg text-[11px] font-mono text-white/50 border border-white/5 relative z-10">
              npx shadcn add form
            </code>
          </motion.div>

          {/* TS & Framer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-black/40 border border-white/10 rounded-3xl p-6 flex flex-col justify-center"
          >
            <div className="flex justify-between items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Braces className="w-4 h-4 text-blue-400" />
                  <h3 className="font-bold text-white text-sm">TypeScript</h3>
                </div>
                <p className="text-white/50 text-xs leading-relaxed">Striktes Typensystem. Verhindert Fehler während des Schreibens.</p>
              </div>
              <div className="w-px h-16 bg-white/10" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-pink-400" />
                  <h3 className="font-bold text-white text-sm">Framer Motion</h3>
                </div>
                <p className="text-white/50 text-xs leading-relaxed">Feder-Animationen (Springs) für buttersmoothe Slides.</p>
              </div>
            </div>
          </motion.div>

          {/* Deployment */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4 bg-fhgr-olive/10 border border-fhgr-olive/30 rounded-3xl p-6 flex items-center justify-between mt-auto"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-fhgr-olive/20 border border-fhgr-olive/50 flex items-center justify-center text-fhgr-olive-light shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Build & Deploy</h3>
                <p className="text-white/50 max-w-4xl text-sm leading-relaxed">
                  Der "Bundler" (Vite) packt alle React-Komponenten und Tailwind-Klassen und verwandelt sie in winzig komprimiertes HTML & Vanilla JS. Diese Dateien können kostenfrei auf Platformen wie Vercel publiziert werden.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </SlideLayout>
  )
}
