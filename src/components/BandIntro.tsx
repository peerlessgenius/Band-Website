import { Mic2, Radio, Zap } from "lucide-react";
import { bandIntro, introCards } from "../data/siteContent";

const icons = [Mic2, Radio, Zap];

export default function BandIntro() {
  return (
    <section id="about" className="border-y border-white/10 bg-stone-950">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="eyebrow">The Sound</p>
            <h2 className="section-title">{bandIntro.title}</h2>
          </div>
          <p className="text-base leading-8 text-stone-300 sm:text-lg">
            {bandIntro.copy}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {introCards.map((card, index) => {
            const Icon = icons[index] ?? Mic2;
            return (
              <article key={card.title} className="metal-card rounded-lg p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-700/20 text-amber-200 ring-1 ring-amber-300/20">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 text-xl font-black uppercase text-white">
                  {card.title}
                </h3>
                <p className="mt-3 leading-7 text-stone-300">{card.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
