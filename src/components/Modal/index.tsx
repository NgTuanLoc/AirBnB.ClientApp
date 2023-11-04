import { GoLocation } from 'react-icons/go';

import { StyledContainer, StyledButton } from './style';
import { setSearchedLocation } from '../../features/Global/globalSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

export interface IProps {
	disableInput: boolean;
	setDisableInput: (value: boolean) => void;
	setTitle?: any;
}

const Modal = ({ setTitle, disableInput, setDisableInput }: IProps) => {
	const { filteredLocationList } = useAppSelector((store) => store.global);
	const dispatch = useAppDispatch();
	const onClickHandler = (name: string, id: string) => {
		dispatch(setSearchedLocation({ name, id }));
		setDisableInput(true);
		setTitle(name);
	};

	return (
		<StyledContainer
			disableInput={filteredLocationList.length === 0 || disableInput}>
			{filteredLocationList.map((item) => {
				const { id, name, province } = item;
				const location = `${province}, ${name}`;
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
