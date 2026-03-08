import { useNavigate } from 'react-router-dom'
import { imageUrl } from '../lib/sanity'

export default function BentoCard({ project }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/project/${project.slug}`)}
      className="h-full rounded-2xl border border-cream-200 bg-white flex flex-col cursor-pointer group hover:scale-[1.01] transition-transform duration-200 overflow-hidden"
    >
      {project.coverImage && (
        <img
          src={imageUrl(project.coverImage).width(800).fit('crop').url()}
          alt={project.title}
          className="w-full h-48 object-cover rounded-t-2xl"
        />
      )}
      <div className="p-8 flex flex-col gap-3">
        <h3 className="font-lora font-semibold text-[1.424rem] leading-[130%] text-neutral-300">
          {project.title}
        </h3>
        {project.projectType && (
          <span className="font-mono text-xs text-mint-300 border border-mint-300 rounded-full px-3 py-1 uppercase self-start">
            {project.projectType}
          </span>
        )}
        <p className="font-geist text-sm leading-relaxed text-neutral-200">
          {project.description}
        </p>
      </div>
      <div className="px-8 pb-8 mt-auto">
        <span className="font-mono text-sm text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          →
        </span>
      </div>
    </div>
  )
}
