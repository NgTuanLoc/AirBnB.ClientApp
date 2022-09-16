import { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSelectedDashboard } from '../../features/Admin/adminSlice';
import {
	StyledContainer,
	StyledContentContainer,
	StyledImageContainer,
	StyledErrorContainer,
	StyledSidebar,
	StyledButton,
	StyledMainContainer,
	StyledHeading,
} from './style';
import { Navbar } from '../../containers';
import { Footer, Image } from '../../components';

interface IAdminLayout {
	children?: ReactNode;
}

const AdminLayout = ({ children }: IAdminLayout) => {
	const { selectedDashboard } = useAppSelector((store) => store.admin);
	const dispatch = useAppDispatch();
	const isLargeDevice = useMediaQuery({
		query: '(min-width: 1400px)',
	});

	const onClickHandler = (type: 'USER' | 'ROOM' | 'LOCATION') => {
		return () => dispatch(setSelectedDashboard(type));
	};

	if (!isLargeDevice)
		return (
			<StyledContainer>
				<Navbar hideSearch />
				<StyledErrorContainer>
					<StyledImageContainer>
						<Image
							url='https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif'
							alt='Girl has dropped her ice cream.'
						/>
					</StyledImageContainer>
					<StyledHeading>
						Sorry, you need to access a larger device to access this page !
					</StyledHeading>
				</StyledErrorContainer>
				<Footer />
			</StyledContainer>
		);

	return (
		<StyledContainer>
			<Navbar hideSearch />
			<StyledContentContainer>
				<StyledSidebar>
					<StyledButton
						active={selectedDashboard === 'USER'}
						onClick={onClickHandler('USER')}>
						User
					</StyledButton>
					<StyledButton
						active={selectedDashboard === 'ROOM'}
						onClick={onClickHandler('ROOM')}>
						Room
					</StyledButton>
					<StyledButton
						active={selectedDashboard === 'LOCATION'}
						onClick={onClickHandler('LOCATION')}>
						Location
					</StyledButton>
				</StyledSidebar>
				<StyledMainContainer>{children}</StyledMainContainer>
			</StyledContentContainer>
		</StyledContainer>
	);
};

export default AdminLayout;
