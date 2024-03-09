<script lang="ts">
	import { browser } from '$app/environment';
	import { onNavigate } from '$app/navigation';
	import { local, search } from '$lib/data';
	import type { Movie } from '$lib/types';
	import SearchResults from './SearchResults.svelte';

	let query = $state('');
	let visible = $state(false);
	let results: Movie[] = $state([]);

	function show(e: Event & { currentTarget: HTMLInputElement }) {
		visible = true;
		query = e.currentTarget.value;
	}

	function hide() {
		visible = false;
		query = '';
	}

	function focus(node: HTMLInputElement) {
		setTimeout(() => node.focus());
	}

	onNavigate(() => {
		visible = false;
		query = '';
	});
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'Escape') {
			hide();
		}

		if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
			visible = true;
			e.preventDefault();
		}
	}}
/>

<form action="/search" method="GET">
	<input
		name="q"
		type="Search"
		placeholder={browser
			? `Search (${navigator.userAgent.includes('Macintosh') ? 'Cmd' : 'Ctrl'}-K)`
			: 'Search'}
		onclick={show}
		oninput={show}
		value={query}
	/>
</form>

{#if visible}
	<div class="modal-background" role="presentation" onclick={hide}>
		<div class="search">
			<form action="/search" method="get">
				<input
					placeholder="search"
					type="search"
					name="q"
					value={query}
					oninput={async (e) => {
						query = e.currentTarget.value.toLowerCase();

						if (query === '') {
							results = [];
							return;
						}

						results = local
							? search(local, query)
							: await fetch(`/search?q=${query}`).then((r) => r.json());
					}}
					use:focus
				/>

				<div style="padding: 1rem">
					<SearchResults movies={results} />
				</div>
			</form>
		</div>
	</div>
{/if}

<style>
	input {
		font: inherit;
		width: 100%;
	}

	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		padding: 0.5rem;
		background: hsla(0, 100%, 100%, 0.9);
		z-index: 100;
		overflow: hidden;
		box-sizing: border-box;
	}

	.search {
		background: white;
		width: 100%;
		max-width: 600px;
		max-height: 90vh;
		overflow: auto;
		margin: 20px auto;
		border: solid 1px #ccc;
		border-radius: 10px;
		box-shadow: 0 0 10px #ccc;
	}

	.search input {
		padding: 0.5rem 1rem;
		font-size: 1.5em;
		position: sticky;
		top: 0;
		border: none;
		border-bottom: solid 1px #ccc;
		outline: none;
	}
</style>
