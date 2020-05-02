export const space = 8;
export const fontSizeBase = 10;

export const colors = {
	black: '#333',
	dark: '#999',
	light: '#FAFAFA',
	hover: 'rgba(0, 0, 0, .5)',
	green: '#1DB954',
	greenHover: '#1ED760',
};

export const fontSize = {
	large: `${48 / fontSizeBase}rem`, // 4.8rem
	medium: `${24 / fontSizeBase}rem`, // 2.4rem
	regular: `${18 / fontSizeBase}rem`, // 1.8rem
	small: `${16 / fontSizeBase}rem`, // 1.6rem
	xmall: `${14 / fontSizeBase}rem`, // 1.4rem
};

export const metric = (...values) =>
	values
		.map(value => (Number(value) ? `${(value * space) / 10}rem` : value))
		.join(' ');

export const medias = {
	tablet: snippet => `
		@media (min-width: 768px) {
			${snippet}
		}
	`,

	desktop: snippet => `
		@media (min-width: 1024px) {
			${snippet}
		}
	`,
};
