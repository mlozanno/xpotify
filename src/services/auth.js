import qs from 'qs';
import { authService } from '~/services/api';

export const getAuthToken = async (
	code,
	redirectUri,
	clientId,
	clientSecret
) => {
	const sentData = {
		grant_type: 'authorization_code',
		code,
		redirect_uri: redirectUri,
	};

	const headers = {
		Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString(
			'base64'
		)}`,
		'Content-Type': 'application/x-www-form-urlencoded',
	};

	try {
		const res = await authService.post('api/token', qs.stringify(sentData), {
			headers,
		});

		const { data: payload } = await res;

		return payload;
	} catch (err) {
		console.error(err);
	}
};
