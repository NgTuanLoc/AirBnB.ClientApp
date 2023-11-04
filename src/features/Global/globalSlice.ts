import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { transformLanguage, transformDate } from '../../utils';
import { ILocation } from '../../@types/Location';

export interface ISearch {
	name: string;
	id: string;
}

interface IGlobalState {
	filteredLocationList: ILocation[];
	searchedLocation: ISearch;
	bookDate: {
		checkIn: string;
		checkOut: string;
	};
	numberOfVisitDay: number;
	isAnimalServiceModalOpen: boolean;
}

const initialState: IGlobalState = {
	filteredLocationList: [],
	searchedLocation: { name: 'Anywhere', id: '0' },
	bookDate: {
		checkIn: transformDate(new Date()),
		checkOut: transformDate(new Date(new Date().getTime() + 86400000)),
	},
	numberOfVisitDay: 0,
	isAnimalServiceModalOpen: false,
};

const globalSlice = createSlice({
	name: 'Global',
	initialState,
	reducers: {
		filteredLocation: (
			state: IGlobalState,
			action: PayloadAction<{ originalData: ILocation[] }>
		) => {
			const { originalData } = action.payload;
			state.filteredLocationList = originalData.filter((item) => {
				const { id, province, name } = item;
				const temp = {
					name: transformLanguage(`${province}, ${name}`),
					id: id,
				};

				return temp.name.startsWith(state.searchedLocation.name);
			});
		},
		setSearchedLocation: (
			state: IGlobalState,
			action: PayloadAction<ISearch>
		) => {
			state.searchedLocation = action.payload;
		},
		setBookDate: (
			state: IGlobalState,
			action: PayloadAction<{
				checkInValue: string;
				checkOutValue: string;
				numberOfVisitDayValue: number;
			}>
		) => {
			const { checkInValue, checkOutValue, numberOfVisitDayValue } =
				action.payload;

			state.bookDate.checkIn = checkInValue;
			state.bookDate.checkOut = checkOutValue;
			state.numberOfVisitDay = numberOfVisitDayValue;
		},
		setIsAnimalServiceModalOpen: (
			state: IGlobalState,
			action: PayloadAction<boolean>
		) => {
			state.isAnimalServiceModalOpen = action.payload;
		},
	},
});
export const {
	filteredLocation,
	setSearchedLocation,
	setIsAnimalServiceModalOpen,
	setBookDate,
} = globalSlice.actions;

export default globalSlice.reducer;
