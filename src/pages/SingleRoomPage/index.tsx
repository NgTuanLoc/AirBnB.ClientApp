import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { getRoomDetailByID } from '../../features/Room/roomThunk';
import { Loading } from '../../components';
import { SingleRoomCatalog, SingleRoomDetails } from '../../containers';
import { MainLayout } from '../../layouts';

const SingleRoomPage = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { isLoading } = useAppSelector((store) => store.room);
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});

	useEffect(() => {
		dispatch(getRoomDetailByID(id as string));
	}, [dispatch, id]);

	if (isLoading) return <Loading />;

	return (
		<MainLayout hideNavbar={isMobileDevice} margin='0'>
			<SingleRoomCatalog />
			<SingleRoomDetails />
		</MainLayout>
	);
};

export default SingleRoomPage;
