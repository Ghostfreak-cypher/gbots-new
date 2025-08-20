import React from 'react'

function Cta() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-6 md:mx-20">
        <div className="border border-gray-300 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-[9vw] md:text-5xl font-bold">Build with Grobots</h2>
          <p className="mt-3 md:mt-4 text-base md:text-xl max-w-2xl mx-auto text-themed-muted">
            Supercharge your workflow with our AI tools. Start in seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6">
            <a href="#get-started" className="btn-primary cursor-target px-6 py-3 rounded-xl w-full sm:w-auto" onFocus={(e)=>e.currentTarget.classList.add('ring-2','ring-primary','ring-offset-2','ring-offset-black')} onBlur={(e)=>e.currentTarget.classList.remove('ring-2','ring-primary','ring-offset-2','ring-offset-black')}>Get Started</a>
            <a href="#learn-more" className="btn-secondary px-6 py-3 cursor-target rounded-xl w-full sm:w-auto" onFocus={(e)=>e.currentTarget.classList.add('ring-2','ring-primary','ring-offset-2','ring-offset-black')} onBlur={(e)=>e.currentTarget.classList.remove('ring-2','ring-primary','ring-offset-2','ring-offset-black')}>Learn More</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta