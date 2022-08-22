import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client/react';

import BaseLayout from '../components/BaseLayout';
import Container from '../components/Container';
import { Button, Flex } from '../components/styles';
import { SEARCH_BLOGS } from '../graphql/queries';

const Search = () => {
	const [search, setSearch] = useState();
	const [searchBlogs, { data, loading }] = useLazyQuery(SEARCH_BLOGS);

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<BaseLayout>
			<Container>
				<Flex alignItems="center">
					<label>
						Search:{' '}
						<input
							type="text"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						<Button
							onClick={() => {
								searchBlogs({ variables: { title: search } });
								console.log(data);
							}}
						>
							Search
						</Button>
					</label>
				</Flex>
				{/* TODO: wrap in Link tag */}
				{data && data.blogs.map((e) => <p>{e.title}</p>)}
			</Container>
		</BaseLayout>
	);
};

export default Search;
