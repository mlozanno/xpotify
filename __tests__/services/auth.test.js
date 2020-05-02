import { getAuthToken } from '~/services/auth';
import { authService } from '~/services/api';

jest.mock('~/services/api');

describe('Auth service', () => {
	it('should call authService', () => {
		authService.post.mockImplementation(() => Promise.resolve({ data: {} }));

		getAuthToken('code', 'redirect', 'clientId', 'clientSecret');
		expect(authService.post).toHaveBeenCalledTimes(1);
	});
});
