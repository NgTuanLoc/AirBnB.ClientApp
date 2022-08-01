import { createSlice } from '@reduxjs/toolkit';

import { ILocation } from '../../@types/Location';
import { getLocationList } from './locationThunk';

export interface IState {
	locationList: ILocation[];
	isLoading: boolean;
	error: string;
}

const initialState: IState = {
	locationList: [],
	isLoading: false,
	error: '',
};

const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {
		test: () => {
			console.log('Hello');
		},
	},
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
