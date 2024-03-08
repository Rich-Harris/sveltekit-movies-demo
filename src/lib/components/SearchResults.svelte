<script lang="ts">
	import type { Movie } from '$lib/types';

	let { movies }: { movies: Movie[] } = $props();
</script>

<ul style="padding:0 20px;min-height:1rem">
	{#each movies as movie}
		<li>
			<div>
				<h3 style="margin-bottom: 0px;">
					<a href="/movie/{movie.id}">{movie.title}</a>
				</h3>
				<p style="margin-top: 0px;">{movie.extract}</p>
			</div>
		</li>
	{/each}
</ul>
