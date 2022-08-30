import styled from 'styled-components';
import { Button } from '..';

const ActionButtons = () => {
	return (
		<Container>
			<Button bgColor='#28a745'>Info</Button>
			<Button bgColor='#ffc107'>Update</Button>
			<Button bgColor='#dc3545'>Delete</Button>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	gap: 1rem;
	border: none !important;
	margin: auto 0;
	align-items: center;
`;

export default ActionButtons;
