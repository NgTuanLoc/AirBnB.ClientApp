import { useEffect } from 'react';

import { Categories, RoomList } from '../components';
import { useAppDispatch } from '../hooks/hooks';
import { getLocationList } from '../features/Location/locationThunk';
import { MainLayout } from '../layouts';

const Home = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getLocationList());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<MainLayout>
			<Categories />
			<RoomList />
		</MainLayout>
	);
};

export default Home;
