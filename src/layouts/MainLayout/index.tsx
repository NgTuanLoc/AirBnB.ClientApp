import { ReactNode } from 'react';

import { StyledContainer } from './style';
import { Content } from '..';
import { Navbar, Footer } from '../../components';

interface IMainLayout {
	children?: ReactNode;
	margin?: string;
	padding?: string;
}

const MainLayout = ({ children, margin, padding }: IMainLayout) => {
	return (
		<StyledContainer>
			<Navbar />
			<Content margin={margin} padding={padding}>
				{children}
			</Content>
			<Footer />
		</StyledContainer>
	);
};

export default MainLayout;
