import { Menu, X } from "lucide-react";
import { useState } from "react";
import { bandInfo, navLinks } from "../data/siteContent";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-stone-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#home"
          className="flex items-center gap-3 text-white"
          aria-label={`${bandInfo.name} home`}
          onClick={closeMenu}
        >
          <img
            src={bandInfo.logo}
            alt=""
            className="h-11 w-11 rounded-md border border-amber-300/30 object-cover"
          />
          <span className="leading-none">
            <span className="block text-sm font-black uppercase tracking-[0.18em] sm:text-base">
              {bandInfo.name}
            </span>
            <span className="mt-1 hidden text-xs uppercase tracking-[0.18em] text-amber-200/80 sm:block">
              Live Rock Band
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.18em] text-stone-300 transition hover:text-amber-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-stone-950/95 px-5 py-4 shadow-2xl md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-sm font-bold uppercase tracking-[0.18em] text-stone-200 transition hover:bg-white/10 hover:text-amber-200"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
