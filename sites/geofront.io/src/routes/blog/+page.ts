import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export const load: PageLoad = async () => {
	throw redirect(307, `${base}/blog/introduction`);
};
