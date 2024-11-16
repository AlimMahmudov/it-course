import { api as index } from '..'
const api = index.injectEndpoints({
	endpoints: build => ({
		getMe: build.query<UserTypes.User, void>({
			query: () => ({
				url: '/user/me',
				method: 'GET'
			}),
			providesTags: ['auth']
		}),
		getMeInfo: build.query<any[], UserTypes.info_key>({
			query(key) {
				return {
					url: `/user/info/${key}`,
					method: 'GET'
				}
			},
			providesTags: ['auth']
		}),
		getMyPurchases: build.query<any[], UserTypes.purchases_key>({
			query(key) {
				return {
					url: `/user/purchases/${key}`,
					method: 'GET'
				}
			},
			providesTags: ['auth']
		}),
		getProgress: build.query<
			UserTypes.UserProgress,
			{
				type: 'master_class' | 'course'
				course_id?: string
				master_class_id?: string
			}
		>({
			query({ type, course_id, master_class_id }) {
				return {
					url: `/user/progress/${type}${
						type === 'course'
							? `?course_id=${course_id}`
							: type == 'master_class'
							? `?master_class_id=${master_class_id}`
							: ''
					}`,
					method: 'GET'
				}
			},
			providesTags: ['auth']
		}),
		addPaymentCard: build.mutation<
			{ message: string },
			UserTypes.AddPaymentCardArg
		>({
			query(arg) {
				return {
					url: `/user/payment_card/add`,
					method: 'POST',
					body: arg
				}
			},
			invalidatesTags: ['auth']
		})
	}),
	overrideExisting: true
})

export const {
	useGetMeQuery,
	useGetMeInfoQuery,
	useAddPaymentCardMutation,
	useGetMyPurchasesQuery,
	useGetProgressQuery
} = api
