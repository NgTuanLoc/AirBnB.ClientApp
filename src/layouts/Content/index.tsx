import { ReactNode } from 'react';
import { StyledContainer } from './style';

interface IContent {
	children?: ReactNode;
}

const Content = ({ children }: IContent) => {
	return <StyledContainer>{children}</StyledContainer>;
};

export default Content;
