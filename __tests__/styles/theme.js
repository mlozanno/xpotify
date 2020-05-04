import { metric, medias } from '~/styles/theme';

describe('Theme value and functions', () => {
	describe('metric', () => {
		it('should convert to `rem`', () => {
			expect(metric(2, 1, 10)).toBe('1.6rem 0.8rem 8rem');
		});

		it('should not convert if it is not a Number', () => {
			expect(metric(2, 'auto', 10)).toBe('1.6rem auto 8rem');
		});
	});

	describe('Media', () => {
		it('should return 768px on tablet', () => {
			const tablet = JSON.stringify(
				medias.tablet('background-color: white;')
			).replace(/\\(n|t)/g, '');

			const snippet = JSON.stringify(
				`
				@media (min-width: 768px) {
					background-color: white;
				}
			`
			).replace(/\\(n|t)/g, '');

			expect(tablet).toBe(snippet);
		});

		it('should return 1024px on desktop', () => {
			const desktop = JSON.stringify(
				medias.desktop('background-color: white;')
			).replace(/\\(n|t)/g, '');

			const snippet = JSON.stringify(
				`
				@media (min-width: 1024px) {
					background-color: white;
				}
			`
			).replace(/\\(n|t)/g, '');

			expect(desktop).toBe(snippet);
		});
	});
});
