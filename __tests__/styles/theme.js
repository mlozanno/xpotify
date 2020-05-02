import { metric, medias } from '~/styles/theme';

describe('Theme value and functions', () => {
	it('Metric should caculate the values based on the base space and convert to `rem`', () => {
		expect(metric(2, 1, 10)).toBe('1.6rem 0.8rem 8rem');
	});

	it('Metric should not convert no Number values', () => {
		expect(metric(2, 'auto', 10)).toBe('1.6rem auto 8rem');
	});

	it('Media tablet should return 768px media query', () => {
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

	it('Media desktop should return 1024px media query', () => {
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
