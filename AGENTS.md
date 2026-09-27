<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture

- Shared public-site navigation and footer live in `src/components/site-shell.tsx` so every guide route stays visually consistent.
- Oil content lives in `src/lib/oils.ts`; the `/oils/$slug` route renders all six profiles from one validated source.
