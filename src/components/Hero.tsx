import { ArrowDownCircle, CalendarCheck, Play } from "lucide-react";
import { bandInfo, heroContent } from "../data/siteContent";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] overflow-hidden pt-20"
      aria-label="Homepage hero"
    >
      <img
        src={heroContent.backgroundImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,8,7,0.96),rgba(10,8,7,0.76)_43%,rgba(10,8,7,0.42)),linear-gradient(0deg,rgba(10,8,7,0.98),rgba(10,8,7,0.24)_42%,rgba(10,8,7,0.84))]" />
      <div className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />

      <div className="section-shell relative flex min-h-[calc(92vh-5rem)] items-center pb-16">
        <div className="max-w-4xl">
          <p className="eyebrow">Hong Kong / Shenzhen Live Band</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.92] text-white sm:text-7xl lg:text-8xl">
            {bandInfo.name}
          </h1>
          <p className="mt-6 max-w-3xl text-2xl font-black uppercase leading-tight text-amber-200 sm:text-4xl">
            {heroContent.tagline}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl">
            {heroContent.description}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={heroContent.primaryCta.href} className="accent-button">
              <Play size={18} fill="currentColor" />
              {heroContent.primaryCta.label}
            </a>
            <a href={heroContent.secondaryCta.href} className="outline-button">
              <CalendarCheck size={18} />
              {heroContent.secondaryCta.label}
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-5 hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-stone-400 transition hover:text-amber-200 sm:left-8 md:flex lg:left-10"
        >
          <ArrowDownCircle size={18} />
          Scroll
        </a>
      </div>
    </section>
  );
}
