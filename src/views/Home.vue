<template>
	<v-app>
		<Search />
		<Users />
	</v-app>
</template>

<script>
import Search from '../components/Search.vue';
import Users from '../components/Users.vue';
export default {
	components: { Search, Users },
	data: () => ({}),
};
</script>

<style lang="scss" scoped></style>
