import { movies } from '../movies';
import { json } from '@sveltejs/kit';
import type { Movie } from '$lib/types';

export function GET() {
	const selection: Movie[] = [];

	while (selection.length < 12) {
		const i = Math.floor(Math.random() * movies.length);
		const movie = movies[i];

		if (movie.thumbnail !== '' && !selection.includes(movie)) {
			selection.push(movie);
		}
	}

	return json(selection);
}
