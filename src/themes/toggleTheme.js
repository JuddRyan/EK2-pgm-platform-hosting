import { useContext } from 'react';
import { themeContext } from '../context/themeContext';

export const toggleTheme = (currentTheme) => {
	const [, setTheme] = useContext(themeContext);

	if (currentTheme === 'light') return setTheme('dark');
	return setTheme('light');
};
