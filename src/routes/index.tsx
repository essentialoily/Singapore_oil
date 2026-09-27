import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { oils } from "@/lib/oils";
import heroImage from "@/assets/monstera-condensation.jpg";
import courtyardImage from "@/assets/singapore-courtyard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Essential Oils SG — A safety-first tropical guide" },
    { name: "description", content: "An independent guide to essential oils, safe dilution and practical blends for Singapore's heat, humidity and haze." },
    { property: "og:title", content: "Essential Oils SG — A safety-first tropical guide" },
    { property: "og:description", content: "Six essential oils explained honestly for Singapore's tropical climate." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

function HomePage() {
  return <SiteShell>
    <section className="relative overflow-hidden">
      <div className="animate-drift pointer-events-none absolute inset-0 opacity-60"><div className="absolute -top-24 left-[8%] size-72 rounded-full bg-primary/10 blur-3xl" /><div className="absolute right-[10%] top-16 size-80 rounded-full bg-accent/60 blur-3xl" /></div>
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 lg:grid-cols-12 lg:py-20">
        <div className="animate-rise lg:col-span-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Singapore · Heat · Humidity · Haze · Dengue · A/C</p>
          <h1 className="mt-4 max-w-xl font-display text-5xl leading-[1.05] sm:text-6xl">A clear-eyed guide to six oils, <em className="text-primary">made for the tropics.</em></h1>
          <p className="mt-5 max-w-[48ch] text-[15px] leading-7 text-muted-foreground">Practical, safety-first education for Singapore’s climate — no claims beyond the evidence, no affiliate links, no sales.</p>
          <div className="mt-7 grid grid-cols-1 gap-3 min-[390px]:grid-cols-2 sm:flex">
            <a href="#library" className="min-h-11 rounded-[14px] bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground transition hover:bg-primary/85">Browse the six oils</a>
            <Link to="/safety" className="min-h-11 rounded-[14px] border border-border bg-surface px-5 py-3 text-center text-sm font-semibold backdrop-blur-md transition hover:bg-card">Read Safety 101</Link>
          </div>
        </div>
        <div className="animate-rise lg:col-span-6 [animation-delay:120ms]">
          <div className="rounded-[18px] bg-surface p-3 ring-1 ring-foreground/5 backdrop-blur-md"><img src={heroImage} alt="Condensation droplets on a tropical monstera leaf" width={1088} height={1200} className="aspect-[5/6] w-full rounded-[12px] object-cover" /></div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 pb-14">
      <div className="rounded-[16px] bg-primary/10 p-6 ring-1 ring-primary/25 backdrop-blur-md">
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-4"><h2 className="text-xl font-semibold">Safety 101 — read before you dilute</h2><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Non-negotiable</span></div>
        <div className="grid gap-6 pt-5 md:grid-cols-3">
          {[['01 · Dilute','Skin use only at 1–3%. In humid heat, lean toward the lower end.'],['02 · Patch test','Apply diluted oil to your inner forearm and wait a full 24 hours.'],['03 · Never ingest','Keep oils away from eyes, children and pets. Never swallow them.']].map(([title,text]) => <div key={title}><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">{title}</p><p className="mt-2 text-sm leading-6">{text}</p></div>)}
        </div>
        <p className="mt-5 text-[13px] text-muted-foreground">These oils may complement comfort routines, never replace medical care.</p>
      </div>
    </section>

    <section id="library" className="mx-auto max-w-6xl scroll-mt-20 px-6 pb-14">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4"><h2 className="text-xl font-semibold">The six-oil library</h2><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Open an oil for its full profile</span></div>
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
        {oils.map((oil) => <Link key={oil.slug} to="/oils/$slug" params={{ slug: oil.slug }} className="group grid min-h-32 grid-cols-[112px_minmax(0,1fr)] items-center gap-4 rounded-[14px] bg-surface p-3 ring-1 ring-foreground/5 backdrop-blur-md transition hover:-translate-y-1 hover:bg-card hover:ring-primary/30 sm:block sm:p-4">
          <img src={oil.image} alt={`${oil.name} botanical specimen`} loading="lazy" width={816} height={816} className="aspect-square w-full rounded-[10px] object-cover" />
          <div className="flex min-w-0 items-start justify-between gap-2 sm:mt-3"><div className="min-w-0"><h3 className="text-sm font-semibold">{oil.name}</h3><p className="mt-1 text-[12px] leading-snug text-muted-foreground">{oil.cardSummary}</p></div><ArrowRight size={16} className="mt-0.5 shrink-0 text-primary transition-transform group-hover:translate-x-1" /></div>
        </Link>)}
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 pb-16">
      <div className="grid gap-5 lg:grid-cols-12">
        <div className="flex flex-col justify-center rounded-[16px] bg-surface p-6 ring-1 ring-foreground/5 backdrop-blur-md lg:col-span-5"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">SG Blends</p><h2 className="mt-2 text-xl font-semibold">Recipes tuned to this island</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Haze season, dengue defence, A/C headaches and humid commutes — each recipe comes with clear limits.</p><Link to="/blends" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">See the blend index <ArrowRight size={15} /></Link></div>
        <img src={courtyardImage} alt="A rain-cooled tropical modernist courtyard in Singapore" loading="lazy" width={1088} height={720} className="min-h-[220px] w-full rounded-[16px] object-cover ring-1 ring-foreground/5 lg:col-span-7 lg:h-full" />
      </div>
    </section>
  </SiteShell>;
}