import { createApp } from 'vue'
import App from './App.vue'
import urql, { createClient } from '@urql/vue'

const client = createClient({
	url: import.meta.env.VITE_GRAPHQL_ENDPOINT,
	fetchOptions: () => {
		// const token = getToken();
		return {
			headers: {
				'x-hasura-admin-secret': import.meta.env.VITE_SECRET,
			},
		}
	},
})

const app = createApp(App)
app.use(urql, client)
app.mount('#app')
