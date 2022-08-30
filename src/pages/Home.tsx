import { useEffect } from 'react';
import styled from 'styled-components';

import { Navbar, Footer, Categories, RoomList } from '../components';
import { useAppDispatch } from '../hooks/hooks';
import { getLocationList } from '../features/Location/locationThunk';

const Home = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getLocationList());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
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
