import axios from 'axios';
import qs from 'qs';

import { clientId, clientSecret } from '~/config';

import localStorageService from '~/services/localStorage';
import history from '~/services/history';

export const authService = axios.create({
	baseURL: 'https://accounts.spotify.com',
	headers: {
		Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString(
			'base64'
		)}`,
		'Content-Type': 'application/x-www-form-urlencoded',
	},
});

export const apiService = axios.create({
	baseURL: 'https://api.spotify.com/v1/',
});

apiService.interceptors.request.use(
	config => {
		const token = localStorageService.getAccessToken();

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	},
	error => {
		Promise.reject(error);
	}
);

apiService.interceptors.response.use(
	response => {
		return response;
	},
	async error => {
		const originalRequest = error.config;
		if (error.response.status === 401 && originalRequest.url === '/api/token') {
			history.push('/');
			return Promise.reject(error);
		}

		if (error.response.status === 401 && !originalRequest.retry) {
			originalRequest.retry = true;

			const refreshToken = localStorageService.getRefreshToken();

			const sentData = {
				refresh_token: refreshToken,
				grant_type: 'refresh_token',
			};

			const { status, data } = await authService.post(
				'/api/token',
				qs.stringify(sentData)
			);

			if (status === 200) {
				localStorageService.setToken(data);

				apiService.defaults.headers.common.Authorization = `Bearer ${localStorageService.getAccessToken()}`;

				return authService.request(originalRequest);
			}
		}

		return Promise.reject(error);
	}
);
