import { apiService } from '~/services/api';

export const getAlbums = async (token, search, limit) => {
	const config = {
		headers: { Authorization: `Bearer ${token}` },
		params: {
			q: search,
			type: 'album',
			limit,
		},
	};

	try {
		const { data } = await apiService.get('search', config);
		const payload = await data.albums.items;

		return payload;
	} catch (error) {
		console.error(error); //eslint-disable-line
	}
};
