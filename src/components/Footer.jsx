import styled from 'styled-components';

const FooterStyle = styled.div`
	margin-top: 1rem;
	height: 10rem;
	background-color: hsl(300, 100%, 25%);

	margin-inline: auto;

	a {
		color: white;
		text-decoration: none;
	}

	li {
		list-style: none;
		margin-block: 0.5rem;
	}

	span {
		font-size: 2rem;
	}
`;

const Footer = () => {
	return (
		<FooterStyle>
			<ul>
				<span>Externe Links</span>
				<li>
					<a href="https://www.arteveldehogeschool.be/opleidingen/graduaat/programmeren">
						arteveldehogeschool.be
					</a>
				</li>
				<li>
					<a href="https://www.pgm.gent">pgm.gent</a>
				</li>
				<li>
					<a href="https://www.facebook.com/Programmeren.ahs/">Facebook</a>
				</li>
			</ul>
		</FooterStyle>
	);
};

export default Footer;
