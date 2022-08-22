import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BaseLayout from '../components/BaseLayout';
import Container from '../components/Container';
import { userContext } from '../context/userContext';
import { useMutation } from '@apollo/client/react';
import { Button, TextArea } from '../components/styles';
import { CREATE_BLOG } from '../graphql/mutations';

const CreateBlog = () => {
	const [user, setUser] = useContext(userContext);
	const navigate = useNavigate();

	const [blogTitle, setBlogTitle] = useState();
	const [blogContent, setBlogContent] = useState();

	const [createBlog, { data }] = useMutation(CREATE_BLOG);
	const [publishBlog] = useMutation(CREATE_BLOG);

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
		if (!data) return;
		publishBlog({
			variables: {
				id: data.createBlog.id,
			},
		});
	}, [data]);

	return (
		<BaseLayout>
			<Container flex>
				<h1>Create new blog</h1>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<label>
						Title:{' '}
						<input
							type="text"
							value={blogTitle}
							onChange={(e) => setBlogTitle(e.target.value)}
						/>
					</label>
					<Button
						onClick={() => {
							console.group('Blog');
							console.log(blogTitle);
							console.log(blogContent);
							console.groupEnd('Blog');

							createBlog({
								variables: {
									title: blogTitle,
									content: blogContent,
								},
							});

							setBlogTitle('');
							setBlogContent('');
						}}
					>
						Submit
					</Button>
				</div>
				<label>
					Blog:{' '}
					<TextArea
						rows={33}
						value={blogContent}
						onChange={(e) => setBlogContent(e.target.value)}
					/>
				</label>
			</Container>
		</BaseLayout>
	);
};

export default CreateBlog;
