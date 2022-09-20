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
}

const initialState: IGlobalState = {
	filteredLocationList: [],
	searchedLocation: { name: 'Anywhere', id: '0' },
	bookDate: {
		checkIn: transformDate(new Date()),
		checkOut: transformDate(new Date(new Date().getTime() + 86400000)),
	},
	numberOfVisitDay: 0,
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
				const { _id, province, name } = item;
				const temp = {
					name: transformLanguage(`${province}, ${name}`),
					_id: _id,
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
				checkInValue: Date;
				checkOutValue: Date;
			}>
		) => {
			const { checkInValue, checkOutValue } = action.payload;
			const temp = state.bookDate.checkOut
				? Math.round(
						(checkInValue.getTime() - checkOutValue.getTime()) /
							(1000 * 3600 * 24)
				  )
				: 0;

			state.bookDate.checkIn = transformDate(checkInValue);
			state.bookDate.checkOut = transformDate(checkOutValue);
			state.numberOfVisitDay = temp;
		},
	},
});
export const { filteredLocation, setSearchedLocation, setBookDate } =
	globalSlice.actions;

export default globalSlice.reducer;
