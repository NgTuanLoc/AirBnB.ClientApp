import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type DashboardType = 'USER' | 'ROOM' | 'LOCATION';

interface IAdminState {
	selectedDashboard: DashboardType;
	isFormOpen: boolean;
}

const initialState: IAdminState = {
	selectedDashboard: 'USER',
	isFormOpen: false,
};

const adminSlice = createSlice({
	name: 'Admin',
	initialState,
	reducers: {
		setSelectedDashboard: (
			state: IAdminState,
			action: PayloadAction<DashboardType>
		) => {
			state.selectedDashboard = action.payload;
		},
	},
});
export const { setSelectedDashboard } = adminSlice.actions;

export default adminSlice.reducer;
