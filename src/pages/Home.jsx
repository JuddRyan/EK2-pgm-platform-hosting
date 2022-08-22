import { useContext } from 'react';
import { useQuery } from '@apollo/client/react';

import BlogItem from '../components/BlogItem';
import Banner from '../components/placeholders/Banner';
import FeaturedItem from '../components/FeaturedItem';
import { userContext } from '../context/userContext';
import BaseLayout from '../components/BaseLayout';
import {
	GET_FEATURED_BLOG,
	GET_FIRST_4_BLOGS,
	GET_FIRST_4_PROJECTS,
} from '../graphql/queries';
import { BlogGrid } from '../components/styles';
import Container from '../components/Container';

const Homepage = () => {
	const { data: blogsData, error, loading } = useQuery(GET_FIRST_4_BLOGS);
	const { data: projectData } = useQuery(GET_FIRST_4_PROJECTS);
	const [user, setUser] = useContext(userContext);

	return (
		<BaseLayout banner={<Banner />}>
			<Container>
				<FeaturedItem></FeaturedItem>
			</Container>
			<Container>
				<h2>Blogs</h2>
				<BlogGrid>
					{blogsData &&
						blogsData.blogs.map((e, index) => (
							<BlogItem
								title={e.title}
								key={index}
								description={e.content}
								link={`/blog/${e.id}`}
							></BlogItem>
						))}
				</BlogGrid>
			</Container>
			<Container>
				<h2>Projects</h2>
				<BlogGrid>
					{projectData &&
						projectData.projects.map((e, index) => (
							<BlogItem
								title={e.title}
								key={index}
								description={e.content}
								link={`/project/${e.id}`}
							></BlogItem>
						))}
				</BlogGrid>
			</Container>
		</BaseLayout>
	);
};

export default Homepage;
