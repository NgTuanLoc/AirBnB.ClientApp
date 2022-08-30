import styled from 'styled-components';
import { Button } from '..';

const ActionButtons = () => {
	return (
		<Container>
			<Button>Info</Button>
			<Button>Update</Button>
			<Button>Delete</Button>
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
