import React, { Children } from 'react';
import { Wrapper } from './styles';

const BaseLayout = ({ banner, children, ...otherProps }) => {
	return (
		<>
			{banner ?? banner}
			<Wrapper {...otherProps}>{children}</Wrapper>
		</>
	);
};

export default BaseLayout;
