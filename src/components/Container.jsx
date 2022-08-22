import React, { useContext } from 'react';
import styled from 'styled-components';
// import { themeContext } from '../context/themeContext';

const ContainerStyle = styled.div`
	width: 100%;
	border-radius: 10;
	padding-inline: 2rem;
	padding-block: 2rem;
	margin-bottom: 2rem;
	border-radius: 0.7rem;
	box-shadow: 1px 8px 30px -3px rgba(50, 50, 50, 0.75);

	background-color: ${(props) => props.theme.bgAccentColor};
	/* background-color: white; */

	display: ${(props) => (props.flex ? 'flex' : null)};
	flex-direction: column;
`;

const Container = ({ children, flex, ...otherProps }) => {
	// const [theme] = useContext(themeContext);

	return (
		<ContainerStyle flex={flex} {...otherProps}>
			{children}
		</ContainerStyle>
	);
};

export default Container;
