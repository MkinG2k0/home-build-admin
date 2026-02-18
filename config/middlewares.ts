import type { Core } from '@strapi/strapi'

const config: Core.Config.Middlewares = [
	'strapi::logger',
	'strapi::errors',
	'strapi::security',
	'strapi::poweredBy',
	'strapi::query',
	'strapi::body',
	'strapi::session',
	'strapi::favicon',
	'strapi::public',
	{
		name: 'strapi::cors',
		config: {
			enabled: true,
			headers: '*',
			origin: '*',
			credentials: true,
		},
	},
]

export default config
