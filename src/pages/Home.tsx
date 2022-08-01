import styled from 'styled-components';

import { Categories, RoomList } from '../components';

const Home = () => {
	return (
		<Container className='section'>
			<Categories />
			<RoomList />
		</Container>
	);
};

const Container = styled.main``;

export default Home;
