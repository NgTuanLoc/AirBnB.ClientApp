import styled from 'styled-components';
import { Button } from '..';

export interface IActionButtons {
	infoHandler: any;
	updateHandler: any;
	deleteHandler: any;
	id: string;
}

const ActionButtons = ({
	infoHandler,
	updateHandler,
	deleteHandler,
	id,
}: IActionButtons) => {
	return (
		<Container>
			<Button onClickHandler={infoHandler(id)} bgColor='#28a745'>
				Info
			</Button>
			<Button onClickHandler={updateHandler(id)} bgColor='#ffc107'>
				Update
			</Button>
			<Button onClickHandler={deleteHandler(id)} bgColor='#dc3545'>
				Delete
			</Button>
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
