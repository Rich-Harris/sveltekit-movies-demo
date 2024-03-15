<script lang="ts">
	import SearchResults from '$lib/components/SearchResults.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Search results • SvelteKit Movies Demo</title>
</svelte:head>

<SearchResults movies={data.movies} />
