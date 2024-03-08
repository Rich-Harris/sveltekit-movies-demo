<script lang="ts">
	import type { Movie } from '$lib/types';

	let { movies }: { movies: Movie[] } = $props();
</script>

{#if movies.length > 0}
	<ul>
		{#each movies as movie}
			<li>
				<h3><a href="/movie/{movie.id}">{movie.title}</a></h3>
				<p>{movie.extract}</p>
			</li>
		{/each}
	</ul>
{:else}
	<span>No results</span>
{/if}

<style>
	ul {
		padding: 0;
	}

	li {
		list-style: none;
		margin: 0 0 1rem 0;
	}

	h3,
	p {
		margin: 0;
	}
</style>
