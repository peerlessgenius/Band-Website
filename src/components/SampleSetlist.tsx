import { Music } from "lucide-react";
import { sampleSetlist } from "../data/siteContent";

export default function SampleSetlist() {
  return (
    <section id="setlist" className="bg-stone-950">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="eyebrow">Repertoire</p>
            <h2 className="section-title">Sample Setlist</h2>
            <p className="section-copy">
              Final setlist can be adjusted based on event type, venue and
              audience profile.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {sampleSetlist.map((song) => (
              <div
                key={song}
                className="flex items-center gap-3 rounded-md border border-white/10 bg-zinc-950/75 px-4 py-4 text-stone-100"
              >
                <Music className="shrink-0 text-amber-300" size={18} />
                <span className="text-sm font-semibold sm:text-base">{song}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
