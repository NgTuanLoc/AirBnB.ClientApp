/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { getRoomListByLocationID } from '../features/Room/roomThunk';
import { Room } from './';

const RoomList = () => {
	const { locationID, roomList } = useAppSelector((store) => store.room);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getRoomListByLocationID());
	}, [locationID]);

	if (roomList.length === 0) {
		return (
			<h1 style={{ marginInline: 'auto', textAlign: 'center' }}>
				Sorry, there are no room available!
			</h1>
		);
	}

	return (
		<Container>
			{roomList.map((item) => {
				return <Room key={item._id} {...item} />;
			})}
		</Container>
	);
};

const Container = styled.section`
	margin: 4rem 0;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
	grid-gap: 2rem;
	padding-bottom: var(--footer-height);
`;

export default RoomList;
