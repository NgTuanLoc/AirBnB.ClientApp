import styled from 'styled-components';

import { Navbar, Footer, Categories, RoomList } from '../components';

const Home = () => {
	return (
		<Container>
			<Navbar />
			<RoomContainer className='section'>
				<Categories />
				<RoomList />
			</RoomContainer>
			<Footer />
		</Container>
	);
};

const RoomContainer = styled.section`
	@media only screen and (max-width: 992px) {
		padding-inline: 1rem;
	}
`;

const Container = styled.main``;

export default Home;
