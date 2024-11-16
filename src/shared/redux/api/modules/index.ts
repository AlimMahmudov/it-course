import { api as index } from '..'

const api = index.injectEndpoints({
	endpoints: build => ({
		getMaterialComments: build.query<[], string>({
			query: material_id => ({
				url: `/material/${material_id}/comments`,
				method: 'GET'
			})
		})
	}),
	overrideExisting: true
})

export const { useGetMaterialCommentsQuery } = api
