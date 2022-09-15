import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Categories } from '../../components';
import { RoomList } from '../../containers';
import { useAppDispatch } from '../../hooks';
import { getLocationList } from '../../features/Location/locationThunk';
import { MainLayout } from '../../layouts';

const Home = () => {
	const dispatch = useAppDispatch();
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});

	useEffect(() => {
		dispatch(getLocationList());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<MainLayout padding={`${isMobileDevice ? '1rem' : '2rem 10rem 0'}`}>
			<Categories />
			<RoomList />
		</MainLayout>
	);
};

export default Home;
