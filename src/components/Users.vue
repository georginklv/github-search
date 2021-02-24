<template>
	<div class="boxes" v-if="users.length">
		<v-card class="grid-2 card" v-for="user in users" :key="user.id">
			<div class="all-center">
				<v-img :src="user.avatar_url" class="round-img" alt="" />
				<h1>{{ user.login }}</h1>

				<router-link
					:to="`/users/${user.login}`"
					class="btn btn-dark btn-sm my-1"
					@click="getCurrentUser(user)"
				>
					More
				</router-link>
			</div>
		</v-card>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
	data() {
		return {};
	},
	computed: {
		...mapState('users', ['users']),
	},
	methods: {
		...mapActions('users', ['getUsers', 'getUser']),
		getCurrentUser(user) {
			this.getUser(user);
		},
	},
	mounted() {},
};
</script>

<style>
.boxes {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;
}
</style>
