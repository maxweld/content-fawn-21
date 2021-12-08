module.exports = {
	overwrite: true,
	generates: {
		'./src/generated/graphql.d.ts': {
			schema: './src/generated/schema.graphql',
			documents: ['./src/**/*.vue'],
			plugins: ['typescript', 'typescript-operations', 'typescript-vue-urql'],
			config: {
				preResolveTypes: true,
				skipTypename: false,
				enumsAsTypes: true,
				constEnums: true,
			},
		},
	},
}
