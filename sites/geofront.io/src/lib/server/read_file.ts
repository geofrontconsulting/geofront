import fs from 'fs';
import path from 'path';
import fm from 'front-matter';
import { marked } from 'marked';
import type { MarkDownMetadata } from '$lib/interfaces';

export const read_file = (file: string) => {
	const match = /\d{2}-(.+)\.md/.exec(path.basename(file));
	if (!match) return null;

	const data = fs.readFileSync(file, 'utf-8');
	const content = fm(data);

	const attributes = content.attributes as MarkDownMetadata;

	return {
		title: attributes.title,
		content: marked.parse(content.body)
	};
};
