import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import { Link } from 'react-router-dom';
import { BlogDiv } from './styles';

const BlogItem = ({ author, description, title, link }) => {
	return (
		<BlogDiv>
			<Link to={link}>
				<h3>{title}</h3>
				<div>
					{author ?? <span>{author}</span>}
					<LinesEllipsis text={description} maxLine={5}></LinesEllipsis>
				</div>
			</Link>
		</BlogDiv>
	);
};

export default BlogItem;
