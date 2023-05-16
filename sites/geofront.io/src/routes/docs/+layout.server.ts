import type { LayoutServerLoad } from './$types';
import fs from 'fs';
import { base } from '$app/paths';
import fm from 'front-matter';
import type { MarkDownMetadata } from '$lib/interfaces';

export const prerender = true;

const base_dir = '../../documentation/docs';
const pattern = /^\d\d-/;

export const load: LayoutServerLoad = async () => {
	const sections = fs
		.readdirSync(base_dir)
		.filter((subdir) => pattern.test(subdir))
		.map((subdir) => {
			const meta = JSON.parse(fs.readFileSync(`${base_dir}/${subdir}/meta.json`, 'utf-8'));
			return {
				title: meta.title,
				pages: fs
					.readdirSync(`${base_dir}/${subdir}`)
					.filter((file) => pattern.test(file))
					.map((file) => {
						const markdown = fs.readFileSync(`${base_dir}/${subdir}/${file}`, 'utf-8');
						const metadata = fm(markdown).attributes as MarkDownMetadata;

						const slug = file.slice(3, -3);

						return {
							title: metadata.title,
							path: `${base}/docs/${slug}`
						};
					})
			};
		});

	return {
		sections
	};
};
