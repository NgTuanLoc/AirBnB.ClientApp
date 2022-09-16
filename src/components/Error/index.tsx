/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState } from 'react';

import { StyledContainer, StyledHeading } from './style';

interface IError {
	children: ReactNode;
}

const Error = ({ children }: IError) => {
	const [removeError, setRemoveError] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setRemoveError(true);
		}, 3000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<StyledContainer removeError={removeError}>
			<StyledHeading>{children}</StyledHeading>
		</StyledContainer>
	);
};

export default Error;
