import { movies } from '../movies';
import { json } from '@sveltejs/kit';
import { search } from '$lib/data';

export function GET({ url }) {
	const query = url.searchParams.get('q');
	const results = search(movies, query);

	return json(results);
}
