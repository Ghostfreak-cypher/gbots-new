import React from 'react'

function Cta() {
  return (
    <div className='mx-24  mt-8'>
      <section className="w-full py-24 flex flex-col items-center justify-center gap-6 border border-gray-300 rounded-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center">Build with Grobots</h2>
              <p className="text-lg md:text-xl text-center max-w-2xl text-themed-muted">
              Supercharge your workflow with our AI tools. Start in seconds.
              </p>
          <div className="flex items-center gap-4 mt-4">
              <a href="#get-started" className="cursor-target btn-primary px-6 py-3 rounded-xl">Get Started</a>
              <a href="#learn-more" className="cursor-target btn-secondary px-6 py-3 rounded-xl">Learn More</a>
          </div>
    </section>
  </div>
  )
}

export default Cta