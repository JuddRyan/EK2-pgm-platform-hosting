import { gql } from '@apollo/client/core';

export const CREATE_BLOG = gql`
	mutation CreateBlog($content: String!, $title: String!) {
		createBlog(data: { content: $content, title: $title }) {
			id
			content
			title
		}
	}
`;

export const CREATE_ACCOUNT = gql`
	mutation MyMutation(
		$email: String!
		$fullname: String!
		$password: String!
		$alumni: Boolean!
	) {
		createAccount(
			data: {
				email: $email
				fullname: $fullname
				password: $password
				alumni: $alumni
			}
		) {
			id
			email
			fullname
			alumni
		}
	}
`;

export const CREATE_PROJECT = gql`
	mutation CreateProject($title: String!, $content: String!, $url: String!) {
		createProject(data: { title: $title, content: $content, url: $url }) {
			id
		}
	}
`;

export const PUBLISH_PROJECT = gql`
	mutation PublishProject($id: ID!) {
		publishProject(to: PUBLISHED, where: { id: $id }) {
			id
			title
			content
			url
			stage
		}
	}
`;

export const PUBLISH_BLOG = gql`
	mutation PublishBlog($id: ID!) {
		publishBlog(to: PUBLISHED, where: { id: $id }) {
			id
			title
			content
			stage
		}
	}
`;

export const CREATE_COMMENT_PROJECT = gql`
	mutation CommentOnProject($message: String!, $projectId: ID!) {
		createComment(
			data: { message: $message, project: { connect: { id: $projectId } } }
		) {
			id
			message
		}
	}
`;

export const CREATE_COMMENT_BLOG = gql`
	mutation CommentOnProject($message: String!, $blogId: ID!) {
		createComment(
			data: { message: $message, project: { connect: { id: $blogId } } }
		) {
			id
			message
		}
	}
`;

export const PUBLISH_COMMENT = gql`
	mutation CommentOnProject($id: ID!) {
		publishComment(where: { id: $id }, to: PUBLISHED) {
			id
			message
		}
	}
`;
