import React from "react";

const Hero = () => {
  return (
    <section>
      {/* Header */}
      <header className="site-header z-50 backdrop-blur-2xl backdrop-saturate-150 bg-(--base-black-50,#00000080) transition-colors duration-300 sticky top-0 left-0 w-full sm:sticky sm:top-0 sm:left-1/2 sm:-translate-x-1/2 sm:w-[393px] md:max-w-[1440px] md:fixed md:top-0 md:w-full md:left-1/2 md:-translate-x-1/2">
        {/* Mobile header */}
        <div className="w-[393px] h-16 grid grid-cols-[42.3px_1fr_auto_auto] grid-rows-1 items-center mx-auto gap-2 px-4 md:hidden">
          <div className="w-[26.3px] h-[28.85px]">
            <img src="/Assets/Header/logo-symbol.svg" alt="Logo" />
          </div>
          <div className="font-outfit font-semibold text-[21.33px]/[32px] tracking-[0%]">
            AI-NovaNX
          </div>
          <button
            type="button"
            id="mobile-theme-toggle"
            data-theme-toggle
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#252B37]/70 bg-transparent transition-colors duration-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF623E] in-[.theme-light]:border-[#DEDCDC] in-[.theme-light]:hover:bg-black/5"
            aria-label="Toggle theme"
            aria-pressed="false"
          >
            <span
              data-theme-label
              data-dark="🌙"
              data-light="☀︎"
              className="text-[14px] font-['Quicksand'] text-[#FDFDFD] transition-colors in-[.theme-light]:text-[#0A0D12]"
            >
              🌙
            </span>
          </button>
          <a
            href="./menu.html"
            className="justify-self-end"
            aria-label="Open menu"
          >
            <img
              src="/Assets/Header/menu-01.svg"
              alt=""
              className="theme-icon"
            />
          </a>
        </div>

        {/* Desktop/Tablet header */}
        <div className="hidden md:grid mx-auto h-[84px] w-[1440px] grid-cols-[auto_auto_1fr_197px] items-center justify self-center px-[140px]">
          <div className="w-[29.59px] h-[32.46px]">
            <img src="/Assets/Header/logo-symbol.svg" alt="Logo" />
          </div>
          <div className="ml-4 font-outfit font-semibold text-[24px]/[36px] tracking-[0]">
            AI-NovaNX
          </div>
          <nav className="nav-container flex items-center justify-self-center gap-6 text-[16px]/[30px]">
            <a
              className="font-['Quicksand'] font-semibold tracking-[0]"
              href="#about"
            >
              About
            </a>
            <a
              className="font-['Quicksand'] font-semibold tracking-[0]"
              href="#services"
            >
              Service
            </a>
            <a
              className="font-['Quicksand'] font-semibold tracking-[0]"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="font-['Quicksand'] font-semibold tracking-[0]"
              href="#testimonials"
            >
              Testimonials
            </a>
            <a
              className="font-['Quicksand'] font-semibold tracking-[0]"
              href="#faq"
            >
              FAQ
            </a>
          </nav>
          <div className="flex items-center justify-end gap-3">
            <a
              href="#lets-talk"
              className="flex  w-[197px] h-11 items-center justify-center rounded-full bg-[#FF623E] px-6 font-['Quicksand'] font-bold text-[14px]/[28px] tracking-[0] shadow-[inset_4px_4px_4px_0px_#FFFFFF40] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF623E] in-[.theme-light]:text-white"
              aria-label="Jump to Let’s Talk section"
            >
              Let’s Talk
            </a>
            <button
              type="button"
              id="header-theme-toggle"
              data-theme-toggle
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#252B37]/70 bg-transparent transition-colors duration-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF623E] in-[.theme-light]:border-[#DEDCDC] in-[.theme-light]:hover:bg-black/5"
              aria-label="Toggle theme"
              aria-pressed="false"
            >
              <span
                data-theme-label
                data-dark="🌙"
                data-light="☀︎"
                className="text-[16px] font-['Quicksand'] text-[#FDFDFD] transition-colors in-[.theme-light]:text-[#0A0D12]"
              >
                🌙
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to offset fixed header */}
      <div id="header-spacer" className="block h-16 md:h-[84px]"></div>

      {/* Hero Section */}
      <hero-section id="about" class="scroll-mt-16">
        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="w-[393px] h-[88px] mt-[61px] grid grid-cols-[16px_361px_16px] grid-rows-[88px]">
            <div className="col-start-2">
              <h1 className="font-['Quicksand'] font-bold text-[36px]/[44px] tracking-[-0.02em]">
                Your Tech Partner for
                <br />
                <span className="text-[#FF6C37]">Smarter Growth</span>
              </h1>
            </div>
          </div>
          <div className="w-[393px] h-[60px] mt-2 grid grid-cols-[16px_361px_16px] grid-rows-[60px]">
            <div className="col-start-2 self-center">
              <p className="font-semibold text-[16px]/[30px] tracking-[0em]">
                We deliver tailored IT solutions to help you scale with speed
                and confidence.
              </p>
            </div>
          </div>
          <div className="w-[393px] h-[60px] mt-10 grid grid-cols-[16px_361px_16px] grid-rows-[60px]">
            <a
              href="#lets-talk"
              className="w-[361px] h-11 bg-[#FF623E] shadow-[inset_4px_4px_4px_0px_#FFFFFF40] rounded-full font-['Quicksand'] font-bold text-[14px]/[28px] tracking-[0em] col-start-2 inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF623E] in-[.theme-light]:text-white"
              aria-label="Jump to Let’s Talk section"
            >
              Let’s Talk
            </a>
          </div>
          <div className="w-[393px] h-[391px] mt-[43px] flex-col justify-center items-center">
            <img
              src="/Assets/Image Hero.svg"
              alt="Hero Image Dark"
              className="block in-[.theme-light]:hidden"
            />
            <img
              src="/Assets/Hero-light.svg"
              alt="Hero Image Light"
              className="hidden in-[.theme-light]:block"
            />
          </div>
          <div className="w-[393px] h-[30px] mt-11">
            <p className="font-semibold text-center text-[16px]/[30px] tracking-[-0.02em]">
              Trusted by Global Innovators & Leading Brands
            </p>
          </div>
          <div className="w-[393px] h-[114px] bg-[#000000] grayscale flex flex-col items-center justify-center">
            <img
              src="/Assets/Logos Row.svg"
              alt="Partner Logos Dark"
              className="block in-[.theme-light]:hidden"
            />
            <img
              src="/Assets/Logo Row Light.svg"
              alt="Partner Logos Light"
              className="hidden in-[.theme-light]:block"
            />
          </div>
        </div>

        {/* Desktop/Tablet layout */}
        <div className="container hidden md:grid md:mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className=" w-[1440px] h-[747px] grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text column */}
            <div>
              <h1 className="font-['Quicksand'] font-bold tracking-[-0.02em] text-[56px]/[68px] lg:text-[56px]/[64px]">
                Your Tech Partner for
                <span className="block text-[#FF6C37]">Smarter Growth</span>
              </h1>
              <p className="mt-5 text-[20px]/[34px] tracking-[0em] lg:text-[18px]/[30px] font-quicksand font-semibold text-(--text)">
                We deliver tailored IT solutions to help you scale with speed
                and confidence.
              </p>
              <div className="mt-8">
                <a
                  href="#lets-talk"
                  className="flex items-center justify-center w-[200px] h-[48px] px-7 rounded-full bg-[#FF623E] shadow-[inset_4px_4px_4px_0px_#FFFFFF40] font-['Quicksand'] font-bold text-[16px]/[30px] tracking-[-0.02em] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF623E] in-[.theme-light]:text-white"
                >
                  Let’s Talk
                </a>
              </div>
            </div>
            {/* Image column */}
            <div className="w-full">
              <img
                src="/Assets/Assets-desktop/Image Hero.svg"
                alt="Hero Image Dark"
                className="block in-[.theme-light]:hidden w-full h-auto "
              />
              <img
                src="/Assets/Assets-desktop/Hero-light.svg"
                alt="Hero Image Light"
                className="hidden in-[.theme-light]:block w-full h-auto"
              />
            </div>
          </div>
          {/* Logos row */}
          <div className="mt-12 lg:mt-16 bg-[--bg]">
            <p className="font-['Quicksand'] font-bold text-[24px]/[36px] tracking-[0em] text-center">
              Trusted by Global Innovators & Leading Brands
            </p>
            <div className="mt-6 bg-(--bg) grayscale flex items-center justify-center md:justify-start">
              <img
                src="/Assets/Assets-desktop/Dark-Logo-Rows.svg"
                alt="Partner Logos Dark"
                className="block in-[.theme-light]:hidden w-full h-auto"
              />
              <img
                src="/Assets/Assets-desktop/Light-Logo-Rows.svg"
                alt="Partner Logos Light"
                className="hidden in-[.theme-light]:block w-full h-auto"
              />
            </div>
          </div>
        </div>
      </hero-section>
    </section>
  );
};

export default Hero;
