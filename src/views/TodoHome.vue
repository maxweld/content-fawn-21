<script setup lang="ts">
	import { ref } from 'vue'
	import TodoPrivateWrapper from '../components/TodoPrivateWrapper.vue'
	import TodoPublicWrapper from '../components/TodoPublicWrapper.vue'
	import OnlineUsers from '../components/OnlineUsers.vue'
</script>

<template>
	<div>
		<div class="col-xs-12 col-md-12 col-lg-9 col-sm-12 noPadd">
			<div>
				<div class="col-md-6 col-sm-12">
					<div class="wd95 addPaddTopBottom">
						<div class="sectionHeader">Personal todos</div>
						<TodoPrivateWrapper />
					</div>
				</div>
				<div
					class="
						col-xs-12 col-md-6 col-sm-12
						grayBgColor
						todoMainWrapper
						commonBorRight
					"
				>
					<div class="wd95 addPaddTopBottom">
						<div class="sectionHeader">Public feed (realtime)</div>
						<TodoPublicWrapper />
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 col-lg-3 col-md-12 col-sm-12 noPadd">
			<OnlineUsers />
		</div>
	</div>
</template>

<style scoped>
	a {
		color: #42b983;
	}

	label {
		margin: 0 0.5em;
		font-weight: bold;
	}

	code {
		background-color: #eee;
		padding: 2px 4px;
		border-radius: 4px;
		color: #304455;
	}
</style>
