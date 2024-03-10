import { createRouteHandler } from 'uploadthing/next';

import { ourFileRouter } from './core';

export const { GET, POST } = createRouteHandler({
	router: ourFileRouter,
	config: {
		callbackUrl: `${process.env.NEXT_PUBLIC_URL}/api/uploadthing/`,
		uploadthingId: process.env.UPLOADTHING_SECRET,
	},
});
