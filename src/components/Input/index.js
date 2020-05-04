import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { StyledInput } from './styles';

const Input = ({ handleChange }) => {
	const { search } = useSelector(state => state.albums);

	return (
		<StyledInput>
			<label htmlFor="search">
				Busque por artistas, álbums ou músicas
				<input
					type="text"
					onChange={handleChange}
					value={search}
					id="search"
					placeholder="Comece a escrever..."
				/>
			</label>
		</StyledInput>
	);
};

Input.propTypes = {
	handleChange: PropTypes.func.isRequired,
};

export default Input;
