import styled from 'styled-components';
import { GoLocation } from 'react-icons/go';

import { IFilteredLocation } from './Navbar';

export interface IProps {
	locationList: IFilteredLocation[];
	disableInput: boolean;
	setInputLocation: (location: string, id: string) => void;
	setDisableInput: (value: boolean) => void;
}

interface InputProps {
	disableInput: boolean;
}

const Modal = ({
	locationList,
	disableInput,
	setInputLocation,
	setDisableInput,
}: IProps) => {
	const onClickHandler = (location: string, id: string) => {
		setInputLocation(location, id);
		setDisableInput(false);
	};

	return (
		<Container disableInput={locationList.length === 0 || disableInput}>
			{locationList.map((item) => {
				const { id, location } = item;
				return (
					<Button onClick={() => onClickHandler(location, id)} key={id}>
						<GoLocation />
						{location}
					</Button>
				);
			})}
		</Container>
	);
};

const Container = styled.article<InputProps>`
	display: ${(p) => (p.disableInput ? 'none' : 'true')};
	position: absolute;
	background-color: var(--clr-secondary);
	top: 5rem;
	left: 50%;
	transform: translateX(-50%);
	width: 25rem;
	height: 20rem;
	border-radius: var(--radius);
	scrollbar-width: none;
	overflow-y: scroll;
	overflow-x: hidden;
	align-items: flex-start;

	flex-direction: column;

	::before {
		content: '';
		display: block;
		width: 0;
		height: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-bottom: 5px solid var(--clr-secondary);
		position: absolute;
		top: -5px;
		left: 50%;
		transform: translateX(-50%);
	}
`;

const Button = styled.div`
	text-align: left;
	padding-inline: 0.5rem;
	width: 100%;
	color: black;
	display: flex;
	align-items: center;
	gap: 1rem;
	margin: 0.75rem 0;

	svg {
		font-size: 2rem;
	}
`;

export default Modal;
