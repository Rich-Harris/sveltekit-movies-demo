<script>
	import Search from '$lib/components/Search.svelte';

	let { children } = $props();
</script>

<div style="width:800px;margin:10px auto">
	<div style="display:flex;justify-content:space-between;align-items:center">
		<h1><a href="/">Movies!</a></h1>
		<div>
			<a href="https://github.com/Rich-Harris/sveltekit-movies-demo">Code</a>
			• <a href="https://kit.svelte.dev">SvelteKit</a>
		</div>
		<Search />
	</div>

	{@render children()}

	<br style="clear:both" />
</div>

<style>
	:root {
		font-family: system-ui, sans-serif;
		font-size: 16px;
		letter-spacing: 0.01em;
		font-weight: 300;
		line-height: 1.5;
	}
</style>
