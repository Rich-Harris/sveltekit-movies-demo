import { browser } from '$app/environment';
import url from './data.json?url';
import type { Movie } from './types';

export let local: Movie[];

if (browser) {
	fetch(url).then(async (request) => {
		local = await request.json();
	});
}

export function search(movies: Movie[], query: string | null) {
	const results: Movie[] = [];
	if (!query) return results;

	const q = query.toLowerCase().trim();

	for (const movie of movies) {
		if (movie.title.toLowerCase().includes(q) || movie.extract.toLowerCase().includes(q)) {
			results.push(movie);

			// magic number alert — don't try and sort the entire list
			if (results.length === 200) break;
		}
	}

	results.sort((a, b) => {
		const ai = a.title.toLowerCase().indexOf(q);
		const bi = b.title.toLowerCase().indexOf(q);

		// prefer title over extract
		if (ai === -1) return 1;
		if (bi === -1) return -1;

		// prefer earlier matches ("Die Hard") over later ones ("A Good Day To Die Hard")
		// and shorter titles over longer ones ("Die Hard 2")
		return ai - bi || a.title.length - b.title.length;
	});

	return results.slice(0, 20);
}
