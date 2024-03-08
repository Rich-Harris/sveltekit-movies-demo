<script>
	let { data } = $props();
</script>

<div style="display:flex">
	<div style="background:#eee;margin-right:20px;width:270px;height:400px">
		<img
			src={data.movie.thumbnail}
			alt="movie poster"
			style="object-fit:cover;transition:opacity 300ms ease-in-out;width:100%;height:100%"
		/>
	</div>
	<div style="flex:1">
		<h1 style="margin-top:0">{data.movie.title} ({data.movie.year})</h1>
		<p>{data.movie.extract}</p>
	</div>
</div>
