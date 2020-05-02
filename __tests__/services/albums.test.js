import { getAlbums } from '~/services/albums';
import { apiService } from '~/services/api';

jest.mock('~/services/api');

describe('Auth service', () => {
	it('should call apiService', () => {
		apiService.get.mockImplementation(() =>
			Promise.resolve({ data: { albums: { items: [] } } })
		);

		getAlbums('code', 'busca', 10);
		expect(apiService.get).toHaveBeenCalledTimes(1);
	});
});
