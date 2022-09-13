import { useEffect, useState, useRef, ChangeEvent, FormEvent } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

import {
	StyledContainer,
	StyledInput,
	StyledVerticalStripe,
	StyledButton,
	StyledSearchButton,
	StyledHeading,
} from './style';
import { Modal } from '../';
import { useAppSelector, useOnClickOutside } from '../../hooks';
import { transformLanguage } from '../../utils';

export interface ISearchLocation {
	location: string;
	id: string;
}
interface ISearch {
	hideSearch?: boolean;
}

const Search = ({ hideSearch }: ISearch) => {
	const navigate = useNavigate();
	const { locationList } = useAppSelector((store) => store.location);
	const [title, setTitle] = useState('Anywhere');
	const [inputLocation, setInputLocation] = useState<ISearchLocation>({
		location: 'Anywhere',
		id: '',
	});
	const [filteredLocations, setFilteredLocations] = useState<ISearchLocation[]>(
		[]
	);
	const [disableInput, setDisableInput] = useState(true);
	const suggestModalRef = useRef(null);
	useOnClickOutside(suggestModalRef, () => setDisableInput(true));

	const onFilterLocationHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const temp = transformLanguage(e.target.value);
		setInputLocation({ ...inputLocation, location: temp });
	};

	const setInputLocationHandler = (location: string, id: string) => {
		setInputLocation({ location, id });
		setTitle(location);
	};

	useEffect(() => {
		let transformedLocation = locationList.map((item) => {
			const { _id, province, name } = item;
			const temp = {
				location: `${province}, ${name}`,
				id: _id,
			};
			return temp;
		});

		const tempFilteredLocation = transformedLocation.filter((item) => {
			const temp = transformLanguage(item.location);
			return temp.startsWith(inputLocation.location);
		});

		setFilteredLocations(tempFilteredLocation);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputLocation]);

	const onSubmitHandler = (e: FormEvent) => {
		e.preventDefault();
		if (!inputLocation.location) return;

		navigate(`/room-list/${inputLocation.id}`);
	};

	return (
		<StyledContainer onSubmit={onSubmitHandler} hide={hideSearch}>
			<StyledButton type='button' ref={suggestModalRef}>
				<StyledHeading onClick={() => setDisableInput(false)}>
					{title}
				</StyledHeading>
				<StyledInput
					placeholder='Enter Location'
					disableInput={disableInput}
					onChange={onFilterLocationHandler}
					value={inputLocation.location}
				/>
				<Modal
					setInputLocation={setInputLocationHandler}
					disableInput={disableInput}
					locationList={filteredLocations}
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
