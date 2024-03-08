<script lang="ts">
	let { data } = $props();
</script>

<div>
	<img src={data.movie.thumbnail} alt="movie poster" />
	<h1>{data.movie.title} ({data.movie.year})</h1>
	<p>{data.movie.extract}</p>
</div>

<style>
	h1 {
		margin-top: 0;
		text-wrap: balance;
		line-height: 1.2;
	}

	img {
		background: #eee;
		margin: 0 0 1rem 1rem;
		aspect-ratio: 2 / 3;
		width: 100%;
		float: right;
		object-fit: cover;

		@media (min-width: 24rem) {
			width: 40%;
		}
	}
</style>
