import { movies } from '../../movies';
import { error, json } from '@sveltejs/kit';

export function GET({ params }) {
	const id = Number(params.id);

	const movie = movies.find((movie) => movie.id === id);
	if (!movie) error(404);

	return json(movie);
}
