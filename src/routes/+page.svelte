<script lang="ts">
	let { data } = $props();
</script>

<p>Some random movies from the database:</p>

<ul>
	{#each data.movies as movie}
		<li><a href="/movie/{movie.id}">{movie.title}</a></li>
	{/each}
</ul>
