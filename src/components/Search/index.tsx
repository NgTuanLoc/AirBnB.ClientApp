import { useEffect, useState, useRef, ChangeEvent, FormEvent } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

import { Modal } from '../';
import { useAppDispatch, useAppSelector, useOnClickOutside } from '../../hooks';
import { transformLanguage } from '../../utils';
import {
	filteredLocation,
	setSearchedLocation,
} from '../../features/Global/globalSlice';
import {
	StyledContainer,
	StyledInput,
	StyledVerticalStripe,
	StyledButton,
	StyledSearchButton,
	StyledHeading,
} from './style';

export interface ISearchLocation {
	location: string;
	id: string;
}
interface ISearch {
	hideSearch?: boolean;
}

const Search = ({ hideSearch }: ISearch) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { locationList } = useAppSelector((store) => store.location);
	const { searchedLocation } = useAppSelector((store) => store.global);
	const [disableInput, setDisableInput] = useState(true);
	const suggestModalRef = useRef(null);
	useOnClickOutside(suggestModalRef, () => setDisableInput(true));
	const [locationTitle, setLocationTitle] = useState(searchedLocation.name);

	const onFilterLocationHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const temp = transformLanguage(e.target.value);
		dispatch(setSearchedLocation({ id: '0', name: temp }));
	};

	useEffect(() => {
		dispatch(filteredLocation({ originalData: locationList }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchedLocation]);

	const onSubmitHandler = (e: FormEvent) => {
		e.preventDefault();
		if (!searchedLocation.name) return;

		navigate(`/room-list/${searchedLocation.id}`);
	};

	return (
		<StyledContainer onSubmit={onSubmitHandler} hide={hideSearch}>
			<StyledButton type='button' ref={suggestModalRef}>
				<StyledHeading onClick={() => setDisableInput(false)}>
					{locationTitle}
				</StyledHeading>
				<StyledInput
					placeholder='Enter Location'
					disableInput={disableInput}
					onChange={onFilterLocationHandler}
					value={searchedLocation.name}
				/>
				<Modal
					setTitle={setLocationTitle}
					disableInput={disableInput}
					setDisableInput={setDisableInput}
				/>
			</StyledButton>
			<StyledVerticalStripe />
			<StyledButton type='button'>Any week</StyledButton>
			<StyledVerticalStripe />
			<StyledButton>Add guests</StyledButton>
			<StyledSearchButton type='submit'>
				<HiOutlineSearch />
			</StyledSearchButton>
		</StyledContainer>
	);
};

export default Search;
