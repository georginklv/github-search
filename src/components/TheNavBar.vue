<template>
	<v-app>
		<v-app-bar app color="red" dark>
			<v-toolbar-title>
				<v-row>
					<img src="https://image.flaticon.com/icons/png/512/25/25231.png" />
					<p class="px-3 ma-0 ">Github</p>
				</v-row>
			</v-toolbar-title>

			<v-row align="center" justify="end">
				<v-col cols="auto" class="pa-0 mx-2 ">
					<v-btn text to="/">Home</v-btn>
				</v-col>

				<v-col cols="auto" class="pa-0 mx-2 ">
					<v-btn text to="/about">About</v-btn>
				</v-col>
			</v-row>
		</v-app-bar>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		drawer: null,
	}),
};
</script>

<style lang="scss" scoped>
.v-application {
	height: 50px;
}
.row {
	margin: 0px;
	display: flex;
	align-items: center;
}
img {
	width: 30px;
	height: 30px;
}
</style>
