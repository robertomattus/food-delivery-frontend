import React from "react";

const Header = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/header_img.png"
          alt="Gourmet dining experience"
          className="w-full h-full object-cover scale-105"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* ── Hero Content ── */}
      <div className="relative z-10 max-w-4xl px-8 text-center animate-[fadeIn_1.5s_ease-in-out]">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <span className="bg-[#FF5A36]/20 backdrop-blur-md border border-[#FF5A36]/30 text-[#FF5A36] px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase font-['Inter']">
            Premium Delivery Service
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-white font-['Plus_Jakarta_Sans'] font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 tracking-tight">
          Order your <span className="text-[#FF5A36]">favorite</span> food here
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 font-['Inter'] text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Experience the art of fine dining delivered to your doorstep. We
          curate the city's most exquisite flavors for a sophisticated palate.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Primary */}
          <a href="#explore-menu">
            <button className="group relative px-10 py-4 bg-[#FF5A36] text-white rounded-xl font-['Plus_Jakarta_Sans'] font-bold text-lg overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,90,54,0.35)] active:scale-95">
              <span className="relative z-10">View Menu</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </a>

          {/* Secondary */}
          <a href="#how-it-works">
            <button className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-['Plus_Jakarta_Sans'] font-bold text-lg hover:bg-white/20 transition-all active:scale-95">
              How it Works
            </button>
          </a>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/40 text-[10px] font-semibold tracking-widest uppercase font-['Inter']">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
};

export default Header;
