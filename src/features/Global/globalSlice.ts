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
}

const initialState: IGlobalState = {
	filteredLocationList: [],
	searchedLocation: { name: 'Anywhere', id: '0' },
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
	},
});
export const { filteredLocation, setSearchedLocation } = globalSlice.actions;

export default globalSlice.reducer;
