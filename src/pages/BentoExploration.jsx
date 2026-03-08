// Bento Grid Exploration: 4 Aesthetic Variations
// 1. Minimal (Shop/Stripe style) - Clean, subtle, product-focused
// 2. Vibrant (Givingli/Amie style) - Colorful card backgrounds
// 3. Overlapping Image - Image extends beyond card boundaries (PayPal style)
// 4. Cut-out Style - Transparent product cut-outs floating on content (Shop style)

// Reference images for portfolio cards (square ratio for better proportions)
const images = {
  branding: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=600&fit=crop',
  ecommerce: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
  mobile: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=600&fit=crop',
  editorial: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop',
  photography: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&h=600&fit=crop',
  dashboard: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
}

// Cut-out style images (products with transparent/clean backgrounds)
const cutoutImages = {
  headphones: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
  watch: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
  camera: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop',
  phone: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
  plant: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop',
  laptop: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop',
}

// Mock data with different spans
const mockProjects = [
  { id: 1, title: 'Brand Identity System', type: 'Branding', span: 6, description: 'Complete visual identity for a fintech startup', image: images.branding },
  { id: 2, title: 'E-Commerce Platform', type: 'Development', span: 6, description: 'Full-stack shopping experience', image: images.ecommerce },
  { id: 3, title: 'Mobile App Design', type: 'UI/UX', span: 4, description: 'iOS fitness tracking app', image: images.mobile },
  { id: 4, title: 'Editorial Spread', type: 'Print', span: 4, description: 'Magazine layout design', image: images.editorial },
  { id: 5, title: 'Photography', type: 'Art Direction', span: 4, description: 'Product photography series', image: images.photography },
  { id: 6, title: 'Dashboard Analytics', type: 'Development', span: 12, description: 'Real-time data visualization platform with complex chart systems', image: images.dashboard },
]

const colSpan = {
  4: 'col-span-12 sm:col-span-4',
  6: 'col-span-12 sm:col-span-6',
  12: 'col-span-12',
}

