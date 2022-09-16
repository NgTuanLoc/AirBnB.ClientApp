import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../../@types/User';
import {
	getAllUsers,
	getAllUsersPagination,
	getUserById,
	createUser,
	deleteUserById,
	updateUserById,
} from './userThunk';
import { transformLanguage } from '../../utils';

export interface IUserState {
	userList: IUser[];
	searchedUser: IUser[];
	selectedUser: IUser | null;
	successMsg: string;
	error: string;
	isLoading: boolean;
}

const initialState: IUserState = {
	userList: [],
	searchedUser: [],
	selectedUser: null,
	successMsg: '',
	error: '',
	isLoading: false,
};

const userSlice = createSlice({
	name: 'User',
	initialState,
	reducers: {
		searchUser: (state: IUserState, action: PayloadAction<string>) => {
			const temp = state.userList.filter((user) => {
				if (!user.name) return false;
				const tempUserName = transformLanguage(user.name);
				return tempUserName.includes(action.payload);
			});

			state.searchedUser = temp;
		},
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
			state.searchedUser = payload;
		});
		builder.addCase(getAllUsers.rejected, (state, { payload }) => {
			state.isLoading = false;
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
			state.isLoading = false;
			if (payload) {
				state.error = payload as string;
			}
		});

		// Update User By Id
		builder.addCase(updateUserById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(updateUserById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.selectedUser = payload;
		});
		builder.addCase(updateUserById.rejected, (state, { payload }) => {
			state.isLoading = true;
			if (payload) {
				state.error = payload as string;
			}
		});
	},
});

export const { searchUser } = userSlice.actions;

export default userSlice.reducer;
