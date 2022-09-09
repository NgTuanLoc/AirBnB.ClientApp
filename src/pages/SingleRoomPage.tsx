import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { getRoomDetailByID } from '../features/Room/roomThunk';
import { Navbar, Footer, Loading, Line } from '../components';

import { SingleRoomCatalog, SingleRoomDetails } from '../containers';

const SingleRoomPage = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { isLoading } = useAppSelector((store) => store.room);

	useEffect(() => {
		dispatch(getRoomDetailByID(id as string));
	}, [dispatch, id]);

	if (isLoading) return <Loading />;

	return (
		<>
			<Navbar />
			<Container className='section'>
				<SingleRoomCatalog />
				<SingleRoomDetails />
				<Line />
			</Container>
			<Footer />
		</>
	);
};

const Container = styled.main`
	width: 100%;
`;

export default SingleRoomPage;
