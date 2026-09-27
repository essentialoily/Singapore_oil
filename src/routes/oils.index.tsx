import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { oils } from "@/lib/oils";

export const Route = createFileRoute("/oils/")({
  head: () => ({ meta: [
    { title: "The six-oil library — Essential Oils SG" },
    { name: "description", content: "Browse safety-first profiles for lavender, tea tree, eucalyptus, peppermint, lemongrass and cedarwood." },
    { property: "og:title", content: "The six-oil library — Essential Oils SG" },
    { property: "og:description", content: "Six clear, practical essential oil profiles for tropical Singapore." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: OilsPage,
});
function OilsPage(){return <SiteShell><PageIntro eyebrow="The library · Six profiles" title="Know the bottle before you open it."><p>What each oil is known for, sensible ways to use it, and the limits that matter in Singapore’s climate.</p></PageIntro><section className="mx-auto grid max-w-6xl gap-4 px-6 pb-20 sm:grid-cols-2 lg:grid-cols-3">{oils.map((oil)=><Link key={oil.slug} to="/oils/$slug" params={{slug:oil.slug}} className="group grid min-h-36 grid-cols-[128px_minmax(0,1fr)] items-center overflow-hidden rounded-[14px] bg-surface p-3 ring-1 ring-foreground/5 transition hover:-translate-y-1 hover:ring-primary/30 sm:block sm:p-0"><img src={oil.image} alt={`${oil.name} botanical specimen`} loading="lazy" width={816} height={816} className="aspect-square w-full rounded-[10px] object-cover sm:rounded-none"/><div className="min-w-0 p-2 sm:p-5"><p className="font-mono text-[9px] uppercase tracking-[0.16em] text-primary">{oil.label}</p><div className="mt-2 flex justify-between gap-3"><h2 className="text-lg font-semibold">{oil.name}</h2><ArrowRight size={16} className="shrink-0 text-primary transition-transform group-hover:translate-x-1"/></div><p className="mt-2 text-sm leading-6 text-muted-foreground">{oil.cardSummary}</p></div></Link>)}</section></SiteShell>}