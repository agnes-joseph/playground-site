function Button({ variant = 'primary', children, onClick, className = '' }) {
  const base =
    'font-mono font-medium text-sm rounded-full px-8 py-3 transition-colors duration-200 cursor-pointer'

  const variants = {
    primary:
      'bg-neutral-300 text-white hover:bg-mint-400',
    secondary:
      'border border-neutral-300 text-neutral-300 bg-transparent hover:bg-cream-200',
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
