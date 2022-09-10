import { useEffect, useState } from 'react';

import { useAppSelector } from '../../hooks/hooks';
import { Loading } from '../../components';
import { StyledContainer } from './style';
import { SingleRoomInfo, Card } from '..';

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
		<StyledContainer>
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
		</StyledContainer>
	);
};

export default SingleRoomDetails;
