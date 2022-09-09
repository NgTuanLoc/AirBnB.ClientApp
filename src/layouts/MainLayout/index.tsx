import { ReactNode } from 'react';

import { StyledContainer } from './style';
import { Content } from '..';
import { Navbar, Footer } from '../../components';

interface IMainLayout {
	children?: ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
	return (
		<StyledContainer>
			<Navbar />
			<Content>{children}</Content>
			<Footer />
		</StyledContainer>
	);
};

export default MainLayout;
