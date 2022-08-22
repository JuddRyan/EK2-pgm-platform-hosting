import { useContext, useEffect, useState } from 'react';
import { useMutation } from '@apollo/client/react';

import BaseLayout from '../components/BaseLayout';
import Container from '../components/Container';
import { Button, TextArea } from '../components/styles';
import { userContext } from '../context/userContext';
import { CREATE_PROJECT, PUBLISH_PROJECT } from '../graphql/mutations';

const CreateProject = () => {
	const [user] = useContext(userContext);
	const [projectTitle, setProjectTitle] = useState();
	const [projectContent, setProjectContent] = useState();
	const [projectUrl, setProjectUrl] = useState();

	const [createProject, { data: createProjectData }] =
		useMutation(CREATE_PROJECT);
	const [publishProject] = useMutation(PUBLISH_PROJECT);

	if (!user) {
		return (
			<BaseLayout>
				<h2>
					<Link to="/login">Please sign in</Link>
				</h2>
			</BaseLayout>
		);
	}

	useEffect(() => {
		if (!createProjectData) return;

		publishProject({
			variables: {
				id: createProjectData.createProject.id,
			},
		});
	}, [createProjectData]);

	return (
		<BaseLayout>
			<Container>
				<h2>New Project</h2>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<div style={{ display: 'flex', gap: '1rem' }}>
						<label>
							Title:{' '}
							<input
								type="text"
								value={projectTitle}
								onChange={(e) => setProjectTitle(e.target.value)}
							/>
						</label>
						<label>
							Project url:{' '}
							<input
								type="text"
								value={projectUrl}
								onChange={(e) => setProjectUrl(e.target.value)}
							/>
						</label>
					</div>
					<Button
						onClick={() => {
							createProject({
								variables: {
									title: projectTitle,
									content: projectContent,
									url: projectUrl,
								},
							});

							setProjectTitle('');
							setProjectContent('');
							setProjectUrl('');
						}}
					>
						Submit
					</Button>
				</div>
				<label>
					Project:{' '}
					<TextArea
						rows={33}
						value={projectContent}
						onChange={(e) => setProjectContent(e.target.value)}
					/>
				</label>
			</Container>
		</BaseLayout>
	);
};

export default CreateProject;
