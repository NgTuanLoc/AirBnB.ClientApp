import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { transformLanguage } from '../../utils';
import { ILocation } from '../../@types/Location';

export interface ISearch {
	name: string;
	id: string;
}

interface IGlobalState {
	filteredLocationList: ILocation[];
	searchedLocation: ISearch;
	bookDate: {
		checkIn: Date;
		checkOut: Date;
	};
	numberOfVisitDay: number;
}

const initialState: IGlobalState = {
	filteredLocationList: [],
	searchedLocation: { name: 'Anywhere', id: '0' },
	bookDate: {
		checkIn: new Date(),
		checkOut: new Date(new Date().getTime() + 86400000),
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
			state.bookDate.checkIn = checkInValue;
			state.bookDate.checkOut = checkOutValue;
			const temp = state.bookDate.checkOut
				? Math.round(
						(state.bookDate.checkOut.getTime() -
							state.bookDate.checkIn.getTime()) /
							(1000 * 3600 * 24)
				  )
				: 0;
			state.numberOfVisitDay = temp;
		},
	},
});
export const { filteredLocation, setSearchedLocation, setBookDate } =
	globalSlice.actions;

export default globalSlice.reducer;
