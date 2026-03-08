// Bento Grid Exploration: 4 Editorial/Scrapbook Aesthetic Variations
// Using existing design system: cream, mint, neutral palettes

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
// VARIATION 1: BOLD EDITORIAL
// Strong typographic hierarchy, thick borders, confident but warm
// ─────────────────────────────────────────────────────────────────────────────
function BoldCard({ project }) {
  const accents = ['bg-mint-100', 'bg-cream-300', 'bg-mint-200', 'bg-cream-200']
  const accent = accents[project.id % accents.length]
  
  return (
    <div className={`${accent} h-full border-2 border-neutral-300 flex flex-col p-6 group hover:-translate-y-0.5 transition-transform duration-200`}>
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-200">
        {project.type}
      </span>
      <h3 className="font-lora font-semibold text-xl sm:text-2xl leading-tight text-neutral-300 mt-auto">
        {project.title}
      </h3>
      <div className="w-8 h-0.5 bg-neutral-300 mt-4 group-hover:w-12 transition-all duration-200" />
    </div>
  )
}

function BoldGrid() {
  return (
    <section className="bg-cream-100 px-8 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="flex items-end justify-between border-b-2 border-neutral-300 pb-4">
          <h2 className="font-lora font-semibold text-[1.802rem] leading-[130%] text-neutral-300">
            Bold Editorial
          </h2>
          <span className="font-mono text-xs text-neutral-200">01</span>
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
// Lots of whitespace, barely-there borders, quiet and restrained
// ─────────────────────────────────────────────────────────────────────────────
function MinimalCard({ project }) {
  return (
    <div className="h-full bg-neutral-0 border border-cream-300 rounded-sm flex flex-col justify-between p-8 group hover:border-cream-400 transition-colors duration-300">
      <div className="flex items-start justify-between">
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-100 font-geist">
          {project.type}
        </span>
        <span className="text-[10px] text-cream-400 font-mono">
          0{project.id}
        </span>
      </div>
      <div className="mt-auto">
        <h3 className="font-lora font-normal text-lg text-neutral-300 leading-snug">
          {project.title}
        </h3>
        <div className="w-4 h-px bg-cream-400 mt-4 group-hover:w-8 transition-all duration-300" />
      </div>
    </div>
  )
}

function MinimalGrid() {
  return (
    <section className="bg-cream-200 px-8 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-200 font-mono">Style</span>
          <h2 className="font-lora text-[1.802rem] leading-[130%] text-neutral-300">
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
// VARIATION 3: EDITORIAL SCRAPBOOK
// Magazine-inspired, layered feel, mixed type, handcrafted aesthetic
// ─────────────────────────────────────────────────────────────────────────────
function EditorialCard({ project, index }) {
  const isFeature = project.span === 12 || index === 0
  const rotations = ['-rotate-0.5', 'rotate-0.5', '-rotate-1', 'rotate-0', 'rotate-0.5', '-rotate-0.5']
  const rotation = rotations[index % rotations.length]
  
  return (
    <div className={`h-full bg-neutral-0 border-t border-cream-400 flex flex-col group ${rotation} hover:rotate-0 transition-transform duration-300`}>
      <div className="flex-1 p-6 sm:p-8 flex flex-col">
        <div className="flex items-baseline gap-4 mb-auto">
          <span className="font-lora italic text-neutral-100 text-sm">
            No.{String(project.id).padStart(2, '0')}
          </span>
          <span className="text-[9px] uppercase tracking-[0.15em] text-mint-300 font-mono">
            {project.type}
          </span>
        </div>
        
        <div className="mt-8">
          <h3 className={`font-lora ${isFeature ? 'text-2xl sm:text-3xl' : 'text-xl'} text-neutral-300 leading-tight`}>
            {project.title}
          </h3>
          {isFeature && (
            <p className="font-geist text-sm text-neutral-200 mt-3 max-w-md leading-relaxed">
              {project.description}
            </p>
          )}
        </div>
        
        <div className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-geist text-xs uppercase tracking-wider text-mint-300">Read</span>
          <span className="text-mint-300">→</span>
        </div>
      </div>
    </div>
  )
}

function EditorialGrid() {
  return (
    <section className="bg-cream-100 px-8 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <div className="border-b border-cream-300 pb-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-200 block mb-2">
            Volume III
          </span>
          <h2 className="font-lora text-[1.802rem] sm:text-[2.25rem] leading-[130%] text-neutral-300 italic">
            Editorial
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-3">
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
// VARIATION 4: SOFT BOTANICAL
// Nature-inspired, organic shapes, layered paper feel, gentle shadows
// ─────────────────────────────────────────────────────────────────────────────
function BotanicalCard({ project, index }) {
  const patterns = [
    'before:absolute before:top-2 before:right-2 before:w-6 before:h-6 before:border before:border-mint-300 before:rounded-full',
    'before:absolute before:bottom-3 before:left-3 before:w-8 before:h-px before:bg-mint-300',
    'before:absolute before:top-3 before:left-3 before:w-4 before:h-4 before:border-t before:border-l before:border-mint-300',
    'before:absolute before:bottom-3 before:right-3 before:w-3 before:h-3 before:bg-mint-100 before:rounded-full',
    'before:absolute before:top-2 before:right-3 before:w-6 before:h-px before:bg-mint-300',
    'before:absolute before:bottom-4 before:left-4 before:w-5 before:h-5 before:border before:border-mint-200 before:rounded-sm',
  ]
  const pattern = patterns[index % patterns.length]
  
  return (
    <div className={`h-full relative bg-neutral-0 rounded-xl border border-cream-200 flex flex-col p-6 group hover:shadow-lg hover:shadow-cream-300/50 transition-all duration-300 ${pattern}`}>
      <div className="flex items-center gap-2 mb-auto">
        <div className="w-1.5 h-1.5 rounded-full bg-mint-300" />
        <span className="font-mono text-[10px] uppercase tracking-wider text-mint-300">
          {project.type}
        </span>
      </div>
      
      <div className="mt-auto relative z-10">
        <h3 className="font-lora text-lg text-neutral-300 leading-snug">
          {project.title}
        </h3>
        <p className="font-geist text-xs text-neutral-100 mt-2 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      </div>
      
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-mint-100/40 to-transparent rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}

function BotanicalGrid() {
  return (
    <section className="bg-mint-100 px-8 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="flex items-center gap-4">
          <div className="w-8 h-px bg-mint-300" />
          <h2 className="font-lora text-[1.802rem] leading-[130%] text-mint-400">
            Soft Botanical
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {mockProjects.map((project, index) => (
            <div key={project.id} className={`${colSpan[project.span]} min-h-[200px]`}>
              <BotanicalCard project={project} index={index} />
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
    <main className="min-h-screen bg-cream-100">
      {/* Header */}
      <div className="px-8 py-16 border-b border-cream-200">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs text-neutral-200 uppercase tracking-wider">Exploration</span>
          <h1 className="font-lora text-[2.25rem] sm:text-[2.827rem] leading-[130%] text-neutral-300 mt-2">
            Bento Grid Variations
          </h1>
          <p className="font-geist text-neutral-200 mt-4 max-w-xl leading-relaxed">
            Four distinct aesthetic approaches to the same grid system. Same spans, different vibes.
          </p>
        </div>
      </div>
      
      {/* Grids */}
      <BoldGrid />
      <MinimalGrid />
      <EditorialGrid />
      <BotanicalGrid />
      
      {/* Footer note */}
      <div className="px-8 py-12 border-t border-cream-200">
        <div className="max-w-4xl mx-auto">
          <p className="font-geist text-sm text-neutral-200">
            All variations use the same 12-column grid with span values of 4, 6, or 12.
          </p>
        </div>
      </div>
    </main>
  )
}
