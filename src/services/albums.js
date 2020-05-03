import { apiService } from '~/services/api';

export const getAlbums = async (token, search, limit) => {
	try {
		const { data } = await apiService.get(
			`search?q=${search}&type=album&limit=${limit}`
		);
		const payload = await data.albums.items;

		return payload;
	} catch (error) {
		console.error(error); //eslint-disable-line
	}
};
