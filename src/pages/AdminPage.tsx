import styled from 'styled-components';
import { useState } from 'react';

import { Calendar } from '../components';

const AdminPage = () => {
	const [date, setDate] = useState(new Date());

	return (
		<Container className='section'>
			<Calendar />
		</Container>
	);
};

const Container = styled.main``;

export default AdminPage;
