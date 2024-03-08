import { browser } from '$app/environment';
import type { Movie } from '$lib/types';

let cached: Movie[];

export async function load({ fetch }) {
	const movies = cached || (await fetch('/api/random').then((r) => r.json()));

	if (browser) {
		cached = movies;
	}

	return {
		movies
	};
}
