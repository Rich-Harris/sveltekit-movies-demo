# [sveltekit-movies-demo.vercel.app](https://sveltekit-movies-demo.vercel.app)

This is an adaptation of [remix-movies.pages.dev](https://remix-movies.pages.dev/) as requested by Ryan Florence:

---

<img width="588" alt="image" src="https://github.com/Rich-Harris/sveltekit-movies-demo/assets/1162160/d8040868-9dd7-48fe-9843-199e06ab483a">

---

It's mostly the same, but has a couple of differences:

- it's built with [SvelteKit](https://kit.svelte.dev) (I'll let you figure out which app has less code and smaller bundles)
- the CSS is mobile-friendly
- the search works without JavaScript
- the search results have some ranking applied
- the dataset is just a `.json` file, so that it runs anywhere

## What does this show?

Okay, the app is pretty basic. The original was showcasing Remix's brand new `clientLoader` functionality, which allows routes to be populated with data in memory (rather than going back to the server all the time).

SvelteKit has had this functionality since day one, in the form of [universal (as opposed to server) `load` functions](https://kit.svelte.dev/docs/load#universal-vs-server). The details of the design are slightly different, but the outcome is basically the same — by lazily downloading the entire dataset for the application, it's possible to search and navigate entirely client-side.

## Disclaimers and credits

I built this in about 45 minutes while distracted by other things; I may have missed a couple of minor details.

Ideally the app would be running on the edge (since the data is just a `.json` file), but the data is large enough that it doesn't fit within the 4MB limit for edge functions on Vercel, where the demo is deployed. If I had longer to spend on it I would fix that, but for now it's being served from us-east-1.

Credits and thanks to Ryan and the Remix team for the original demo, and for inviting comparisons from other frameworks.
