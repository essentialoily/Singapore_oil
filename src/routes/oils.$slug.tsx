import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ShieldAlert } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { oils, oilsBySlug } from "@/lib/oils";

export const Route = createFileRoute("/oils/$slug")({
  loader: ({ params }) => { const oil = oilsBySlug[params.slug]; if (!oil) throw notFound(); return oil; },
  head: ({ loaderData }) => { const title = loaderData ? `${loaderData.name} essential oil — Essential Oils SG` : "Oil not found — Essential Oils SG"; const description = loaderData?.summary ?? "This oil profile is unavailable."; return { meta: [{title},{name:"description",content:description},{property:"og:title",content:title},{property:"og:description",content:description},{property:"og:type",content:"article"},{name:"twitter:card",content:"summary_large_image"}]}; },
  component: OilPage,
});
function OilPage(){const oil=Route.useLoaderData(); const index=oils.findIndex((item)=>item.slug===oil.slug); const next=oils[(index+1)%oils.length] ?? oils[0]; if (!next) return null; return <SiteShell>
  <article>
    <header className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 lg:grid-cols-12 lg:py-16">
      <div className="lg:col-span-6"><Link to="/oils" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground hover:text-primary"><ArrowLeft size={13}/> Oil library</Link><p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">{oil.label}</p><h1 className="mt-3 font-display text-5xl sm:text-6xl">{oil.name}</h1><p className="mt-3 font-display text-lg italic text-muted-foreground">{oil.latin}</p><p className="mt-6 max-w-xl text-[15px] leading-7 text-muted-foreground">{oil.summary}</p></div>
      <div className="rounded-[18px] bg-surface p-3 ring-1 ring-foreground/5 lg:col-span-6"><img src={oil.image} alt={`${oil.name} botanical specimen`} width={816} height={816} className="aspect-square w-full rounded-[12px] object-cover"/></div>
    </header>
    <section className="mx-auto grid max-w-6xl gap-5 px-6 pb-8 md:grid-cols-2">
      {[{title:"What it’s known for",items:oil.knownFor},{title:"Safe ways to use it",items:oil.uses}].map((group)=><div key={group.title} className="rounded-[16px] bg-surface p-6 ring-1 ring-foreground/5"><h2 className="text-lg font-semibold">{group.title}</h2><ul className="mt-4 space-y-3">{group.items.map((item)=><li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"/>{item}</li>)}</ul></div>)}
    </section>
    <section className="mx-auto max-w-6xl px-6 pb-8"><div className="rounded-[16px] border border-warning/35 bg-warning/10 p-6"><div className="flex gap-4"><ShieldAlert className="mt-0.5 shrink-0 text-warning" size={21}/><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-warning">Use with care</p><p className="mt-2 text-sm leading-6">{oil.warning}</p></div></div></div></section>
    <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-16 lg:grid-cols-12"><div className="lg:col-span-5"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Singapore angle</p><h2 className="mt-2 text-xl font-semibold">Made relevant to local life</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">{oil.singapore}</p></div><div className="lg:col-span-7"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Pair it with</p><div className="mt-3 divide-y divide-border rounded-[16px] bg-surface px-5 ring-1 ring-foreground/5">{oil.pairs.map((pair)=><div key={pair.name} className="flex items-center justify-between gap-4 py-4"><span className="font-semibold">{pair.name}</span><span className="text-right text-sm text-muted-foreground">{pair.note}</span></div>)}</div></div></section>
    <nav className="mx-auto flex max-w-6xl justify-between border-t border-border px-6 py-8"><Link to="/safety" className="text-sm font-semibold text-primary">Read dilution safety</Link><Link to="/oils/$slug" params={{slug:next.slug}} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Next: {next.name}<ArrowRight size={14}/></Link></nav>
  </article>
  </SiteShell>}