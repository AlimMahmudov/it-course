import { api as index } from '..'

const api = index.injectEndpoints({
	endpoints: build => ({
		getMe: build.query<AUTH.GetAuthResponse, void>({
			query: () => ({
				url: '/user/me',
				method: 'GET'
			}),
			providesTags: ['auth']
		}),
		getMeInfo: build.query<[], UserTypes.info_key>({
			query(key) {
				return {
					url: `/user/info/${key}`,
					method: 'GET'
				}
			},
			providesTags: ['auth']
		})
	}),
	overrideExisting: true
})

export const { useGetMeQuery, useGetMeInfoQuery } = api
