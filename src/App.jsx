import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Homepage from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import CreateBlog from './pages/CreateBlog';
import CreateProject from './pages/CreateProject';
import Education from './pages/Education';
import Search from './pages/Search';
import Team from './pages/Team';
import Blog from './pages/Blog';
import Project from './pages/Project';

import Header from './components/Header';
import Footer from './components/Footer';

import { userContext } from './context/userContext';
import { themeContext } from './context/themeContext';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from './themes/lightTheme';
import { darkTheme } from './themes/darktheme';
import { GlobalStyles } from './themes/globalStyles';

function App() {
	let userValue;

	if (localStorage.getItem('user')) {
		userValue = JSON.parse(localStorage.getItem('user'));
	}

	const [user, setUser] = useState(userValue);
	const [theme, setTheme] = useState('dark');

	return (
		<>
			<userContext.Provider value={[user, setUser]}>
				<themeContext.Provider value={[theme, setTheme]}>
					<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
						<GlobalStyles />
						<Header />
						<Routes>
							<Route path="/" element={<Homepage />} />
							<Route path="/login" element={<Login />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/create-blog" element={<CreateBlog />} />
							<Route path="/create-project" element={<CreateProject />} />
							<Route path="/education" element={<Education />} />
							<Route path="/search" element={<Search />} />
							<Route path="/team" element={<Team />} />
							<Route path="/blog/:id" element={<Blog />} />
							<Route path="/project/:id" element={<Project />} />
						</Routes>
						<Footer />
					</ThemeProvider>
				</themeContext.Provider>
			</userContext.Provider>
		</>
	);
}

export default App;
