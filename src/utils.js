export const mergeArtists = artists =>
	artists
		.reduce((acc, cur) => {
			acc.push(cur.name);

			return acc;
		}, [])
		.join(' - ');

export var getImage = (images, size) =>
	images.find(image => image.height === size);
