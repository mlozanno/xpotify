import React from 'react';
import { useSelector } from 'react-redux';

const ErrorMessage = () => {
	const { error } = useSelector(state => state);

	return <>{error && <span style={{ color: '#ff6b6b' }}>{error}</span>}</>;
};

export default ErrorMessage;
