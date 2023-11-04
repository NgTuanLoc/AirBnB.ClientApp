/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { getRoomListByLocationID } from '../../features/Room/roomThunk';
import { Room } from '../../components';
import { ROOM_DATA } from '../../constant';
import {
	StyledContainer,
	StyledNotFoundContainer,
	StyledHeading,
} from './style';

const skeletonArray = Array.from({ length: 8 }, () => ROOM_DATA);

const RoomList = () => {
	const { locationID, roomList, isLoading } = useAppSelector(
		(store) => store.room
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getRoomListByLocationID());
	}, [locationID]);

	if (isLoading) {
		return (
			<StyledContainer>
				{skeletonArray.map((item, id) => {
					return <Room key={id} {...item} />;
				})}
			</StyledContainer>
		);
	}

	if (isLoading === false && roomList.length === 0) {
		return (
			<StyledNotFoundContainer>
				<StyledHeading>Sorry, there are no room available!</StyledHeading>
			</StyledNotFoundContainer>
		);
	}

	return (
		<StyledContainer>
			{roomList.map((item) => {
				return <Room key={item.id} {...item} />;
			})}
		</StyledContainer>
	);
};

export default RoomList;
