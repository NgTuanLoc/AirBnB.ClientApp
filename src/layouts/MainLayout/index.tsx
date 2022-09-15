import { ReactNode } from 'react';

import { StyledContainer } from './style';
import { Content } from '..';
import { Footer } from '../../components';
import { Navbar } from '../../containers';

interface IMainLayout {
	children?: ReactNode;
	margin?: string;
	padding?: string;
	hideSearchBar?: boolean;
	hideNavbar?: boolean;
}

const MainLayout = ({
	children,
	margin,
	padding,
	hideSearchBar,
	hideNavbar,
}: IMainLayout) => {
	return (
		<StyledContainer>
			{!hideNavbar && <Navbar hideSearch={hideSearchBar} />}
			<Content margin={margin} padding={padding}>
				{children}
			</Content>
			<Footer />
		</StyledContainer>
	);
};

export default MainLayout;
