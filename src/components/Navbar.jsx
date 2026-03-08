import Dropdown from './Dropdown'

function Navbar() {
  return (
    <nav className="sticky top-0 z-20 bg-cream-100 border-b border-cream-200 px-8 py-4 flex items-center justify-between">
      <span className="font-lora font-semibold text-xl text-neutral-300">AJ</span>

      <ul className="flex items-center gap-6">
        <li>
          <Dropdown label="Work" items={['Case Study', 'Side Projects']} />
        </li>
        <li>
          <a
            href="#about"
            className="font-mono font-medium text-base text-neutral-300 hover:text-mint-400 transition-colors duration-200"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="font-mono font-medium text-base text-neutral-300 hover:text-mint-400 transition-colors duration-200"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
