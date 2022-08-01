import styled from 'styled-components';

import { Categories } from '../components';

const Home = () => {
	return (
		<Container className='section'>
			<Categories />
		</Container>
	);
};

const Container = styled.main``;

export default Home;
