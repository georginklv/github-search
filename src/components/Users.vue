<template>
	<div>
		<v-card class="card grid-2">
			<div class="all-center">
				<v-img :src="users.avatar_url" class="round-img" alt="" />
				<h1>{{ users.name }}</h1>
				<router-link
					:to="`/users/${user.login}`"
					class="btn btn-dark btn-sm my-1"
				>
					More
				</router-link>
			</div>
		</v-card>
	</div>
</template>

<script>
import { mapState } from 'vuex';
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
	methods: {},
};
</script>

<style></style>
