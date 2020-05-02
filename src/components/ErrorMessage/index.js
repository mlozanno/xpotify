import React from 'react';

// import { Container } from './styles';

import store from '~/store';

const ErrorMessage = () => {
	const { error } = store.getState();

	return <>{error && <span style={{ color: '#ff6b6b' }}>{error}</span>}</>;
};

export default ErrorMessage;
