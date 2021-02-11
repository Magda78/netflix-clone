import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: null,
		subscriptionDate: null
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
		},
		date: (state, action) => {
			state.subscriptionDate = new Date(action.payload * 1000).toLocaleDateString()
		}
	}
});

export const { login, logout, date } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectSubscriptionDate = (state) => state.user.subscriptionDate;

export default userSlice.reducer;
