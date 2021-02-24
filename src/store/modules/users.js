import axios from 'axios';
let githubClientId = 'e0615c6adee9eedafcb4';
let githubClientSecret = '36a5e792dc03e3244b3c466a9bb86ce67b292897';
// State
const state = {
	users: [],
	curentUser: {},
	repos: [],
};

// Actions
const actions = {
	//Get Users
	async getUsers({ commit }, text) {
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`,
		);

		commit('GET_USERS', res.data.items);
		return res;
	},

	// Get curent user
	async getUser({ commit }, username) {
		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`,
		);

		commit('GET_USER', res.data);
		return res;
	},

	// Get user repos
	async getCurentUserRepos({ commit }, username) {
		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`,
		);
		console.log('action1', res.data);
		commit('GET_REPOS', res.data);
		return res;
	},

	// Clear user
	async clearUsers({ commit }) {
		commit('CLEAR_USERS');
	},
};

// Mutations
const mutations = {
	GET_USERS: (state, users) => (state.users = users),

	CLEAR_USERS: (state) => (state.users = []),

	GET_USER: (state, curentUser) => (state.curentUser = curentUser),

	GET_REPOS: (state, repos) => (state.repos = repos),
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
};
