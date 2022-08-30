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
					<Button onClick={onClickHandler('user')}>User</Button>
					<Button onClick={onClickHandler('room')}>Room</Button>
					<Button onClick={onClickHandler('location')}>Location</Button>
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
	background-color: blue;
	display: flex;
	flex-direction: column;
`;

const Button = styled.button`
	padding: 2rem 0;
	font-size: 3rem;
	width: 100%;
`;

export default AdminPage;
