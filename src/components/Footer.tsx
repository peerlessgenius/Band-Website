import { bandInfo, socialLinks } from "../data/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <p className="text-lg font-black uppercase tracking-[0.16em] text-white">
            {bandInfo.name}
          </p>
          <p className="mt-2 text-sm text-stone-400">{bandInfo.shortTagline}</p>
          <p className="mt-2 text-xs text-stone-500">
            © {new Date().getFullYear()} {bandInfo.name}. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="text-xs font-bold uppercase tracking-[0.16em] text-stone-400 transition hover:text-amber-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
