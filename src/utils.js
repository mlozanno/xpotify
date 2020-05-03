export const mergeArtists = artists =>
	artists
		.reduce((acc, cur) => {
			acc.push(cur.name);

			return acc;
		}, [])
		.join(' - ');

export const getImage = (images, size) =>
	images.find(image => image.height === size);

export const convertToHumanTime = duration => {
	let s = parseInt((duration / 1000) % 60, 10);
	const m = parseInt((duration / (1000 * 60)) % 60, 10);

	s = s < 10 ? `0${s}` : s;

	return `${m}:${s}`;
};
