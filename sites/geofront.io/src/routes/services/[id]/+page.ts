import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Config } from '$lib/interfaces';

export const load: PageLoad = async ({ parent, params }) => {
	const data = await parent();
	const config: Config = data.config;
	const service = config.services.find((s) => s.id === params.id);
	if (service) {
		return {
			service
		};
	}

	throw error(404, 'Not found');
};
