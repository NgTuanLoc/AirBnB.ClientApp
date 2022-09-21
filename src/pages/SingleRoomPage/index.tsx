import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { getRoomDetailByID } from '../../features/Room/roomThunk';
import {
	SingleRoomCatalog,
	SingleRoomDetails,
	ReviewContainer,
	ThingsToKnow,
} from '../../containers';
import { MainLayout } from '../../layouts';
import { Meta } from '../../components';

const SingleRoomPage = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});
	const {
		selectedRoom: {
			name,
			locationId: { province },
		},
	} = useAppSelector((store) => store.room);

	useEffect(() => {
		dispatch(getRoomDetailByID(id as string));
	}, [dispatch, id]);

	return (
		<MainLayout
			hideNavbar={isMobileDevice}
			margin={isMobileDevice ? '0' : '10rem'}>
			<Meta title={`${name}${province ? ` - ${province}` : ''}`} />
			<SingleRoomCatalog />
			<SingleRoomDetails />
			<ReviewContainer roomId={id} />
			<ThingsToKnow />
		</MainLayout>
	);
};

export default SingleRoomPage;
