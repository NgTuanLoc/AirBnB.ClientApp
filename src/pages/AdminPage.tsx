import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks/hooks';

const AdminPage = () => {
	const dispatch = useAppDispatch();
	const { auth } = useAppSelector((store) => store.auth);
	const navigate = useNavigate();

	if (auth?.user.type !== 'ADMIN') {
		navigate('/');
	}

	return <Container>Admin Page</Container>;
};

const Container = styled.main``;

export default AdminPage;
