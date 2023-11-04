import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../utils';
import { RootState } from '../../app/store';
import { UNAUTHENTICATED, UNAUTHORIZED } from '../../constant/Error';

const URL = '/api/v1/users';

const getAllUsers = createAsyncThunk<IUser[], void, { state: RootState }>(
	'user/getAllUsers',
	async (_, thunkAPI) => {
		try {
			const { auth } = thunkAPI.getState().auth;

			if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);

			const { roleList } = auth;

			if (roleList.includes('Admin'))
				return thunkAPI.rejectWithValue(UNAUTHORIZED);

			const params = {
				method: 'GET',
				url: `${URL}`,
			};
			const response = await axiosInstance.request(params);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
const getUserById = createAsyncThunk<IUser, string, { state: RootState }>(
	'user/getUserById',
	async (userId, thunkAPI) => {
		try {
			const { auth } = thunkAPI.getState().auth;

			if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);

			const { roleList } = auth;

			if (roleList.includes('Admin'))
				return thunkAPI.rejectWithValue(UNAUTHORIZED);

			const params = {
				method: 'GET',
				url: `${URL}/${userId}`,
			};
			const response = await axiosInstance.request(params);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const getAllUsersPagination = createAsyncThunk<
	IUser[],
	{
		limit: number;
		skip: number;
	},
	{ state: RootState }
>('user/getAllUsersPagination', async ({ limit = 0, skip = 10 }, thunkAPI) => {
	try {
		const { auth } = thunkAPI.getState().auth;

		if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);

		const { roleList } = auth;

		if (roleList.includes('Admin'))
			return thunkAPI.rejectWithValue(UNAUTHORIZED);
		const params = {
			method: 'GET',
			url: `${URL}/pagination?skip=${skip}&limit=${limit}`,
		};
		const response = await axiosInstance.request(params);
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

const createUser = createAsyncThunk<string, IRegister, { state: RootState }>(
	'user/createUser',
	async (user, thunkAPI) => {
		try {
			const { auth } = thunkAPI.getState().auth;

			if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);

			const { roleList } = auth;

			if (roleList.includes('Admin'))
				return thunkAPI.rejectWithValue(UNAUTHORIZED);

			const params = {
				method: 'POST',
				url: `${URL}`,
				data: {
					// name: user.name,
					// email: user.email,
					// password: user.password,
					// phone: user.phone,
					// birthday: user.birthday,
					// gender: user.gender === 'Man' ? true : false,
					// address: user.address,
					// type: user.type,
				},
			};

			await axiosInstance.request(params);
			return `Create new ${user.email} successfully`;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const deleteUserById = createAsyncThunk<string, string, { state: RootState }>(
	'user/deleteUserById',
	async (userId, thunkAPI) => {
		try {
			const { auth } = thunkAPI.getState().auth;

			if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);

			const { roleList } = auth;

			if (roleList.includes('Admin'))
				return thunkAPI.rejectWithValue(UNAUTHORIZED);

			const params = {
				method: 'DELETE',
				url: `${URL}/${userId}`,
			};

			await axiosInstance.request(params);
			return `Delete user ${userId} successfully`;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const updateUserById = createAsyncThunk<IUser, IUser, { state: RootState }>(
	'user/updateUserById',
	async (user, thunkAPI) => {
		try {
			const { auth } = thunkAPI.getState().auth;

			if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);

			const { roleList } = auth;

			if (roleList.includes('Admin'))
				return thunkAPI.rejectWithValue(UNAUTHORIZED);

			const params = {
				method: 'PUT',
				url: `${URL}/${user.id}`,
				data: {
					// name: user.name,
					// email: user.email,
					// password: user.password,
					// phone: user.phone,
					// birthday: user.birthday,
					// gender: user.gender,
					// address: user.address,
					// type: user.type,
				},
			};

			const response = await axiosInstance.request(params);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const uploadUserAvatar = createAsyncThunk<
	string,
	{ image: FormData },
	{
		state: RootState;
	}
>('user/uploadUserAvatarById', async (user, thunkAPI) => {
	try {
		const { auth } = thunkAPI.getState().auth;
		const { image } = user;

		if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);

		const { roleList } = auth;

		if (roleList.includes('Admin'))
			return thunkAPI.rejectWithValue(UNAUTHORIZED);

		const params = {
			method: 'POST',
			url: `${URL}/upload-avatar`,
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			data: image,
		};

		await axiosInstance.request(params);

		return 'Upload User Avatar Successful';
	} catch (error) {
		return thunkAPI.rejectWithValue('Upload User Avatar failed');
	}
});

export {
	getAllUsers,
	getAllUsersPagination,
	getUserById,
	createUser,
	deleteUserById,
	updateUserById,
	uploadUserAvatar,
};
