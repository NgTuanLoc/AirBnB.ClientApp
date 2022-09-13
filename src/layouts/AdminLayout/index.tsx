import { ReactNode } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSelectedDashboard } from '../../features/Admin/adminSlice';
import {
	StyledContainer,
	StyledContentContainer,
	StyledSidebar,
	StyledButton,
	StyledMainContainer,
} from './style';
import { Navbar } from '../../containers';

interface IAdminLayout {
	children?: ReactNode;
}

const AdminLayout = ({ children }: IAdminLayout) => {
	const { selectedDashboard } = useAppSelector((store) => store.admin);
	const dispatch = useAppDispatch();

	const onClickHandler = (type: 'USER' | 'ROOM' | 'LOCATION') => {
		return () => dispatch(setSelectedDashboard(type));
	};
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
