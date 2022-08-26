import { createSlice } from '@reduxjs/toolkit';

import { ILocation } from '../../@types/Location';
import {
	getLocationList,
	getLocationById,
	createLocation,
	updateLocationById,
	deleteLocationById,
} from './locationThunk';

export interface ILocationState {
	locationList: ILocation[];
	selectedCity: string;
	selectedLocation: ILocation | null;
	isLoading: boolean;
	successMsg: string;
	error: string;
}

const initialState: ILocationState = {
	locationList: [],
	selectedCity: 'Hoi An',
	selectedLocation: null,
	isLoading: false,
	successMsg: '',
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

		builder.addCase(getLocationById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getLocationById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.selectedLocation = payload;
		});
		builder.addCase(getLocationById.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});

		builder.addCase(createLocation.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(createLocation.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.successMsg = payload;
		});
		builder.addCase(createLocation.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});

		builder.addCase(updateLocationById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(updateLocationById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.successMsg = payload;
		});
		builder.addCase(updateLocationById.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});

		builder.addCase(deleteLocationById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(deleteLocationById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.successMsg = payload;
		});
		builder.addCase(deleteLocationById.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});
	},
});

export default locationSlice.reducer;
