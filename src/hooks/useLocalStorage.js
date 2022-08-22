// From video https://www.youtube.com/watch?v=6ThXsUwLWvc&t

import { useState, useEffect } from 'react';

const getStoredValue = (key, initialValue) => {
	const storedValue = JSON.parse(localStorage.getItem(key));
	if (storedValue) return storedValue;

	if (initialValue instanceof Function) return initialValue();
	return initialValue;
};

const useLocalStorage = (key, initialValue) => {
	const [value, setValue] = useState(() => {
		return getStoredValue(key, initialValue);
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value]);

	return [value, setValue];
};

export default useLocalStorage;
