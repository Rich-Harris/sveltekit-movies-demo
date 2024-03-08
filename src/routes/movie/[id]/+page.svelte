<script>
	let { data } = $props();
</script>

<div>
	<img src={data.movie.thumbnail} alt="movie poster" />
	<h1 style="margin-top:0">{data.movie.title} ({data.movie.year})</h1>
	<p>{data.movie.extract}</p>
</div>

<style>
	img {
		background: #eee;
		margin: 0 0 1rem 1rem;
		aspect-ratio: 2 / 3;
		width: 40%;
		float: right;
		object-fit: cover;
	}
</style>
