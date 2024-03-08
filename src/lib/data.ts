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

	const q = query.toLowerCase();

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

export let fallbackThumbnail =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAACy0lEQVR4nO3Z2XbjIBAE0Bp9OZ8+Dz2e40QCNdAb0PWSE8sWXTexreVPAVAKMoxcKCWxWCnloh/p9ZJSPlhIr2Y+ONf9ocyPfLFctQ0Z4DfI1d58dG4UN6ynJ52YJ4QnrMpTD0qlfgWr/oL9Uy9ex2q+bNs0Kzex3l68W97KvmExdrFJGDUZWLwdrR1eQR4We3dLhl2NjdWz05XSU6oHq3PXC6SzTidW/wJx01+kH2tomXAZqjCENbpYlIwOP4o1saRzJsaewJpb2CdzA89hTS9vmulRp7EkhrCIxJASWAjvJTSeEBYCe8kNJoeFkF6iI4liIZiX9DDSWAjjpTCGAhYCeOkMoIMFVy+1pdWw4OSluagmFsy9lJdTxoKhl/5C+lgw8TL5k5hgQbmM1T+vFRbUKhl+LBpiQaGY7ReILRZE65kfmphjQaikx0GcBxamqzqdHjhhYaKw34mUHxaGarueortiobO898UMbyywCbylEAILDIgAUoiChSZHDCkEwkIFJYwUYmHhRhNJCuGw8AUUTAoRsfBhCiaFxOpKPKx8G3KTH/Dc5KEDN3lQyk2e7nCTJ9Lc5CUabvLiHzd5WZmbvGHBTd4K4yZvsnIjXs/WyxBLqZihlxWWaiUrLxMsgzImXvpYZm8T/YWUsYy/sJSX08RyOXTUXFQNy/EkTm1pHSzvywNKAyhguUtRFMaQxgoiRZEeRhQrlBRFdCQ5rIBSFLnBhLDCSlGExpPACi5FkRhyGmsJKcr0qHNYC0lR5gaewFpOijIx9ijWolKU0eGHsJaWogxV6MfaQIrSX6QTaxspSmedHqzNpCg9pdhYW0pR2NV4WBtLUXgFGVjbS1EYNd+wDpGivJVtYh0lRWlWrmMdKEWpF69gHStFqdR/wjpcivKEcMNKqf+5UVztzafnJ8hV25D5ly+W6/5Q5nc+ONf3L5lqSkEpfwElAotXgK0AkQAAAABJRU5ErkJggg==';
