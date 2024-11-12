import { api as index } from '..'

const api = index.injectEndpoints({
	endpoints: build => ({
		getMe: build.query<AUTH.GetAuthResponse, AUTH.GetAuthRequest>({
			query: () => ({
				url: '/user/me',
				method: 'GET'
			}),
			providesTags: ['auth']
		}),
		login: build.mutation({
			query: newData => {
				const formData = new FormData()
				formData.append('email', newData.email)
				formData.append('password', newData.password)

				return {
					url: '/auth/login',
					method: 'POST',
					body: formData
				}
			},
			invalidatesTags: ['auth']
		}),
		forgotPass: build.mutation<
			{ message: string },
			Record<'clientUrl' | 'email', string>
		>({
			query(arg) {
				const formData = new FormData()
				Object.keys(arg).map(key => {
					formData.append(key, arg[key as keyof typeof arg])
				})

				return {
					url: '/auth/forgot-password',
					method: 'POST',
					body: formData
				}
			}
		}),
		resetPass: build.mutation<
			{ message: string },
			Record<'newPass' | 'resetToken', string>
		>({
			query(arg) {
				const formData = new FormData()
				Object.keys(arg).map(key => {
					formData.append(key, arg[key as keyof typeof arg])
				})

				return {
					url: '/auth/reset-password',
					method: 'POST',
					body: formData
				}
			}
		}),
		register: build.mutation({
			query: newData => {
				const formData = new FormData()
				Object.keys(newData).forEach(key => {
					let value = newData[key]

					if (key === 'gender') {
						value =
							value === 'мужской'
								? 'man'
								: value === 'женский'
								? 'woman'
								: value
					}
					formData.append(key, value)
				})
				return {
					url: '/auth/register',
					method: 'POST',
					body: formData
				}
			},
			invalidatesTags: ['auth']
		})
	})
})

export const {
	useGetMeQuery,
	useLoginMutation,
	useRegisterMutation,
	useForgotPassMutation,
	useResetPassMutation
} = api
