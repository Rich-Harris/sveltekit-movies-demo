<script lang="ts">
	import SearchResults from '$lib/components/SearchResults.svelte';

	let { data } = $props();
</script>

<SearchResults movies={data.movies} />
