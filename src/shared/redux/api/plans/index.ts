import { api as index } from '..'

const api = index.injectEndpoints({
	endpoints: build => ({
		getPlans: build.query<PlansTypes.Plan[], void>({
			query: () => ({
				url: '/plans',
				method: 'GET'
			})
		}),
		subscribePlan: build.mutation<
			{ message: string },
			{ body: IProcessPaymentArg; plan_id: string}
		>({
			query: arg => ({
				url: `/plan/${arg.plan_id}/subscribe`,
				method: 'POST',
				body: arg.body
			})
		})
	}),
	overrideExisting: true
})

export const { useGetPlansQuery,useSubscribePlanMutation } = api
