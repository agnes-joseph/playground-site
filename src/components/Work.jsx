import { useState, useEffect } from 'react'
import { client } from '../lib/sanity'
import BentoCard from './BentoCard'

function packRows(projects) {
  const result = []
  const pool = [...projects]

  while (pool.length > 0) {
    let rowSpace = 12
    let i = 0
    while (rowSpace > 0 && i < pool.length) {
      if (pool[i].span <= rowSpace) {
        result.push(pool.splice(i, 1)[0])
        rowSpace -= result[result.length - 1].span
      } else {
        i++
      }
    }
    if (rowSpace === 12) break // infinite-loop guard: nothing fits
  }
  return result
}

const colSpan = {
  4: 'col-span-12 sm:col-span-4',
  6: 'col-span-12 sm:col-span-6',
  12: 'col-span-12',
}

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Project', value: 'project' },
  { label: 'Component', value: 'component' },
  { label: 'Blog', value: 'blog' },
]

export default function Work() {
  const [allProjects, setAllProjects] = useState([])
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    client
      .fetch(`*[_type == "project"] | order(_createdAt asc) { _id, title, "slug": slug.current, description, span, coverImage, projectType }`)
      .then((data) => setAllProjects(data))
  }, [])

  const filtered = activeFilter === 'all'
    ? allProjects
    : allProjects.filter((p) => p.projectType === activeFilter)
  const projects = packRows(filtered)

  return (
    <section id="work" className="bg-white px-8 py-24">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="font-lora font-semibold text-[1.802rem] leading-[130%] text-neutral-300">
            Selected Work
          </h2>
          <p className="font-geist text-base text-neutral-200">A handful of projects I&apos;m proud of.</p>
        </div>

        <div className="flex gap-2 flex-wrap">
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={[
                'font-mono text-sm rounded-full px-5 py-2 transition-colors duration-200',
                activeFilter === value
                  ? 'bg-neutral-300 text-neutral-0'
                  : 'bg-cream-200 text-neutral-300 hover:bg-cream-300',
              ].join(' ')}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-4">
          {projects.map((project) => (
            <div key={project._id} className={`${colSpan[project.span]} min-h-[280px]`}>
              <BentoCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
