import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { Navbar } from '../components';

const AdminPage = () => {
	const dispatch = useAppDispatch();
	const { auth } = useAppSelector((store) => store.auth);
	const navigate = useNavigate();

	if (auth?.user.type !== 'ADMIN') {
		navigate('/');
	}

	return (
		<>
			<Navbar hideSearch />
			<Container>
				<Sidebar>
					<Button>Users</Button>
					<Button>Rooms</Button>
					<Button>Locations</Button>
				</Sidebar>
				<Dashboard>Dashboard</Dashboard>
			</Container>
		</>
	);
};

const Container = styled.main`
	display: grid;
	margin-top: 8rem;
	grid-template-columns: 40rem 1fr;
	height: calc(100vh - 8rem);
`;
const Sidebar = styled.aside`
	background-color: blue;
	display: flex;
	flex-direction: column;
`;
const Dashboard = styled.section`
	background-color: red;
`;

const Button = styled.button`
	padding: 2rem 0;
	font-size: 3rem;
	width: 100%;
`;

export default AdminPage;
