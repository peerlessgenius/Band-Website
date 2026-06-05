import { members } from "../data/siteContent";

export default function BandMembers() {
  return (
    <section
      id="members"
      className="border-y border-white/10 bg-[linear-gradient(180deg,#15100e,#0a0807)]"
    >
      <div className="section-shell">
        <p className="eyebrow">Lineup</p>
        <h2 className="section-title">Meet the Band</h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-lg border border-white/10 bg-zinc-950/80"
            >
              <div className="aspect-[4/5] overflow-hidden bg-stone-900">
                <img
                  src={member.image}
                  alt={`${member.name} placeholder portrait`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-black uppercase text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-amber-200">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-7 text-stone-300">
                  {member.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
