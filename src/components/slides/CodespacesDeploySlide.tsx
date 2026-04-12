import { Cloud, Globe, Code2 } from 'lucide-react'
import SlideLayout from '../layout/SlideLayout'
import Card from '../ui/Card'

export default function CodespacesDeploySlide() {
  return (
    <SlideLayout>
      <div className="w-full flex flex-col justify-center h-full">
        <div className="mb-10 max-w-4xl">
          <span className="text-fhgr-petrol-light uppercase tracking-widest text-xs font-mono mb-2 block">Tech für Designer · Part 2</span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Cloud IDE & Deployment</h1>
          <p className="text-white/50 text-lg leading-relaxed">
            Ihr müsst keine komplexen Entwicklerumgebungen auf euren Rechnern installieren. 
            Wir arbeiten zu 100% in der Cloud und publizieren von dort direkt ins World Wide Web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* GitHub Codespaces */}
          <Card variant="dark" delay={0.1} className="!p-8 group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Cloud className="w-40 h-40" />
            </div>
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-fhgr-petrol/20 border border-fhgr-petrol-light flex items-center justify-center text-fhgr-petrol-light shadow-inner shrink-0">
                <Code2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">GitHub Codespaces</h3>
                <span className="text-xs font-mono text-fhgr-petrol-light/80 tracking-widest uppercase">Zero-Setup IDE</span>
              </div>
            </div>

            <div className="relative z-10 space-y-4">
              <p className="text-white/60 text-sm leading-relaxed">
                Ein Codespace ist eine vollwertige VS Code Instanz, die versteckt auf Microsoft-Servern läuft. Ihr öffnet sie einfach im Browser.
              </p>
              
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-white/80 items-start">
                  <span className="text-green-400 mt-0.5">✅</span> 
                  <span><strong>Garantierte Umgebung:</strong> Alle haben das gleiche Setup, keine "bei mir geht es nicht" Fehler.</span>
                </li>
                <li className="flex gap-3 text-sm text-white/80 items-start">
                  <span className="text-green-400 mt-0.5">✅</span> 
                  <span><strong>Copilot Ready:</strong> Die KI ist für Studierende direkt vorinstalliert.</span>
                </li>
                <li className="flex gap-3 text-sm text-white/80 items-start">
                  <span className="text-green-400 mt-0.5">✅</span> 
                  <span><strong>Git Integrated:</strong> Automatisch mit eurem Repository verknüpft.</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">Workflow</div>
                <code className="block bg-black/40 p-3 rounded text-xs font-mono text-white/50 border border-white/5">
                  Repo erstellen → Klick auf grünen "Code" Button → "Create Codespace"
                </code>
              </div>
            </div>
          </Card>

          {/* Vercel & Firebase */}
          <Card variant="dark" delay={0.2} className="!p-8 group !bg-fhgr-olive/10 !border-fhgr-olive/30">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Globe className="w-40 h-40" />
            </div>
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-fhgr-olive/20 border border-fhgr-olive flex items-center justify-center text-fhgr-olive-light shadow-inner shrink-0">
                <Globe className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Hosting & Publishing</h3>
                <span className="text-xs font-mono text-fhgr-olive/80 tracking-widest uppercase">Die Live-URL</span>
              </div>
            </div>

            <div className="relative z-10 space-y-6">
              
              {/* Option A */}
              <div className="bg-black/20 p-5 rounded-2xl border border-white/5">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">Vercel (Frontend)</h4>
                <p className="text-xs text-white/50 mb-3">Perfekt für unsere React Dashboards.</p>
                <div className="flex items-center justify-between text-xs font-mono bg-white/5 p-2 rounded block">
                  <span className="text-white/40">git push</span>
                  <span className="text-fhgr-olive-light">Auto Deploy ⚡</span>
                </div>
              </div>

              {/* Option B */}
              <div className="bg-black/20 p-5 rounded-2xl border border-white/5">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">Firebase (Full-Stack)</h4>
                <p className="text-xs text-white/50 mb-3">Wird spannend, sobald wir z.B. User Logins bauen.</p>
                <div className="flex flex-col gap-1 text-xs font-mono bg-white/5 p-2 rounded text-white/40">
                  <div><span className="text-yellow-400">~/project $</span> firebase init</div>
                  <div><span className="text-yellow-400">~/project $</span> firebase deploy</div>
                </div>
              </div>

            </div>
          </Card>

        </div>
      </div>
    </SlideLayout>
  )
}
