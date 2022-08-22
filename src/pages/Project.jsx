import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client/react';
import { useContext, useEffect, useState } from 'react';

import BaseLayout from '../components/BaseLayout';
import Container from '../components/Container';
import { GET_SINGLE_PROJECT } from '../graphql/queries';
import { userContext } from '../context/userContext';
import { Button } from '../components/styles';
import { CREATE_COMMENT_PROJECT, PUBLISH_COMMENT } from '../graphql/mutations';

const Project = () => {
	const [user, setUser] = useContext(userContext);
	const [showNewComment, setShowNewComment] = useState(false);
	const [commentMessage, setCommentMessage] = useState();

	const { id } = useParams();
	const { data } = useQuery(GET_SINGLE_PROJECT, {
		variables: {
			id: id,
		},
	});

	const [createComment, { data: createdComment }] = useMutation(
		CREATE_COMMENT_PROJECT
	);

	const [publishComment] = useMutation(PUBLISH_COMMENT);

	useEffect(() => {
		if (!createdComment) return;
		publishComment({
			variables: {
				id: createdComment.createComment.id,
			},
		});
	}, [createdComment]);

	return (
		<BaseLayout>
			<Container>
				{data && (
					<>
						<h2>{data.project.title}</h2>
						<p>{data.project.content}</p>
						<div>
							<h2>Comments</h2>
							{user && (
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<Button onClick={() => setShowNewComment(!showNewComment)}>
										New Comment
									</Button>
									{showNewComment && (
										<form>
											<label>
												<input
													type="text"
													value={commentMessage}
													onChange={(e) => setCommentMessage(e.target.value)}
												/>
											</label>
											<Button
												onClick={(e) => {
													e.preventDefault();
													createComment({
														variables: {
															message: commentMessage,
															projectId: id,
														},
													});
													setCommentMessage('');
													setShowNewComment(false);
												}}
											>
												Send
											</Button>
										</form>
									)}
									{data.project.comments.map((e) => (
										<p>{e.message}</p>
									))}
								</div>
							)}
							{!user && <p>Please sign in to view comments</p>}
						</div>
					</>
				)}

				{/* <button onClick={() => console.log(data)}>press me!</button> */}
			</Container>
		</BaseLayout>
	);
};

export default Project;
