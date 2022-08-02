/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { getRoomListByLocationID } from '../features/Room/roomThunk';
import { selectLocation } from '../features/Room/roomSlice';
import { Navbar, Footer, RoomDetails, Loading } from '../components';

const RoomListPage = () => {
	const { locationId } = useParams();
	const dispatch = useAppDispatch();
	const { roomList, isLoading } = useAppSelector((store) => store.room);

	useEffect(() => {
		dispatch(selectLocation(locationId as string));
		dispatch(getRoomListByLocationID());
	}, [locationId]);

	if (isLoading) return <Loading />;

	return (
		<>
			<Navbar />
			<Container>
				<RoomList>
					{roomList.map((item) => {
						return <RoomDetails key={item._id} {...item} />;
					})}
				</RoomList>
				<GoogleMap>
					<iframe
						title='map'
						src='https://www.google.com/maps/d/embed?mid=1P9x70YwwVvtxthmnVQt1ikJBoKE&ehbc=2E312F'
						width='100%'
						height='100%'></iframe>
				</GoogleMap>
			</Container>
			<Footer />
		</>
	);
};

const Container = styled.main`
	margin-top: var(--navbar-height);
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: 1fr 1fr;
	height: calc(100vh - var(--navbar-height));
`;

const GoogleMap = styled.section`
	border: transparent;
`;
const RoomList = styled.section`
	overflow-y: scroll;
	scrollbar-width: none;
`;

export default RoomListPage;
