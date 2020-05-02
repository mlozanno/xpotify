import React from 'react';
import { Link } from 'react-router-dom';

import { StyledAlbum } from './styles';

import { mergeArtists, getImage } from '~/utils';

const Album = ({ id, images, name, artists }) => (
	<StyledAlbum key={id} data-testid="album">
		<img
			src={getImage(images, 300).url}
			alt={`${name} - ${mergeArtists(artists)}`}
		/>
		<h1>{name}</h1>
		<h2>{mergeArtists(artists)}</h2>
	</StyledAlbum>
);

export default Album;
