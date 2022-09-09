import { GoLocation } from 'react-icons/go';

import { StyledContainer, StyledButton } from './style';

export interface IFilteredLocation {
	location: string;
	id: string;
}

export interface IProps {
	locationList: IFilteredLocation[];
	disableInput: boolean;
	setInputLocation: (location: string, id: string) => void;
	setDisableInput: (value: boolean) => void;
}

const Modal = ({
	locationList,
	disableInput,
	setInputLocation,
	setDisableInput,
}: IProps) => {
	const onClickHandler = (location: string, id: string) => {
		setInputLocation(location, id);
		setDisableInput(true);
	};

	return (
		<StyledContainer disableInput={locationList.length === 0 || disableInput}>
			{locationList.map((item) => {
				const { id, location } = item;
				return (
					<StyledButton onClick={() => onClickHandler(location, id)} key={id}>
						<GoLocation />
						{location}
					</StyledButton>
				);
			})}
		</StyledContainer>
	);
};

export default Modal;
