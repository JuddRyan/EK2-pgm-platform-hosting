import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import styled from 'styled-components';
import { GET_FEATURED_BLOG } from '../graphql/queries';
import { useQuery } from '@apollo/client/react';

const Featured = styled.div`
	/* width: 20rem; */
	height: 20rem;
	min-height: 20rem;

	@media screen and (min-width: 30rem) {
		display: flex;
		min-height: 15rem;
		height: 15rem;
		gap: 1rem;
	}
`;

const PlaceholerImage = styled.div`
	background-color: hsl(0, 0%, 25%);
	width: 100%;
	height: 50%;

	@media screen and (min-width: 30rem) {
		width: 20rem;
		height: 15rem;
	}
`;

const FeaturedItem = ({ title, content }) => {
	const { data: featuredBlog } = useQuery(GET_FEATURED_BLOG);

	return (
		<Featured>
			{featuredBlog && (
				<>
					<PlaceholerImage></PlaceholerImage>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}
					>
						<div>
							<h2>{featuredBlog.blogs[0].title}</h2>
							<LinesEllipsis text={featuredBlog.blogs[0].content} maxLine={2} />
						</div>
						<button>View</button>
					</div>
				</>
			)}
		</Featured>
	);
};

export default FeaturedItem;
