import { mergeArtists, getImage, convertToHumanTime } from '~/utils';

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

	describe('Util convertToHumanTime', () => {
		it('Should receive 0m and convert to 0:00', () => {
			expect(convertToHumanTime(0)).toEqual('0:00');
		});

		it('Should receive 1000ms and convert to 0:01', () => {
			expect(convertToHumanTime(1000)).toEqual('0:01');
		});

		it('Should receive 11000 and convert to 0:11', () => {
			expect(convertToHumanTime(11000)).toEqual('0:11');
		});

		it('Should receive 60000 and convert to 1:00', () => {
			expect(convertToHumanTime(60000)).toEqual('1:00');
		});

		it('Should be receive ms in string and convert to 1:00', () => {
			expect(convertToHumanTime('60000')).toEqual('1:00');
		});
	});
});
