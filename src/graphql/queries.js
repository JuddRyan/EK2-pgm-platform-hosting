import { gql } from '@apollo/client/core';

export const GET_BLOGS = gql`
	{
		blogs {
			id
			title
			content
		}
	}
`;

export const GET_FIRST_4_BLOGS = gql`
	{
		blogs(first: 4) {
			id
			title
			content
		}
	}
`;

export const GET_FIRST_4_PROJECTS = gql`
	{
		projects(first: 4) {
			id
			title
			content
		}
	}
`;

export const GET_FEATURED_BLOG = gql`
	query MyQuery {
		blogs(where: { featured: true }) {
			id
			title
			content
		}
	}
`;

export const VALIDATE_USER = gql`
	query checkUser($email: String!, $password: String!) {
		accounts(where: { email: $email, password: $password }) {
			alumni
			email
			fullname
			id
		}
	}
`;

export const GET_EDUCATION = gql`
	query GetEducation {
		education(where: { id: "cl70i0ibbssw10eum304v86h6" }) {
			id
			name
			description
			locations
			studiepunten
			tags
			stage
		}
	}
`;

export const GET_PROGRAMS = gql`
	query GetEducation {
		programs {
			name
			id
			description
		}
	}
`;

export const SEARCH_BLOGS = gql`
	query FindBlogs($title: String!) {
		blogs(orderBy: createdAt_DESC, where: { title_contains: $title }) {
			title
			id
			content
		}
	}
`;

export const TEAM_MEMBERS = gql`
	query TeamMembers {
		teamMembers {
			name
			id
		}
	}
`;

export const GET_SINGLE_BLOG = gql`
	query TeamMembers($id: ID!) {
		blog(where: { id: $id }) {
			id
			title
			content
			updatedAt
		}
	}
`;

export const GET_SINGLE_PROJECT = gql`
	query getBlog($id: ID!) {
		project(where: { id: $id }) {
			id
			title
			content
			portfolio {
				account {
					fullname
					id
				}
			}
			comments {
				id
				message
			}
		}
	}
`;
