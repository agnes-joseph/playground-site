import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Button from './components/Button'

function Hero() {
  return (
    <section className="bg-cream-100 px-8 py-24 flex flex-col items-start max-w-4xl mx-auto gap-6">
      <p className="font-mono text-xs text-mint-300 uppercase tracking-widest">
        Product Designer & Developer
      </p>
      <h1 className="font-lora font-semibold text-[2.027rem] leading-[120%] tracking-tight text-neutral-300">
        Designing experiences that feel intentional, human, and a little bit delightful.
      </h1>
      <p className="font-geist text-base text-neutral-200 max-w-xl leading-relaxed">
        I work at the intersection of design and code — turning complex ideas into clear,
        considered products.
      </p>
      <div className="flex items-center gap-4 mt-2">
        <Button variant="primary">Get in touch</Button>
        <Button variant="secondary">View Work</Button>
      </div>
    </section>
  )
}

function WorkCard({ title, tags, description }) {
  return (
    <div className="bg-cream-100 rounded-2xl p-8 flex flex-col gap-4 border border-cream-200">
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-mint-300 border border-mint-300 rounded-full px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-lora font-semibold text-[1.424rem] leading-[130%] text-neutral-300">
        {title}
      </h3>
      <p className="font-geist text-sm text-neutral-200 leading-relaxed">{description}</p>
      <button className="font-mono text-sm text-neutral-300 underline underline-offset-4 self-start hover:text-mint-400 transition-colors duration-200">
        View case study →
      </button>
    </div>
  )
}

const projects = [
  {
    title: 'Redesigning the onboarding flow for a fintech app',
    tags: ['UX Design', 'Product', 'Mobile'],
    description:
      'Reduced drop-off by 34% by simplifying the onboarding journey through user research, rapid prototyping, and iterative testing.',
  },
  {
    title: 'Building a design system from the ground up',
    tags: ['Design Systems', 'React', 'Figma'],
    description:
      'Established a shared component library and token system used across three product teams, cutting design-to-dev handoff time in half.',
  },
  {
    title: 'Data dashboard for a SaaS analytics platform',
    tags: ['Data Viz', 'UX', 'Web'],
    description:
      'Designed and prototyped an information-dense dashboard that surfaced key metrics without overwhelming users.',
  },
]

function Work() {
  return (
    <section id="work" className="bg-white px-8 py-24">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="font-lora font-semibold text-[1.802rem] leading-[130%] text-neutral-300">
            Selected Work
          </h2>
          <p className="font-geist text-base text-neutral-200">
            A handful of projects I'm proud of.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <WorkCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-cream-100 text-neutral-300 font-geist">
      <Navbar />
      <main>
        <Hero />
        <Work />
      </main>
      <Footer />
    </div>
  )
}

export default App
