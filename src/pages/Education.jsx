import BaseLayout from '../components/BaseLayout';
import Container from '../components/Container';
import { GET_EDUCATION, GET_PROGRAMS } from '../graphql/queries';
import { useQuery } from '@apollo/client/react';
import Banner from '../components/placeholders/Banner';

const Education = () => {
	const { data: educationData } = useQuery(GET_EDUCATION);
	const { data: programData } = useQuery(GET_PROGRAMS);

	return (
		<BaseLayout banner={<Banner />}>
			<Container>
				{educationData && (
					<>
						<h1>{educationData.education.name}</h1>
						<p>{educationData.education.description}</p>
						<p>
							TAGS:
							{educationData.education.tags.map((e) => {
								return ` ${e},`;
							})}
						</p>
						<p>
							Locations:
							{educationData.education.locations.map((e) => {
								return ` ${e},`;
							})}
						</p>
					</>
				)}
			</Container>
			<Container>
				{programData && (
					<>
						<h2 style={{ marginBottom: '1rem' }}>Programma</h2>
						{programData.programs.map((e) => (
							<>
								<h3>{e.name}</h3>
								<p>{e.description}</p>
							</>
						))}
					</>
				)}
			</Container>
		</BaseLayout>
	);
};

export default Education;
