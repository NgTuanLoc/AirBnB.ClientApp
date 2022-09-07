import styled from 'styled-components';
import { useState } from 'react';

import {
	Navbar,
	UserDashboard,
	RoomDashboard,
	LocationDashboard,
} from '../components';

const AdminPage = () => {
	const [dashboard, setDashboard] = useState('user');

	const onClickHandler = (type: string) => {
		return () => setDashboard(type);
	};

	return (
		<>
			<Navbar hideSearch />
			<Container>
				<Sidebar>
					<Button
						active={dashboard === 'user'}
						onClick={onClickHandler('user')}>
						User
					</Button>
					<Button
						active={dashboard === 'room'}
						onClick={onClickHandler('room')}>
						Room
					</Button>
					<Button
						active={dashboard === 'location'}
						onClick={onClickHandler('location')}>
						Location
					</Button>
				</Sidebar>
				{dashboard === 'user' && <UserDashboard />}
				{dashboard === 'room' && <RoomDashboard />}
				{dashboard === 'location' && <LocationDashboard />}
			</Container>
		</>
	);
};

const Container = styled.main`
	display: grid;
	margin-top: 8rem;
	grid-template-columns: 20rem calc(100vw - 20rem);
	height: calc(100vh - 8rem);

	@media only screen and (max-width: 992px) {
		margin-top: 6rem;
		height: calc(100vh - 6rem);
	}
`;
const Sidebar = styled.aside`
	background-color: white;
	display: flex;
	flex-direction: column;
	box-shadow: var(--dark-shadow);
`;

const Button = styled.button<{ active?: boolean }>`
	padding: 2rem 0;
	font-size: 3rem;
	width: 100%;
	background-color: ${(props) =>
		props.active ? 'rgba(0, 0, 0, 0.1)' : 'transparent'};
`;

export default AdminPage;
