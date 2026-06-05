import { Mail, Play, QrCode } from "lucide-react";
import { contactInfo, socialLinks } from "../data/siteContent";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-stone-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(185,28,28,0.24),transparent_28rem),radial-gradient(circle_at_20%_70%,rgba(217,119,6,0.14),transparent_24rem)]" />
      <div className="section-shell relative">
        <div className="grid gap-8 rounded-lg border border-amber-300/20 bg-zinc-950/75 p-6 shadow-[0_0_80px_rgba(185,28,28,0.14)] sm:p-8 lg:grid-cols-[1fr_320px] lg:p-10">
          <div>
            <p className="eyebrow">Bookings</p>
            <h2 className="section-title">{contactInfo.title}</h2>
            <p className="section-copy">{contactInfo.copy}</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={contactInfo.contactHref} className="accent-button">
                <Mail size={18} />
                Contact Us
              </a>
              <a
                href={contactInfo.youtubeHref}
                target="_blank"
                rel="noreferrer"
                className="outline-button"
              >
                <Play size={18} fill="currentColor" />
                Watch on YouTube
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-md border border-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-stone-200 transition hover:border-amber-300/50 hover:text-amber-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <aside className="rounded-lg border border-white/10 bg-stone-950/80 p-5">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-amber-200">
              <QrCode size={18} />
              Scan / Connect
            </div>
            <img
              src={contactInfo.qrCodeImage}
              alt="QR code placeholder"
              className="mt-5 aspect-square w-full rounded-md bg-white object-cover p-3"
            />
            <p className="mt-4 text-sm leading-6 text-stone-400">
              Replace this QR image with your real WeChat, booking, or social QR
              code.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