// ─────────────────────────────────────────────────────────────────────────────
// VARIATION 1: MINIMAL (Shop/Stripe Style)
// Clean white cards, subtle rounded corners, soft shadows, product imagery
// ─────────────────────────────────────────────────────────────────────────────
function MinimalCard({ project }) {
  const isWide = project.span === 12
  
  return (
    <div className="h-full bg-neutral-0 rounded-2xl border border-cream-200 flex flex-col overflow-hidden group hover:shadow-lg hover:shadow-cream-300/30 transition-all duration-300">
      {/* Image area - more square ratio */}
      <div className={`relative ${isWide ? 'aspect-[2/1]' : 'aspect-square'} overflow-hidden bg-cream-200`}>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Content */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col">
        <span className="font-geist text-[11px] uppercase tracking-[0.1em] text-neutral-100">
          {project.type}
        </span>
        <h3 className="font-lora text-lg text-neutral-300 mt-2 leading-snug">
          {project.title}
        </h3>
        <p className="font-geist text-sm text-neutral-200 mt-2 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        
        {/* Learn more link */}
        <div className="flex items-center gap-2 mt-auto pt-4">
          <span className="font-geist text-sm text-neutral-300">Learn more</span>
          <svg className="w-4 h-4 text-neutral-300 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function MinimalGrid() {
  return (
    <section className="bg-cream-100 px-6 sm:px-8 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Section header */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-200">Style 01</span>
          <h2 className="font-lora text-[1.802rem] sm:text-[2.25rem] leading-[130%] text-neutral-300">
            Minimal
          </h2>
          <p className="font-geist text-neutral-200 mt-1 max-w-lg leading-relaxed">
            Clean, product-focused cards inspired by Shop and Stripe. White backgrounds, subtle shadows, smooth interactions.
          </p>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          {mockProjects.map((project) => (
            <div key={project.id} className={`${colSpan[project.span]}`}>
              <MinimalCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VARIATION 2: VIBRANT (Givingli/Amie Style)
// Colorful card backgrounds, playful, friendly, bold color blocks
// ─────────────────────────────────────────────────────────────────────────────

// Extended color palette for vibrant cards (keeping editorial/scrapbook feel)
const vibrantColors = [
  { bg: 'bg-mint-100', accent: 'text-mint-400', border: 'border-mint-200' },
  { bg: 'bg-[#fef3c7]', accent: 'text-amber-700', border: 'border-amber-200' }, // warm yellow
  { bg: 'bg-[#fce7f3]', accent: 'text-pink-700', border: 'border-pink-200' }, // soft pink
  { bg: 'bg-[#e0e7ff]', accent: 'text-indigo-700', border: 'border-indigo-200' }, // soft blue
  { bg: 'bg-cream-200', accent: 'text-neutral-300', border: 'border-cream-300' },
  { bg: 'bg-[#d1fae5]', accent: 'text-emerald-700', border: 'border-emerald-200' }, // soft green
]

function VibrantCard({ project, index }) {
  const colors = vibrantColors[index % vibrantColors.length]
  const isWide = project.span === 12
  
  return (
    <div className={`h-full ${colors.bg} rounded-3xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}>
      <div className={`h-full flex ${isWide ? 'flex-row' : 'flex-col'}`}>
        {/* Image section - square ratio for non-wide cards */}
        <div className={`relative ${isWide ? 'w-1/2' : 'aspect-square'} overflow-hidden`}>
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay shape - gives that Givingli sticker feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
        
        {/* Content section */}
        <div className={`flex-1 p-5 sm:p-6 flex flex-col ${isWide ? 'justify-center' : ''}`}>
          <span className={`font-mono text-[10px] uppercase tracking-[0.15em] ${colors.accent}`}>
            {project.type}
          </span>
          <h3 className={`font-lora ${isWide ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'} text-neutral-300 mt-2 leading-tight`}>
            {project.title}
          </h3>
          <p className="font-geist text-sm text-neutral-200 mt-2 leading-relaxed line-clamp-2">
            {project.description}
          </p>
          
          {/* Arrow button */}
          <div className="mt-auto pt-4">
            <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-0/80 ${colors.accent} group-hover:bg-neutral-0 transition-colors`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function VibrantGrid() {
  return (
    <section className="bg-cream-100 px-6 sm:px-8 py-16 sm:py-20 border-t border-cream-200">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Section header */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-200">Style 02</span>
          <h2 className="font-lora text-[1.802rem] sm:text-[2.25rem] leading-[130%] text-neutral-300">
            Vibrant
          </h2>
          <p className="font-geist text-neutral-200 mt-1 max-w-lg leading-relaxed">
            Colorful, friendly cards inspired by Givingli and Amie. Soft pastels, rounded corners, playful energy.
          </p>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          {mockProjects.map((project, index) => (
            <div key={project.id} className={`${colSpan[project.span]}`}>
              <VibrantCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VARIATION 3: OVERLAPPING IMAGE (PayPal Style)
// Image extends beyond card boundaries, content sits below
// ─────────────────────────────────────────────────────────────────────────────

const overlappingColors = [
  { bg: 'bg-[#fef3c7]', accent: 'text-amber-800' }, // warm yellow like PayPal
  { bg: 'bg-[#1e3a5f]', accent: 'text-white', textColor: 'text-white/90' }, // deep blue
  { bg: 'bg-mint-200', accent: 'text-mint-400' },
  { bg: 'bg-[#fce7f3]', accent: 'text-pink-700' },
  { bg: 'bg-cream-200', accent: 'text-neutral-300' },
  { bg: 'bg-[#1e3a5f]', accent: 'text-white', textColor: 'text-white/90' },
]

function OverlappingCard({ project, index }) {
  const colors = overlappingColors[index % overlappingColors.length]
  const isWide = project.span === 12
  const isDark = colors.bg.includes('1e3a5f')
  
  return (
    <div className={`relative h-full ${colors.bg} rounded-2xl overflow-visible group`}>
      {/* Content area */}
      <div className="p-5 sm:p-6 pb-24 sm:pb-28">
        <h3 className={`font-lora ${isWide ? 'text-xl sm:text-2xl' : 'text-lg'} ${isDark ? 'text-white' : 'text-neutral-300'} leading-tight`}>
          {project.title}
        </h3>
        {isWide && (
          <p className={`font-geist text-sm mt-2 leading-relaxed ${isDark ? 'text-white/70' : 'text-neutral-200'}`}>
            {project.description}
          </p>
        )}
        
        {/* Arrow link */}
        <div className="flex items-center gap-2 mt-4">
          <svg className={`w-5 h-5 ${isDark ? 'text-white/60' : 'text-neutral-200'} group-hover:translate-x-1 transition-transform`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
      
      {/* Overlapping image - extends beyond card */}
      <div className={`absolute ${isWide ? 'right-6 bottom-0 w-1/3 max-w-[200px]' : 'right-4 bottom-0 w-2/3 max-w-[180px]'} transform translate-y-2`}>
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full aspect-square object-cover rounded-xl shadow-lg group-hover:-translate-y-2 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  )
}

function OverlappingGrid() {
  return (
    <section className="bg-cream-100 px-6 sm:px-8 py-16 sm:py-20 border-t border-cream-200">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Section header */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-200">Style 03</span>
          <h2 className="font-lora text-[1.802rem] sm:text-[2.25rem] leading-[130%] text-neutral-300">
            Overlapping Image
          </h2>
          <p className="font-geist text-neutral-200 mt-1 max-w-lg leading-relaxed">
            Images extend beyond card boundaries for depth. Inspired by PayPal and modern fintech interfaces.
          </p>
        </div>
        
        {/* Grid - extra padding bottom to accommodate overlapping images */}
        <div className="grid grid-cols-12 gap-4 sm:gap-5 pb-8">
          {mockProjects.map((project, index) => (
            <div key={project.id} className={`${colSpan[project.span]} min-h-[200px]`}>
              <OverlappingCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VARIATION 4: CUT-OUT STYLE (Shop/Product Style)
// Floating product images on solid color backgrounds
// ─────────────────────────────────────────────────────────────────────────────

const cutoutProjects = [
  { id: 1, title: 'Sound Design', type: 'Audio', span: 6, description: 'Premium audio experience with spatial sound', image: cutoutImages.headphones },
  { id: 2, title: 'Timepiece', type: 'Product', span: 6, description: 'Minimal watch design for modern lifestyle', image: cutoutImages.watch },
  { id: 3, title: 'Photography', type: 'Capture', span: 4, description: 'Professional camera systems', image: cutoutImages.camera },
  { id: 4, title: 'Mobile First', type: 'Digital', span: 4, description: 'App-driven experiences', image: cutoutImages.phone },
  { id: 5, title: 'Biophilic', type: 'Interior', span: 4, description: 'Nature-inspired spaces', image: cutoutImages.plant },
  { id: 6, title: 'Workspace', type: 'Productivity', span: 12, description: 'Tools and environments designed for focus and flow', image: cutoutImages.laptop },
]

// Vibrant color palette combining overlapping and vibrant styles
// Card backgrounds with matching text colors for contrast
const cutoutColors = [
  { bg: 'bg-[#fef3c7]', accent: 'bg-[#fde68a]', type: 'text-amber-700', title: 'text-amber-900', desc: 'text-amber-800/80' }, // warm yellow
  { bg: 'bg-[#e8f4f0]', accent: 'bg-[#d1ebe4]', type: 'text-teal-700', title: 'text-teal-900', desc: 'text-teal-800/80' }, // soft teal — replaces harsh dark blue
  { bg: 'bg-[#fce7f3]', accent: 'bg-[#fbcfe8]', type: 'text-pink-600', title: 'text-pink-900', desc: 'text-pink-800/80' }, // soft pink
  { bg: 'bg-mint-200', accent: 'bg-mint-300', type: 'text-mint-400', title: 'text-neutral-300', desc: 'text-neutral-200' }, // mint
  { bg: 'bg-cream-200', accent: 'bg-cream-300', type: 'text-neutral-200', title: 'text-neutral-300', desc: 'text-neutral-200' }, // cream
  { bg: 'bg-[#ede9fe]', accent: 'bg-[#ddd6fe]', type: 'text-violet-600', title: 'text-violet-900', desc: 'text-violet-800/80' }, // soft lavender
]

function CutoutCard({ project, index }) {
  const colors = cutoutColors[index % cutoutColors.length]
  const isWide = project.span === 12
  
  return (
    <div className={`relative h-full ${colors.bg} rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-300/10`}>
      {/* Expand button — glass effect at rest, brightens on card hover */}
      <button className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-200 group-hover:bg-white/50 group-hover:border-white/50">
        <svg
          className="w-3.5 h-3.5 text-neutral-300/40 transition-all duration-200 group-hover:text-neutral-300 group-hover:stroke-[2]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.25}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l6 6m0-6H4v6m16 10l-6-6m6 0v6h-6" />
        </svg>
      </button>
      
      <div className={`h-full flex ${isWide ? 'flex-row items-center' : 'flex-col'}`}>
        {/* Content section */}
        <div className={`${isWide ? 'w-1/2 order-1' : 'order-2'} p-5 sm:p-6`}>
          <span className={`font-mono text-[10px] uppercase tracking-[0.15em] ${colors.type}`}>
            {project.type}
          </span>
          <h3 className={`font-lora ${isWide ? 'text-2xl sm:text-3xl' : 'text-lg'} ${colors.title} mt-2 leading-tight`}>
            {project.title}
          </h3>
          <p className={`font-geist text-sm ${colors.desc} mt-2 leading-relaxed line-clamp-2`}>
            {project.description}
          </p>
        </div>
        
        {/* Cut-out image section */}
        <div className={`relative ${isWide ? 'w-1/2 order-2' : 'order-1 aspect-square'} flex items-center justify-center p-6`}>
          <div className="relative w-4/5 aspect-square">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-500"
            />
            {/* Soft offset accent shape behind image */}
            <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2">
              <div className={`w-full h-full rounded-2xl ${colors.accent}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CutoutGrid() {
  return (
    <section className="bg-cream-100 px-6 sm:px-8 py-16 sm:py-20 border-t border-cream-200">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Section header */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-200">Style 04</span>
          <h2 className="font-lora text-[1.802rem] sm:text-[2.25rem] leading-[130%] text-neutral-300">
            Cut-out Product
          </h2>
          <p className="font-geist text-neutral-200 mt-1 max-w-lg leading-relaxed">
            Floating product images with clean backgrounds. Inspired by Shop and e-commerce interfaces.
          </p>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          {cutoutProjects.map((project, index) => (
            <div key={project.id} className={`${colSpan[project.span]}`}>
              <CutoutCard project={project} index={index} />
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
      <div className="px-6 sm:px-8 py-16 sm:py-20 border-b border-cream-200">
        <div className="max-w-5xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-200">Exploration</span>
          <h1 className="font-lora text-[2.25rem] sm:text-[2.827rem] leading-[130%] text-neutral-300 mt-2">
            Bento Grid Variations
          </h1>
          <p className="font-geist text-neutral-200 mt-4 max-w-xl leading-relaxed">
            Two distinct aesthetic approaches using the same grid system. Same spans, different vibes.
          </p>
        </div>
      </div>
      
      {/* Reference images */}
      <div className="px-6 sm:px-8 py-12 bg-cream-200/50 border-b border-cream-200">
        <div className="max-w-5xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-200 block mb-6">Reference Inspiration</span>
          <div className="flex flex-wrap gap-4">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VuaOEHYhkeFEhfIxxDqVWAiPxnLtbk.png" 
              alt="Shop reference" 
              className="h-32 sm:h-40 w-auto rounded-lg border border-cream-300 object-cover"
            />
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ePT9A91eyrws2TzFiKcdDWxhPoYN7h.png" 
              alt="Givingli reference" 
              className="h-32 sm:h-40 w-auto rounded-lg border border-cream-300 object-cover"
            />
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hzINju89ZaNC8FL4FRIGzOF1XJ6oHf.png" 
              alt="Amie reference" 
              className="h-32 sm:h-40 w-auto rounded-lg border border-cream-300 object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Grids */}
      <MinimalGrid />
      <VibrantGrid />
      <OverlappingGrid />
      <CutoutGrid />
      
      {/* Footer note */}
      <div className="px-6 sm:px-8 py-12 border-t border-cream-200">
        <div className="max-w-5xl mx-auto">
          <p className="font-geist text-sm text-neutral-200">
            All variations use the same 12-column grid with span values of 4, 6, or 12.
          </p>
        </div>
      </div>
    </main>
  )
}
