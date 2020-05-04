export default {
	setToken: ({ access_token: accessToken, refresh_token: refreshToken }) => {
		localStorage.setItem('accessToken', accessToken);

		if (refreshToken) {
			localStorage.setItem('refreshToken', refreshToken);
		}
	},
	getAccessToken: () => localStorage.getItem('accessToken'),
	getRefreshToken: () => localStorage.getItem('refreshToken'),
	clearToken: () => {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
	},
	setAlbums: albumObj => {
		localStorage.setItem('albums', JSON.stringify(albumObj));
	},
	getAlbums: () => JSON.parse(localStorage.getItem('albums')),
	clearAlbums: () => {
		localStorage.removeItem('albums');
	},
};
