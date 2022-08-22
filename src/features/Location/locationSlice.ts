import { createSlice } from '@reduxjs/toolkit';

import { ILocation } from '../../@types/Location';
import { getLocationList } from './locationThunk';

export interface ILocationState {
	locationList: ILocation[];
	selectedCity: string;
	isLoading: boolean;
	error: string;
}

const initialState: ILocationState = {
	locationList: [],
	selectedCity: 'Hoi An',
	isLoading: false,
	error: '',
};

const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getLocationList.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getLocationList.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.locationList = payload;
		});
		builder.addCase(getLocationList.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});
	},
});

export default locationSlice.reducer;
