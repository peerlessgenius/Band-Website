import { BadgeCheck, Handshake, Languages, UsersRound } from "lucide-react";
import { bookingReasons } from "../data/siteContent";

const icons = [BadgeCheck, UsersRound, Languages, Handshake];

export default function WhyBookUs() {
  return (
    <section className="border-y border-white/10 bg-zinc-950/80">
      <div className="section-shell">
        <p className="eyebrow">Event Ready</p>
        <h2 className="section-title">Why Book Us</h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {bookingReasons.map((reason, index) => {
            const Icon = icons[index] ?? BadgeCheck;
            return (
              <article
                key={reason.title}
                className="rounded-lg border border-white/10 bg-stone-950/70 p-5 transition hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
              >
                <Icon className="text-red-400" size={28} />
                <h3 className="mt-5 text-lg font-black uppercase text-white">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">{reason.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
