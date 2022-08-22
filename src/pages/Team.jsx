import React from 'react';
import { useQuery } from '@apollo/client/react';

import BaseLayout from '../components/BaseLayout';
import Container from '../components/Container';
import { TEAM_MEMBERS } from '../graphql/queries';

const Team = () => {
	const { data } = useQuery(TEAM_MEMBERS);

	return (
		<BaseLayout>
			<Container>
				<h1>Team</h1>
				{data && (
					<div>
						{data.teamMembers.map((e) => (
							<p>{e.name}</p>
						))}
					</div>
				)}
			</Container>
		</BaseLayout>
	);
};

export default Team;
