import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import AlbumList from '~/components/AlbumList';

describe('<AlbumList />', () => {
	it('should render the <AlbumList /> component', () => {
		const { getByTestId } = render(
			<AlbumList>
				<div />
			</AlbumList>
		);

		const albumList = getByTestId('album-list');

		expect(albumList).toBeDefined();
	});

	it('should render a children', () => {
		const { getByText } = render(
			<AlbumList>
				<h1>Rendered!</h1>
			</AlbumList>
		);

		const children = getByText('Rendered!');

		expect(children).toBeDefined();
	});
});
