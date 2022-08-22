import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import BaseLayout from '../components/BaseLayout';
import BlogItem from '../components/BlogItem';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Banner from '../components/placeholders/Banner';
import { Button } from '../components/styles';
import { userContext } from '../context/userContext';

const StyledBanner = styled.div`
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

	/* height: 20rem; */
	min-height: 20rem;
	padding-inline: 2rem;
	padding-top: 2rem;
	padding-bottom: 5rem;

	color: white;

	.avatar {
		background-color: green;
		height: 7rem;
		width: 7rem;
		border-radius: 5rem;
	}

	.profileContent {
		display: flex;
		flex-direction: column;
		align-items: center;

		max-width: 80rem;
		margin-inline: auto;
	}

	@media screen and (min-width: 20rem) {
		padding-inline: 4rem;
	}

	@media screen and (min-width: 30rem) {
		.profileContent {
			flex-direction: row;
			gap: 1rem;
		}
	}
`;

const Profile = () => {
	const [user, setUser] = useContext(userContext);
	const navigate = useNavigate();

	return (
		<BaseLayout
			banner={
				<StyledBanner>
					<div className="profileContent">
						<img className="avatar" src="src/assets/images/avatar.png" alt="" />

						<div>
							<div>
								<h2>{user.fullname}</h2>
								<span>({user.alumni ? 'Alumni' : 'Student'})</span>
							</div>
							<p>
								{/* TODO: add bio from database */}
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
								officiis quod facilis quia cumque, ipsam beatae cupiditate
								possimus. Corporis, repudiandae.
							</p>
						</div>
						<Button
							onClick={(e) => {
								e.preventDefault();
								setUser(null);
								localStorage.removeItem('user');
								navigate('/');
							}}
						>
							sign out
						</Button>
					</div>
				</StyledBanner>
			}
		>
			<Container style={{ marginTop: '-5rem' }}>
				<h1>Blogs</h1>
				<Link to="/create-blog">Create new blog</Link>

				<div style={{ borderBottom: 'solid 1px black' }}>
					<h3 style={{ margin: 0 }}>Blog title</h3>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum natus
						delectus, facere debitis labore porro eaque commodi nemo a aperiam.
					</span>
				</div>

				<div style={{ borderBottom: 'solid 1px black' }}>
					<h3 style={{ margin: 0 }}>Blog title</h3>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum natus
						delectus, facere debitis labore porro eaque commodi nemo a aperiam.
					</span>
				</div>

				<div style={{}}>
					<h3 style={{ margin: 0 }}>Blog title</h3>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum natus
						delectus, facere debitis labore porro eaque commodi nemo a aperiam.
					</span>
				</div>
			</Container>
			<Container>
				<h1 style={{ marginBottom: '.5rem' }}>My portfolio</h1>
				<Link to="/create-project">Create new project</Link>

				<Grid>
					<BlogItem
						title="My first project"
						description="Description goes here..."
						link="/"
					/>
					<BlogItem
						title="My first project"
						description="Description goes here..."
						link="/"
					/>
					<BlogItem
						title="My first project"
						description="Description goes here..."
						link="/"
					/>
					<BlogItem
						title="My first project"
						description="Description goes here..."
						link="/"
					/>
					<BlogItem
						title="My first project"
						description="Description goes here..."
						link="/"
					/>
					<BlogItem
						title="My first project"
						description="Description goes here..."
						link="/"
					/>
					<BlogItem
						title="My first project"
						description="Description goes here..."
						link="/"
					/>
					<BlogItem
						title="My first project"
						description="Description goes here..."
						link="/"
					/>
					<BlogItem
						title="My first project"
						description="Description goes here..."
						link="/"
					/>
				</Grid>
			</Container>
		</BaseLayout>
	);
};

export default Profile;
