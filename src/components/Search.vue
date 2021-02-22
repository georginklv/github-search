<template>
	<div>
		<v-form @submit.prevent="displayUsers" class="form">
			<input
				type="text"
				name="text"
				placeholder="Search Users..."
				v-model="inputText"
			/>
			<input type="submit" value="Search" class="btn btn-dark btn-block" />
		</v-form>

		<v-btn
			v-if="users.length"
			class="btn btn-light btn-block"
			onClick="clearUserSearch"
		>
			Clear
		</v-btn>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
	data() {
		return {
			inputText: '',
			isLoading: false,
		};
	},
	computed: {
		...mapState('users', ['users']),
	},
	methods: {
		...mapActions('users', ['getUsers', 'clearUsers']),
		async displayUsers() {
			if (this.inputText) {
				this.isLoading = true;
				await this.getUsers(this.inputText);
				this.isLoading = false;
				this.inputText = '';
				console.log(this.users);
			} else {
			}
		},
		clearUserSearch() {
			this.clearUsers();
			this.inputText = '';
		},
	},
};
</script>

<style></style>
