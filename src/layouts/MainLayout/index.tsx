import { ReactNode } from 'react';

import { StyledContainer } from './style';
import { Content } from '..';
import { Footer } from '../../components';
import { Navbar } from '../../containers';

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
