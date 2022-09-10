import { ReactNode } from 'react';
import { StyledContainer } from './style';

interface IContent {
	children?: ReactNode;
	margin?: string;
	padding?: string;
}

const Content = ({ children, margin, padding }: IContent) => {
	return (
		<StyledContainer margin={margin} padding={padding}>
			{children}
		</StyledContainer>
	);
};

export default Content;
