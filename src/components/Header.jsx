import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { userContext } from '../context/userContext';
import { themeContext } from '../context/themeContext';

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	/* border-bottom: solid 1px #000; */
	align-items: center;
	margin-inline: 1rem;

	@media screen and (min-width: 40rem) {
		margin-inline: 2rem;
		nav {
			display: block;
		}
	}

	@media screen and (min-width: 82rem) {
		margin-inline: auto;
	}

	max-width: 80rem;

	ul {
		display: flex;
		flex-direction: row;
		list-style: none;
		gap: 2rem;
	}

	a {
		text-decoration: none;
		color: ${(props) => props.theme.fontColor};
		padding-block: 0.5rem;

		background: linear-gradient(currentColor 0 0) bottom 0 left 0 / var(--d, 0)
				2px no-repeat,
			linear-gradient(currentColor 0 0) bottom 5px right 0 / var(--d, 0) 2px
				no-repeat;
		transition: 0.5s;

		&:hover {
			--d: 100%;
		}

		nav {
			display: none;
		}
	}
`;

const Header = () => {
	const [user, setUser] = useContext(userContext);
	const [theme, setTheme] = useContext(themeContext);

	return (
		<StyledHeader>
			<div>
				<h1>PGM</h1>
			</div>
			<div></div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/education">Education</Link>
					</li>
					<li>
						<Link to="/search">Search</Link>
					</li>
					<li>
						<Link to="/team">Team</Link>
					</li>
					{theme === 'light' ? (
						<li>
							<a onClick={() => setTheme('dark')}>Dark Theme</a>
						</li>
					) : (
						<li>
							<a onClick={() => setTheme('light')}>Light Theme</a>
						</li>
					)}

					{!user ? (
						<li>
							<Link to="/login">Login</Link>
						</li>
					) : (
						<li>
							<Link to="/profile">{user.email}</Link>
						</li>
					)}
				</ul>
			</nav>
		</StyledHeader>
	);
};

export default Header;
