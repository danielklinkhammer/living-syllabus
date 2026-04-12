import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'

const tools = [
  { name: 'Figma Make', type: 'Design-to-Code', speed: '⚡⚡⚡', design: '⭐⭐⭐', backend: '❌', code: '⭐⭐' },
  { name: 'Lovable', type: 'Prompt-to-App', speed: '⚡⚡⚡', design: '⭐', backend: '✅ Supabase', code: '⭐⭐' },
  { name: 'AI Studio', type: 'Full-Stack', speed: '⚡⚡', design: '⭐', backend: '✅ Firebase', code: '⭐⭐' },
  { name: 'v0.dev', type: 'Components', speed: '⚡⚡⚡', design: '⭐⭐', backend: '❌', code: '⭐⭐⭐' },
  { name: 'Bolt.new', type: 'Full-Stack Web', speed: '⚡⚡⚡', design: '⭐', backend: '⚠️ WebCont', code: '⭐⭐' },
]

export default function MakerToolsSlide() {
  return (
    <SlideLayout>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col justify-center h-full"
      >
        <div className="mb-10 block">
          <span className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3 block">Tech für Designer · Part 1</span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Maker Tools im Vergleich</h1>
          <p className="text-white/50 max-w-2xl text-lg leading-relaxed">
            Wann ist "Vibe Coding" gut, und wann braucht ihr einen professionellen IDE-Stack? Die Wahl des Werkzeugs beeinflusst euer technologisches Limit.
          </p>
        </div>

        <div className="bg-fhgr-petrol-dark/20 border border-fhgr-petrol/20 rounded-3xl overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-6 p-6 border-b border-fhgr-petrol/20 bg-black/40 text-[10px] font-mono text-fhgr-petrol-light uppercase tracking-widest">
            <div className="col-span-2">Tool</div>
            <div>Kategorie</div>
            <div>Speed</div>
            <div>Design Control</div>
            <div>Backend</div>
          </div>
          
          {tools.map((tool, i) => (
            <motion.div 
              key={tool.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              className="grid grid-cols-6 p-6 border-b border-white/5 items-center cursor-default transition-colors duration-200"
            >
              <div className="col-span-2 text-xl font-bold flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-fhgr-teal/10 border border-fhgr-teal/30 flex items-center justify-center text-fhgr-teal shadow-inner text-sm shrink-0">
                  {tool.name.charAt(0)}
                </div>
                {tool.name}
              </div>
              <div className="text-white/60 font-mono text-xs">{tool.type}</div>
              <div className="tracking-[0.2em]">{tool.speed}</div>
              <div className="tracking-[0.2em] opacity-80">{tool.design}</div>
              <div className={`text-sm ${tool.backend.includes('✅') ? 'text-green-400 font-semibold' : tool.backend.includes('⚠️') ? 'text-yellow-400' : 'text-white/30'}`}>
                {tool.backend}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideLayout>
  )
}
