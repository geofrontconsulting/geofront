import type { PageLoad } from './$types';

export const load: PageLoad = ({ setHeaders }) => {
	setHeaders({
		'cache-control': 'public, max-age=60'
	});
};
