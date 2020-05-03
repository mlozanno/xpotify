import qs from 'qs';
import { authService } from '~/services/api';

export const getAuthToken = async (code, redirectUri) => {
	const sentData = {
		grant_type: 'authorization_code',
		code,
		redirect_uri: redirectUri,
	};

	try {
		const res = await authService.post('api/token', qs.stringify(sentData));

		const { data: payload } = await res;

		return payload;
	} catch (err) {
		console.error(err); //eslint-disable-line
	}
};
