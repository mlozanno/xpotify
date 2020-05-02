import axios from 'axios';

export const authService = axios.create({
	baseURL: 'https://accounts.spotify.com',
});

export const apiService = axios.create({
	baseURL: 'https://api.spotify.com/v1/',
});
