import React from 'react';
import styled from 'styled-components';

const BannerStyle = styled.div`
	height: 10rem;
	background: rgb(72, 51, 131);
	background: -moz-linear-gradient(
		69deg,
		rgba(72, 51, 131, 1) 13%,
		rgba(101, 97, 209, 1) 45%,
		rgba(143, 46, 168, 0.6775000179515165) 88%
	);
	background: -webkit-linear-gradient(
		69deg,
		rgba(72, 51, 131, 1) 13%,
		rgba(101, 97, 209, 1) 45%,
		rgba(143, 46, 168, 0.6775000179515165) 88%
	);
	background: linear-gradient(
		69deg,
		rgba(72, 51, 131, 1) 13%,
		rgba(101, 97, 209, 1) 45%,
		rgba(143, 46, 168, 0.6775000179515165) 88%
	);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#483383",endColorstr="#8f2ea8",GradientType=1);

	display: flex;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: 2em;
	}

	@media screen and (min-width: 20rem) {
		height: 15rem;
		h1 {
			font-size: 3em;
		}
	}

	@media screen and (min-width: 30rem) {
		height: 20rem;
		h1 {
			font-size: 5rem;
		}
	}
`;

const Banner = () => {
	return (
		<BannerStyle>
			<h1>PGM Platform</h1>
		</BannerStyle>
	);
};

export default Banner;
