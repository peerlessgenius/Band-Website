import { ExternalLink } from "lucide-react";
import { videos } from "../data/siteContent";

export default function FeaturedVideos() {
  return (
    <section id="videos" className="bg-[linear-gradient(180deg,#0a0807,#15100e)]">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Watch The Band</p>
            <h2 className="section-title">Featured Performances</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-stone-400">
            Replace the placeholder YouTube IDs in the central content file when
            your real performance videos are ready.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {videos.map((video) => (
            <article key={video.youtubeId} className="metal-card overflow-hidden rounded-lg">
              <div className="aspect-video w-full bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black uppercase text-white">
                  {video.title}
                </h3>
                <p className="mt-3 leading-7 text-stone-300">{video.description}</p>
                <a
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-amber-200 transition hover:text-amber-100"
                >
                  Open on YouTube
                  <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
