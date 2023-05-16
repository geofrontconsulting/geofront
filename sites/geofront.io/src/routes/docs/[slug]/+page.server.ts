import fs from 'fs';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { resolve } from 'path';
import { read_file } from '$lib/server/read_file';
const base = resolve('../../documentation/docs');

export const load: PageServerLoad = async ({ params }) => {
	for (const subdir of fs.readdirSync(base)) {
		if (!fs.statSync(`${base}/${subdir}`).isDirectory()) continue;

		for (const file of fs.readdirSync(`${base}/${subdir}`)) {
			if (file.slice(3, -3) === params.slug) {
				return {
					page: await read_file(resolve(base, `./${subdir}/${file}`))
				};
			}
		}
	}

	throw error(404);
};
