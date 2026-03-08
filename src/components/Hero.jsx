import Button from './Button'

export default function Hero() {
  return (
    <section className="bg-cream-100 px-8 min-h-[80vh] flex flex-col justify-center items-center text-center">
      <div className="max-w-3xl flex flex-col items-center gap-6">
        <p className="font-mono text-xs text-mint-300 uppercase tracking-widest">
          Product Designer & Developer
        </p>
        <h1 className="font-lora font-semibold text-[2.986rem] leading-[120%] tracking-tight text-neutral-300">
          Designing experiences that feel intentional, human, and a little bit delightful.
        </h1>
        <p className="font-geist text-base text-neutral-200 max-w-xl leading-relaxed">
          I work at the intersection of design and code — turning complex ideas into clear, considered products.
        </p>
        <div className="mt-2">
          <Button
            variant="primary"
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Work
          </Button>
        </div>
      </div>
    </section>
  )
}
