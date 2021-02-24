<template>
	<div class="container">
		<router-link to="/" class="btn btn-light black--text"
			>Back To Search</router-link
		>

		Hireable:
		<v-icon v-if="curentUser.hireable">mdi-check-bold</v-icon>
		<v-icon v-else>mdi-close-thick</v-icon>

		<v-card class="box card ">
			<div class="all-center">
				<img :src="curentUser.avatar_url" class="round-img" alt="avatar" />
				<h1 class="heading">{{ curentUser.name }}</h1>
				<p>{{ curentUser.location }}</p>
			</div>
			<div class="all-center">
				<h3 v-if="curentUser.bio">Bio</h3>
				<p v-if="curentUser.bio">{{ curentUser.bio }}</p>
				<a :href="curentUser.html_url" target="_blanc" class="btn btn-dark my-1"
					>Visit Github Profile</a
				>
				<ul>
					<li v-if="curentUser.login">
						<strong>Username: </strong> {{ curentUser.login }}
					</li>
					<li v-if="curentUser.company">
						<strong>Company: </strong>{{ curentUser.company }}
					</li>
					<li v-if="curentUser.blog">
						<strong>Website: </strong>{{ curentUser.blog }}
					</li>
				</ul>
			</div>
		</v-card>

		<v-card class="card text-center">
			<div class="badge badge-primary">
				Followers: {{ curentUser.followers }}
			</div>
			<div class="badge badge-success">
				Following: {{ curentUser.following }}
			</div>
			<div class="badge badge-light">
				Public Repos: {{ curentUser.public_repos }}
			</div>
			<div class="badge badge-dark">
				Public Gists: {{ curentUser.public_gists }}
			</div>
		</v-card>

		<v-card>
			<v-card
				class="grid-2 mt-3 card red--text"
				v-for="repo in repos"
				:key="repo.id"
			>
				<a :href="repo.html_url" target="_blanc" class="red--text">{{
					repo.name
				}}</a>
			</v-card>
		</v-card>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	data() {
		return {};
	},
	computed: {
		...mapState('users', ['curentUser', 'repos']),
	},
	methods: {
		...mapActions('users', ['getUser', 'getCurentUserRepos']),
		asd() {
			console.log(this.currentUser);
		},
	},
	async mounted() {
		this.isLoading = true;
		try {
			await this.getUser(this.$route.params.username);
			await this.getCurentUserRepos(this.$route.params.username);
		} catch (error) {
			this.isLoading = false;
		}
	},
};
</script>

<style lang="scss">
.box {
	display: flex !important;
	flex-direction: row;
}
</style>
