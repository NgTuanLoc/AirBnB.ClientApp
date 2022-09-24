import { useMediaQuery } from 'react-responsive';

import { Categories } from '../../components';
import { RoomList } from '../../containers';

import { MainLayout } from '../../layouts';

const Home = () => {
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});

	return (
		<MainLayout padding={`${isMobileDevice ? '1rem' : '2rem 10rem 0'}`}>
			<Categories />
			<RoomList />
		</MainLayout>
	);
};

export default Home;
