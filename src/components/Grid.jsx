import React from 'react';
import styled from 'styled-components';

const GridStyle = styled.div`
	display: grid;
	grid-template-columns: ${(props) =>
		props.columns ? props.columns : 'repeat(auto-fit, minmax(200px, 1fr))'};
	gap: ${(props) => (props.gap ? props.gap : '1rem')};
`;

const Grid = ({ children, columns, gap, ...otherProps }) => {
	return (
		<GridStyle gap={gap} columns={columns} {...otherProps}>
			{children}
		</GridStyle>
	);
};

export default Grid;
