import { createSlice } from '@reduxjs/toolkit';

import { IUser } from '../../@types/User';
import {
	getAllUsers,
	getAllUsersPagination,
	getUserById,
	createUser,
	deleteUserById,
} from './userThunk';

export interface IUserState {
	userList: IUser[];
	selectedUser: IUser | null;
	successMsg: string;
	error: string;
	isLoading: boolean;
}

const initialState: IUserState = {
	userList: [],
	selectedUser: null,
	successMsg: '',
	error: '',
	isLoading: false,
};

const userSlice = createSlice({
	name: 'User',
	initialState,
	reducers: {
		bookingRoom: () => {},
	},
	extraReducers(builder) {
		// Get All Users
		builder.addCase(getAllUsers.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.successMsg = 'get all user Success';
			state.userList = payload;
		});
		builder.addCase(getAllUsers.rejected, (state, { payload }) => {
			state.isLoading = true;
			if (payload) {
				state.error = payload as string;
			}
		});

		// Get User By Id
		builder.addCase(getUserById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getUserById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.successMsg = 'get all user Success';
			state.selectedUser = payload;
		});
		builder.addCase(getUserById.rejected, (state, { payload }) => {
			state.isLoading = true;
			if (payload) {
				state.error = payload as string;
			}
		});

		// Get All Users Pagination
		builder.addCase(getAllUsersPagination.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getAllUsersPagination.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.successMsg = 'get all user paginate Success';
			state.userList = payload;
		});
		builder.addCase(getAllUsersPagination.rejected, (state, { payload }) => {
			state.isLoading = true;
			if (payload) {
				state.error = payload as string;
			}
		});

		// Create User
		builder.addCase(createUser.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(createUser.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.successMsg = payload;
		});
		builder.addCase(createUser.rejected, (state, { payload }) => {
			state.isLoading = true;
			if (payload) {
				state.error = payload as string;
			}
		});

		// Delete User By Id
		builder.addCase(deleteUserById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(deleteUserById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.successMsg = payload;
		});
		builder.addCase(deleteUserById.rejected, (state, { payload }) => {
			state.isLoading = true;
			if (payload) {
				state.error = payload as string;
			}
		});
	},
});

export default userSlice.reducer;
