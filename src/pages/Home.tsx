import styled from 'styled-components';
import { Navbar, Footer } from '../components';

import { Categories, RoomList } from '../components';

const Home = () => {
	return (
		<>
			<Navbar />
			<Container className='section'>
				<Categories />
				<RoomList />
			</Container>
			<Footer />
		</>
	);
};

const Container = styled.main``;

export default Home;
