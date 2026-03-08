import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { client, imageUrl } from '../lib/sanity'

export default function ProjectPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(undefined)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project" && slug.current == $slug][0] { title, "slug": slug.current, description, span, coverImage, projectType }`,
        { slug }
      )
      .then((data) => {
        if (!data) {
          navigate('/', { replace: true })
          return
        }
        setProject(data)
        requestAnimationFrame(() => setVisible(true))
      })
  }, [slug, navigate])

  if (!project) return null

  return (
    <div
      className={[
        'min-h-screen bg-cream-100 overflow-y-auto transition-opacity duration-200',
        visible ? 'opacity-100' : 'opacity-0',
      ].join(' ')}
    >
      <div className="max-w-3xl mx-auto px-8 py-16 flex flex-col gap-8">
        {project.coverImage && (
          <img
            src={imageUrl(project.coverImage).width(1200).fit('crop').url()}
            alt={project.title}
            className="w-full rounded-2xl object-cover max-h-[480px]"
          />
        )}
        <h1 className="font-lora font-semibold text-[2.027rem] leading-[120%] tracking-tight text-neutral-300">
          {project.title}
        </h1>
        {project.projectType && (
          <span className="font-mono text-xs text-mint-300 border border-mint-300 rounded-full px-3 py-1 uppercase self-start">
            {project.projectType}
          </span>
        )}

        <p className="font-geist text-base text-neutral-200 leading-relaxed">
          {project.description}
        </p>

        <button
          onClick={() => navigate(-1)}
          className="font-mono text-sm text-neutral-300 hover:text-mint-400 transition-colors duration-200 self-start mt-4"
        >
          ← Back
        </button>
      </div>
    </div>
  )
}
