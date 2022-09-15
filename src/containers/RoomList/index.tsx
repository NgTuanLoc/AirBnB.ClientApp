/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { getRoomListByLocationID } from '../../features/Room/roomThunk';
import { Room, Loading } from '../../components';
import {
	StyledContainer,
	StyledNotFoundContainer,
	StyledHeading,
} from './style';

const RoomList = () => {
	const { isLoading, locationID, roomList } = useAppSelector(
		(store) => store.room
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getRoomListByLocationID());
	}, [locationID]);

	if (isLoading) {
		return (
			<StyledNotFoundContainer>
				<Loading />
			</StyledNotFoundContainer>
		);
	}

	if (roomList.length === 0) {
		return (
			<StyledNotFoundContainer>
				<StyledHeading>Sorry, there are no room available!</StyledHeading>
			</StyledNotFoundContainer>
		);
	}

	return (
		<StyledContainer>
			{roomList.map((item) => {
				return <Room key={item._id} {...item} />;
			})}
		</StyledContainer>
	);
};

export default RoomList;
