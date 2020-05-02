import { mergeArtists, getImage } from '~/utils';

const artists = [{ name: 'Angra' }, { name: 'Tarja' }];
const images = [
	{
		height: 640,
		url: 'http://images.com/640',
		width: 640,
	},
	{
		height: 300,
		url: 'http://images.com/300',
		width: 300,
	},
	{
		height: 64,
		url: 'http://images.com/64',
		width: 64,
	},
];

describe('Util mergeArtists to multiple artists case', () => {
	it('Should be return a string `Angra', () => {
		expect(mergeArtists([{ name: 'Angra' }])).toEqual('Angra');
	});

	it('Should be return a string `Angra - Tarja` ', () => {
		expect(mergeArtists(artists)).toEqual('Angra - Tarja');
	});
});

describe('Util getImage to get image by resolution', () => {
	it('Should be return a 64px image object', () => {
		expect(getImage(images, 64)).toEqual({
			height: 64,
			url: 'http://images.com/64',
			width: 64,
		});
	});

	it('Should be return a 300px image object', () => {
		expect(getImage(images, 300)).toEqual({
			height: 300,
			url: 'http://images.com/300',
			width: 300,
		});
	});

	it('Should be return a 640px image object', () => {
		expect(getImage(images, 640)).toEqual({
			height: 640,
			url: 'http://images.com/640',
			width: 640,
		});
	});
});
