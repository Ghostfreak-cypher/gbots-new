return (
  <div
    ref={rootRef}
    onPointerMove={handleMove}
    onPointerLeave={handleLeave}
    className={`relative w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 ${className}`}
    style={{
      "--r": `${radius}px`,
      "--x": "50%",
      "--y": "50%",
    }}
  >
    {data.map((c, i) => (
      <article
        key={i}
        onMouseMove={handleCardMove}
        onClick={() => handleCardClick(c.url)}
        className={`group relative w-full sm:w-auto h-[400px] flex flex-col rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer`}
        style={{
          "--card-border": c.borderColor || "transparent",
          background: c.gradient,
          "--spotlight-color": "rgba(255,255,255,0.3)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
          }}
        />
        <div className="relative z-10 flex-1 p-[10px] box-border flex items-center justify-center">
          <img
            src={c.image}
            alt={c.title}
            loading="lazy"
            className="h-[200px] max-w-[200px] object-cover rounded-[10px]"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300x320/1f2937/ffffff?text=Team+Member";
            }}
          />
        </div>
        <footer className="relative z-10 p-3 text-white font-sans grid grid-cols-[1fr_auto] gap-x-3 gap-y-1 h-[100px] flex-shrink-0">
          <div>
            <h3 className="m-0 text-[1.05rem] font-semibold leading-tight">{c.title}</h3>
            <p className="m-0 text-[0.85rem] opacity-85 leading-tight">{c.subtitle}</p>
          </div>
          {c.handle && (
            <span className="text-[0.95rem] opacity-80 text-right leading-tight self-start">
              {c.handle}
            </span>
          )}
        </footer>
      </article>
    ))}
    {/* Grayscale overlay for desktop only */}
    {isDesktop && (
      <>
        <div
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            backdropFilter: "grayscale(1) brightness(0.78)",
            WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
            background: "rgba(0,0,0,0.001)",
            maskImage:
              "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
            WebkitMaskImage:
              "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
          }}
        />
        <div
          ref={fadeRef}
          className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
          style={{
            backdropFilter: "grayscale(1) brightness(0.78)",
            WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
            background: "rgba(0,0,0,0.001)",
            maskImage:
              "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
            opacity: 1,
          }}
        />
      </>
    )}
  </div>
);
