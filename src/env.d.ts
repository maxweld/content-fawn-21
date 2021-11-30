/// <reference types="vite/client" />

declare module '*.vue' {
	import { DefineComponent } from 'vue'
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>
	export default component
}

interface ImportMetaEnv extends Readonly<Record<string, string>> {
	readonly VITE_APP_TITLE: string
	readonly VITE_GRAPHQL_ENDPOINT: string
	readonly VITE_SECRET: string
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
