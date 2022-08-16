import styled from 'styled-components';
import { useEffect, useState } from 'react';

import { useAppSelector } from '../hooks/hooks';
import { Card, SingleRoomInfo, Loading } from './index';

const SingleRoomDetails = () => {
	const [bookDate, setBookDate] = useState({
		checkIn: new Date(),
		checkOut: new Date(),
	});
	const { selectedRoom } = useAppSelector((store) => store.room);
	const [numberOfVisitNights, setNumberOfVisitNights] = useState(0);

	useEffect(() => {
		const temp = bookDate.checkOut
			? Math.round(
					(bookDate.checkOut.getTime() - bookDate.checkIn.getTime()) /
						(1000 * 3600 * 24)
			  )
			: 0;
		setNumberOfVisitNights(temp);
	}, [bookDate]);

	if (!selectedRoom) {
		return <Loading />;
	}

	return (
		<Container>
			<SingleRoomInfo
				{...selectedRoom}
				bookDate={bookDate}
				numberOfVisitNights={numberOfVisitNights}
				setBookDate={setBookDate}
			/>
			<Card
				numberOfVisitNights={numberOfVisitNights}
				bookDate={bookDate}
				pricePerNight={selectedRoom.price}
				roomId={selectedRoom._id}
			/>
		</Container>
	);
};

const Container = styled.section`
	display: grid;
	grid-template-columns: 3fr 2fr;
	margin: 5rem auto;

	@media only screen and (max-width: 992px) {
		grid-template-columns: 1fr;
		margin: 5rem auto;
		padding: 1rem;
	}
`;

export default SingleRoomDetails;
