import { useState, useRef, useEffect } from 'react'

function Dropdown({ label, items = [] }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 bg-cream-200 rounded-xl px-5 py-3 font-geist font-semibold text-base text-neutral-300 transition-colors duration-200 hover:bg-cream-300 cursor-pointer"
      >
        {label}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul className="absolute left-0 top-full mt-1 min-w-full bg-white border border-cream-200 rounded-xl shadow-sm overflow-hidden z-10">
          {items.map((item) => (
            <li key={item}>
              <button
                onClick={() => setOpen(false)}
                className="w-full text-left px-5 py-3 font-geist text-sm text-neutral-300 hover:bg-cream-100 transition-colors duration-150"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
