import { api as index } from '..'

const api = index.injectEndpoints({
	endpoints: build => ({
		getSubscriptions: build.query<SubscriptionsTypes.Subscription[], void>({
			query: () => ({
				url: '/subscriptions',
				method: 'GET'
			})
		})
	}),
	overrideExisting: true
})

export const {useGetSubscriptionsQuery} = api
