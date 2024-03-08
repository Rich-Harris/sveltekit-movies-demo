import { local, search } from '$lib/data.js';
import type { Movie } from '$lib/types.js';

export async function load({ fetch, url }) {
	const query = url.searchParams.get('q');
	let movies: Movie[];

	if (!query) {
		movies = [];
	} else if (local) {
		movies = search(local, query);
	} else {
		const response = await fetch(`/api/search?q=${query}`);
		movies = await response.json();
	}

	return {
		movies
	};
}
