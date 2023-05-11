import type { LayoutServerLoad } from './$types';
import yaml from 'js-yaml';
import type { Config } from '../lib/interfaces';

export const load: LayoutServerLoad = async (event) => {
	const res = await event.fetch('config.yaml');
	const blob = await res.blob();
	const yamlAsString = await blob.text();

	const config = yaml.load(yamlAsString) as Config;

	return {
		config
	};
};
