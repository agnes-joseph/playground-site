// Bento Grid Exploration: 4 Aesthetic Variations

// Mock data with different spans
const mockProjects = [
  { id: 1, title: 'Brand Identity System', type: 'Branding', span: 6, description: 'Complete visual identity for a fintech startup' },
  { id: 2, title: 'E-Commerce Platform', type: 'Development', span: 6, description: 'Full-stack shopping experience' },
  { id: 3, title: 'Mobile App Design', type: 'UI/UX', span: 4, description: 'iOS fitness tracking app' },
  { id: 4, title: 'Editorial Spread', type: 'Print', span: 4, description: 'Magazine layout design' },
  { id: 5, title: 'Photography', type: 'Art Direction', span: 4, description: 'Product photography series' },
  { id: 6, title: 'Dashboard Analytics', type: 'Development', span: 12, description: 'Real-time data visualization platform with complex chart systems' },
]

const colSpan = {
  4: 'col-span-12 sm:col-span-4',
  6: 'col-span-12 sm:col-span-6',
  12: 'col-span-12',
}

// ─────────────────────────────────────────────────────────────────────────────
// VARIATION 1: BOLD
// Heavy contrast, large type, saturated colors, strong borders
// ─────────────────────────────────────────────────────────────────────────────
function BoldCard({ project }) {
  const bgColors = ['bg-yellow-400', 'bg-rose-500', 'bg-indigo-600', 'bg-emerald-500', 'bg-orange-500', 'bg-cyan-400']
  const bg = bgColors[project.id % bgColors.length]
  const isLight = ['bg-yellow-400', 'bg-cyan-400'].includes(bg)
  
  return (
    <div className={`${bg} h-full rounded-none border-4 border-black flex flex-col p-6 group hover:-translate-y-1 transition-transform duration-150 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}>
      <span className={`font-mono text-xs uppercase tracking-widest ${isLight ? 'text-black/60' : 'text-white/60'}`}>
        {project.type}
      </span>
      <h3 className={`font-geist font-black text-2xl sm:text-3xl uppercase leading-none mt-auto ${isLight ? 'text-black' : 'text-white'}`}>
        {project.title}
      </h3>
      <div className={`w-12 h-1 mt-4 ${isLight ? 'bg-black' : 'bg-white'}`} />
    </div>
  )
}

function BoldGrid() {
  return (
    <section className="bg-black p-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <div className="flex items-end justify-between border-b-4 border-white pb-4">
          <h2 className="font-geist font-black text-4xl sm:text-5xl uppercase text-white tracking-tight">
            Bold
          </h2>
          <span className="font-mono text-sm text-white/60">01</span>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {mockProjects.map((project) => (
            <div key={project.id} className={`${colSpan[project.span]} min-h-[220px]`}>
              <BoldCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VARIATION 2: MINIMAL
// Lots of whitespace, subtle borders, restrained typography, quiet palette
// ─────────────────────────────────────────────────────────────────────────────
function MinimalCard({ project }) {
  return (
    <div className="h-full bg-white border border-neutral-200 rounded-sm flex flex-col justify-between p-8 group hover:border-neutral-400 transition-colors duration-300">
      <div className="flex items-start justify-between">
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-light">
          {project.type}
        </span>
        <span className="text-[10px] text-neutral-300">
          0{project.id}
        </span>
      </div>
      <div className="mt-auto">
        <h3 className="font-geist font-light text-lg text-neutral-800 leading-snug">
          {project.title}
        </h3>
        <div className="w-4 h-[1px] bg-neutral-300 mt-4 group-hover:w-8 transition-all duration-300" />
      </div>
    </div>
  )
}

function MinimalGrid() {
  return (
    <section className="bg-neutral-50 p-8 sm:p-16">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">Style</span>
          <h2 className="font-geist font-light text-2xl text-neutral-700">
            Minimal
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-3">
          {mockProjects.map((project) => (
            <div key={project.id} className={`${colSpan[project.span]} min-h-[200px]`}>
              <MinimalCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VARIATION 3: EDITORIAL
// Magazine-inspired, mixed type sizes, elegant serifs, asymmetric rhythm
// ─────────────────────────────────────────────────────────────────────────────
function EditorialCard({ project, index }) {
  const isFeature = project.span === 12 || index === 0
  
  return (
    <div className="h-full bg-stone-100 border-t border-stone-300 flex flex-col group">
      <div className="flex-1 p-6 sm:p-8 flex flex-col">
        <div className="flex items-baseline gap-4 mb-auto">
          <span className="font-lora italic text-stone-400 text-sm">
            No.{String(project.id).padStart(2, '0')}
          </span>
          <span className="text-[9px] uppercase tracking-[0.15em] text-stone-500 font-geist">
            {project.type}
          </span>
        </div>
        
        <div className="mt-8">
          <h3 className={`font-lora ${isFeature ? 'text-3xl sm:text-4xl' : 'text-xl'} text-stone-900 leading-tight`}>
            {project.title}
          </h3>
          {isFeature && (
            <p className="font-geist text-sm text-stone-500 mt-3 max-w-md leading-relaxed">
              {project.description}
            </p>
          )}
        </div>
        
        <div className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-geist text-xs uppercase tracking-wider text-stone-600">Read</span>
          <span className="text-stone-400">→</span>
        </div>
      </div>
    </div>
  )
}

function EditorialGrid() {
  return (
    <section className="bg-stone-200 p-8 sm:p-12">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <div className="border-b border-stone-400 pb-6">
          <span className="font-geist text-[10px] uppercase tracking-[0.25em] text-stone-500 block mb-2">
            Volume III
          </span>
          <h2 className="font-lora text-4xl sm:text-5xl text-stone-800 italic">
            Editorial
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-2">
          {mockProjects.map((project, index) => (
            <div key={project.id} className={`${colSpan[project.span]} min-h-[240px]`}>
              <EditorialCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VARIATION 4: GLASSMORPHIC DARK
// Frosted glass effect, gradients, depth layers, cosmic feel
// ─────────────────────────────────────────────────────────────────────────────
function GlassCard({ project }) {
  return (
    <div className="h-full relative rounded-2xl overflow-hidden group">
      {/* Gradient background layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-cyan-500/20" />
      
      {/* Glass effect */}
      <div className="absolute inset-0 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl" />
      
      {/* Content */}
      <div className="relative h-full p-6 flex flex-col">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">
            {project.type}
          </span>
        </div>
        
        <div className="mt-auto">
          <h3 className="font-geist font-medium text-xl text-white/90 leading-snug">
            {project.title}
          </h3>
          <p className="font-geist text-sm text-white/40 mt-2 line-clamp-2">
            {project.description}
          </p>
        </div>
        
        {/* Hover glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-violet-500/10 via-transparent to-transparent" />
      </div>
    </div>
  )
}

function GlassmorphicGrid() {
  return (
    <section className="bg-slate-950 p-8 sm:p-12 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-violet-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-5xl mx-auto flex flex-col gap-10 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-8 h-[1px] bg-gradient-to-r from-violet-400 to-fuchsia-400" />
          <h2 className="font-geist font-medium text-2xl text-white/80">
            Glassmorphic Dark
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {mockProjects.map((project) => (
            <div key={project.id} className={`${colSpan[project.span]} min-h-[220px]`}>
              <GlassCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPLORATION PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function BentoExploration() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="bg-cream-100 px-8 py-16 border-b border-cream-200">
        <div className="max-w-5xl mx-auto">
          <span className="font-mono text-xs text-neutral-200 uppercase tracking-wider">Exploration</span>
          <h1 className="font-lora text-4xl sm:text-5xl text-neutral-300 mt-2">
            Bento Grid Variations
          </h1>
          <p className="font-geist text-neutral-200 mt-4 max-w-xl">
            Four distinct aesthetic approaches to the same grid system. Same spans, different vibes.
          </p>
        </div>
      </div>
      
      {/* Grids */}
      <BoldGrid />
      <MinimalGrid />
      <EditorialGrid />
      <GlassmorphicGrid />
      
      {/* Footer note */}
      <div className="bg-cream-100 px-8 py-12 border-t border-cream-200">
        <div className="max-w-5xl mx-auto">
          <p className="font-geist text-sm text-neutral-200">
            All variations use the same 12-column grid with span values of 4, 6, or 12.
          </p>
        </div>
      </div>
    </main>
  )
}
