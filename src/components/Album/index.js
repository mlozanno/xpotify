import React from 'react';
import PropTypes from 'prop-types';

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

Album.propTypes = {
	id: PropTypes.string.isRequired,
	images: PropTypes.arrayOf(PropTypes.object).isRequired,
	name: PropTypes.string.isRequired,
	artists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Album;
