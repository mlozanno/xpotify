import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom';

import Album from '~/components/Album';

const albumData = {
	id: '3I9Z1nDCL4E0cP62flcbI5',
	name: 'Appetite For Destruction',
	artists: [{ name: "Guns N' Roses" }],
	images: [
		{
			height: 300,
			url: 'http://images.com/300',
			width: 300,
		},
	],
};

const altText = `${albumData.name} - ${albumData.artists[0].name}`;

describe('<Album />', () => {
	it('should render the <Album /> component', () => {
		const { getByTestId } = render(
			<MemoryRouter>
				<Album {...albumData} />
			</MemoryRouter>
		);

		const album = getByTestId('album');

		expect(album).toBeDefined();
	});

	it('should album have an image', () => {
		const { getByTestId, getByAltText } = render(
			<MemoryRouter>
				<Album {...albumData} />
			</MemoryRouter>
		);

		const album = getByTestId('album');
		const albumImage = getByAltText(altText);

		expect(album).toContainElement(albumImage);
	});

	it('should image have an url', () => {
		const { getByAltText } = render(
			<MemoryRouter>
				<Album {...albumData} />
			</MemoryRouter>
		);

		const albumImage = getByAltText(altText);

		expect(albumImage).toHaveAttribute(
			'src',
			expect.stringContaining('http://images.com/300')
		);
	});

	it('should image have an alt value', () => {
		const { getByAltText } = render(
			<MemoryRouter>
				<Album {...albumData} />
			</MemoryRouter>
		);

		const albumImage = getByAltText(altText);

		expect(albumImage).toHaveAttribute('alt', expect.stringContaining(altText));
	});

	it('should album have a title', () => {
		const { getByTestId, getByText } = render(
			<MemoryRouter>
				<Album {...albumData} />
			</MemoryRouter>
		);

		const album = getByTestId('album');
		const albumTitle = getByText(albumData.name);

		expect(album).toContainElement(albumTitle);
	});

	it('should album have an artist', () => {
		const { getByTestId, getByText } = render(
			<MemoryRouter>
				<Album {...albumData} />
			</MemoryRouter>
		);

		const album = getByTestId('album');
		const albumArtist = getByText(albumData.artists[0].name);

		expect(album).toContainElement(albumArtist);
	});
});
