export interface Config {
	name: string;
	title: string;
	summary: string;
	copyright: string;
	socialmedia: {
		github: string;
		linkedin: string;
		twitter: string;
	};
	description: string;
	services: {
		id: string;
		name: string;
		icon: string;
		items: string[];
	}[];
	teams: {
		id: string;
		name: string;
		photo: string;
		description: string;
		github: string;
		linkedin: string;
		twitter: string;
	}[];
}
