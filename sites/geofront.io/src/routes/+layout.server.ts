import type { LayoutServerLoad } from './$types';
import yaml from 'js-yaml';
import fs from 'fs';
import { resolve } from 'path';
import type { Config } from '../lib/interfaces';

export const load: LayoutServerLoad = async () => {
	const config = yaml.load(
		fs.readFileSync(resolve('../../documentation/config.yaml'), 'utf8')
	) as Config;

	return {
		config
	};
};
