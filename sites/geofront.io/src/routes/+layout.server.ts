import type { LayoutServerLoad } from './$types';
import yaml from 'js-yaml';
import fs from 'fs';
import type { Config } from '../lib/interfaces';

export const load: LayoutServerLoad = async (event) => {
	const config = yaml.load(fs.readFileSync('src/config.yaml', 'utf8')) as Config;

	return {
		config
	};
};
