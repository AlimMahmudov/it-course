import { API_URL } from '@/shared/const/export-env'
import {
	BaseQueryFn,
	createApi,
	fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
	baseUrl: API_URL + '/api',
	prepareHeaders: headers => {
		let token = JSON.parse(
			String(localStorage.getItem('accessToken')) !== 'undefined'
				? String(localStorage.getItem('accessToken'))
				: '{}'
		)
		if (token && typeof token === 'string') {
			headers.set('Authorization', `Bearer ${token}`)
		}

		return headers
	},
	credentials: 'include'
})

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
	const results = await baseQuery(args, api, extraOptions)
	return results
}

export const api = createApi({
	baseQuery: baseQueryExtended,
	reducerPath: 'api',
	refetchOnFocus: true,
	refetchOnReconnect: false,
	tagTypes: ['auth'],
	endpoints: () => ({})
})
