/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { getRoomListByLocationID } from '../../features/Room/roomThunk';
import { selectLocation } from '../../features/Room/roomSlice';
import { RoomDetails, Loading } from '../../components';
import { MainLayout } from '../../layouts';
import { StyledContainer, StyledGoogleMap, StyledRoomList } from './style';

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
		<MainLayout margin='0' padding='0 1rem'>
			<StyledContainer>
				<StyledRoomList>
					{roomList.map((item) => {
						return <RoomDetails key={item._id} {...item} />;
					})}
				</StyledRoomList>
				<StyledGoogleMap>
					<iframe
						title='map'
						src='https://www.google.com/maps/d/embed?mid=1P9x70YwwVvtxthmnVQt1ikJBoKE&ehbc=2E312F'
						width='100%'
						height='100%'
					/>
				</StyledGoogleMap>
			</StyledContainer>
		</MainLayout>
	);
};

export default RoomListPage;
