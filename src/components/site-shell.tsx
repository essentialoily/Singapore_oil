import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-6">
          <Link to="/" className="font-mono text-[11px] font-medium uppercase tracking-[0.2em]">
            Essential Oils <span className="text-primary">SG</span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            <Link to="/safety" activeProps={{ className: "text-primary" }} className="text-[13px] font-medium transition-colors hover:text-primary">Safety 101</Link>
            <Link to="/oils" activeProps={{ className: "text-primary" }} className="text-[13px] font-medium transition-colors hover:text-primary">Oils</Link>
            <Link to="/blends" activeProps={{ className: "text-primary" }} className="text-[13px] font-medium transition-colors hover:text-primary">SG Blends</Link>
          </nav>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground lg:block">Independent · Non-commercial</span>
          <button className="grid size-9 place-items-center rounded-md border border-border bg-surface md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-border bg-background px-5 py-4 md:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              <Link to="/safety" onClick={() => setOpen(false)} className="flex min-h-12 items-center rounded-md px-3 text-base font-medium hover:bg-surface">Safety 101</Link>
              <Link to="/oils" onClick={() => setOpen(false)} className="flex min-h-12 items-center rounded-md px-3 text-base font-medium hover:bg-surface">Oils</Link>
              <Link to="/blends" onClick={() => setOpen(false)} className="flex min-h-12 items-center rounded-md px-3 text-base font-medium hover:bg-surface">SG Blends</Link>
            </div>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="border-t border-border bg-background/70">
        <div className="mx-auto max-w-6xl px-6 py-7 text-[12px] text-muted-foreground">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono uppercase tracking-[0.16em]">Essential Oils SG — educational, non-commercial</span>
            <span>Educational content only · Not medical advice</span>
          </div>
          <p className="mt-3 max-w-3xl leading-5">
            This guide is provided for entertainment and educational purposes only. It does not offer medical, legal or professional advice, and nothing here should be taken as a substitute for guidance from a qualified healthcare provider.
          </p>
        </div>
      </footer>
    </div>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <header className="mx-auto max-w-6xl px-6 pb-10 pt-14 sm:pt-20">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">{title}</h1>
      <div className="mt-5 max-w-2xl text-[15px] leading-7 text-muted-foreground">{children}</div>
    </header>
  );
}