import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from './styles';

const Input = ({ value, handleChange }) => (
	<StyledInput>
		<label htmlFor="search">
			Busque por artistas, álbums ou músicas
			<input
				type="text"
				onChange={handleChange}
				value={value}
				id="search"
				placeholder="Comece a escrever..."
			/>
		</label>
	</StyledInput>
);

Input.propTypes = {
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
};

export default Input;
