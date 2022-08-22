import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client/react';
import { useContext, useEffect, useState } from 'react';

import BaseLayout from '../components/BaseLayout';
import Container from '../components/Container';
import { GET_SINGLE_BLOG } from '../graphql/queries';
import { CREATE_COMMENT_BLOG, PUBLISH_COMMENT } from '../graphql/mutations';
import { userContext } from '../context/userContext';
import { Button } from '../components/styles';

const Blog = () => {
	const [user, setUser] = useContext(userContext);
	const [showNewComment, setShowNewComment] = useState(false);
	const [commentMessage, setCommentMessage] = useState();

	const { id } = useParams();
	const { data } = useQuery(GET_SINGLE_BLOG, {
		variables: {
			id: id,
		},
	});

	const [createComment, { data: createdComment }] =
		useMutation(CREATE_COMMENT_BLOG);
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
					<div>
						<h2>{data.blog.title}</h2>
						<p>{data.blog.content}</p>
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
													console.log(data);
													e.preventDefault();
													createComment({
														variables: {
															message: commentMessage,
															blogId: id,
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
									{/* {data.blog.comments.map((e) => <p>{e.message}</p>)} */}
								</div>
							)}
							{!user && <p>Please sign in to view comments</p>}
						</div>
					</div>
				)}

				{/* <button onClick={() => console.log(data)}>press me!</button> */}
			</Container>
		</BaseLayout>
	);
};

export default Blog;
