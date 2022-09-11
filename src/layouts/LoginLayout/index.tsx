import { ReactNode } from 'react';

import { StyledContainer } from './style';

interface IMainLayout {
	children?: ReactNode;
	imageUrl: string;
}

const MainLayout = ({ children, imageUrl }: IMainLayout) => {
	return <StyledContainer></StyledContainer>;
};

export default MainLayout;
