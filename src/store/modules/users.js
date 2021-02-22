import axios from 'axios';
let githubClientId = 'e0615c6adee9eedafcb4';
let githubClientSecret = '36a5e792dc03e3244b3c466a9bb86ce67b292897';
const url = 'http://localhost:3000/users';
// State
const state = {
	users: [],
	currentUser: {},

	selectedUser: localStorage.getItem('selectedUser') || [],
};

// Actions
const actions = {
	//Get Users
	async getUsers({ commit }, username) {
		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`,
		);

		commit('GET_USERS', res.data);
		return res;
	},

	// Get user
	async getUser({ commit }, username) {
		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`,
		);

		commit('GET_USER', res.data);
		return res;
	},
};

// Mutations
const mutations = {
	GET_USERS: (state, users) => (state.users = users),
	UPDATE_USER: (state, user) => (state.user = user),
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
};
