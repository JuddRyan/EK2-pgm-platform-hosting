import styled from 'styled-components';

export const TextArea = styled.textarea`
	width: 100%;
`;

export const BlogGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
`;

export const Wrapper = styled.div`
	margin-inline: 1rem;

	@media screen and (min-width: 40rem) {
		margin-inline: 2rem;
	}

	@media screen and (min-width: 82rem) {
		margin-inline: auto;
	}

	max-width: 80rem;
`;

export const BlogDiv = styled.div`
	border: solid #000 1px;
	border-radius: 0.5rem;
	padding-inline: 0.5rem;

	a {
		color: ${(props) => props.theme.fontColor};
		text-decoration: none;
	}
`;

export const Button = styled.button`
	height: 2.5rem;
	aspect-ratio: 3/1;

	background-color: #487fff;
	color: white;
	border-radius: 0.5rem;
	border: none;
	box-shadow: 1px 8px 30px -3px rgba(50, 50, 50, 0.75);
	cursor: pointer;

	&:active {
		background-color: #3965cc;
	}
`;

export const Flex = styled.div`
	display: flex;
	flex-direction: ${(props) => props.flexDirection ?? null};
	gap: ${(props) => (props.gap ? props.gap : '1rem')};
`;
