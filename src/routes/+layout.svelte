<script lang="ts">
	import { navigating } from '$app/stores';
	import PreloadingIndicator from '$lib/components/PreloadingIndicator.svelte';
	import Search from '$lib/components/Search.svelte';

	let { children } = $props();
</script>

{#if $navigating}
	<PreloadingIndicator />
{/if}

<header>
	<h1><a href="/">Movies!</a></h1>
	<Search />
</header>

<main>
	{@render children()}
</main>

<footer>
	<div>
		<a href="https://github.com/Rich-Harris/sveltekit-movies-demo">Code</a>
		• <a href="https://kit.svelte.dev">SvelteKit</a>
	</div>
</footer>

<style>
	:root {
		font-family: system-ui, sans-serif;
		font-size: 16px;
		letter-spacing: 0.01em;
		font-weight: 300;
		line-height: 1.5;
		margin: 0;
	}

	header,
	main,
	footer {
		max-width: 40rem;
		margin: 0 auto;
		padding: 0.5rem;
	}

	header {
		@media (min-width: 24rem) {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 0.5rem;
		}
	}

	main {
		max-width: 40rem;
		margin: 0 auto;
		min-height: calc(100vh - 15rem);
	}
</style>
