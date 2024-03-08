import { browser } from '$app/environment';
import { fallbackThumbnail, local } from '$lib/data';
import type { Movie } from '$lib/types';
import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
	const id = Number(params.id);
	let movie: Movie | undefined;

	if (local) {
		movie = local.find((movie) => movie.id === id);
		if (!movie) error(404);
	} else {
		const response = await fetch(`/api/movie/${id}`);
		if (!response.ok) error(response.status);

		movie = (await response.json()) as Movie;
	}

	// use fallback thumbnail if movie data doesn't provide one
	if (movie.thumbnail === '') {
		movie.thumbnail = fallbackThumbnail;
	}

	if (browser) {
		// start loading thumbnail
		const img = new Image();
		img.src = movie.thumbnail;
	}

	return {
		movie
	};
}
