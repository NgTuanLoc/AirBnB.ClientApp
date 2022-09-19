import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useAppDispatch } from '../../hooks';
import { getRoomDetailByID } from '../../features/Room/roomThunk';
import {
	SingleRoomCatalog,
	SingleRoomDetails,
	ReviewContainer,
	ThingsToKnow,
} from '../../containers';
import { MainLayout } from '../../layouts';

const SingleRoomPage = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});

	useEffect(() => {
		dispatch(getRoomDetailByID(id as string));
	}, [dispatch, id]);

	return (
		<MainLayout
			hideNavbar={isMobileDevice}
			margin={isMobileDevice ? '0' : '10rem'}>
			<SingleRoomCatalog />
			<SingleRoomDetails />
			<ReviewContainer roomId={id as string} />
			<ThingsToKnow />
		</MainLayout>
	);
};

export default SingleRoomPage;
