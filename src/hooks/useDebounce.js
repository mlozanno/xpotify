import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		console.log();

		return () => {
			clearTimeout(handler);
		};
	}, [value]);

	return debouncedValue;
};

export default useDebounce;
