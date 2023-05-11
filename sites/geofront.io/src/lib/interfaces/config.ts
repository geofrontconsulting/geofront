export interface Config {
	name: string;
	title: string;
	summary: string;
	copyright: string;
	socialmedia: {
		github: string;
	};
	description: string;
	services: {
		id: string;
		name: string;
		icon: string;
		items: string[];
	}[];
}
