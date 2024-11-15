import { api as index } from '..'

const api = index.injectEndpoints({
	endpoints: build => ({
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
			Record<'message', string>,
			Record<'clientUrl' | 'email', string>
		>({
			query(arg) {
				const formData = new FormData()
				Object.keys(arg).map(key => {
					formData.append(key, arg[key as keyof typeof arg])
				})

				return {
					url: '/auth/forgot_password',
					method: 'POST',
					body: formData
				}
			}
		}),
		resetPass: build.mutation<
			Record<'message', string>,
			Record<'newPass' | 'resetToken', string>
		>({
			query(arg) {
				const formData = new FormData()
				Object.keys(arg).map(key => {
					formData.append(key, arg[key as keyof typeof arg])
				})

				return {
					url: '/auth/reset_password',
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
		}),
		logout: build.mutation<Record<'message', string>, void>({
			query() {
				const refreshToken = JSON.parse(
					String(localStorage.getItem('refreshToken'))
				)
				return {
					url: '/auth/logout',
					method: 'PATCH',
					body: { refreshToken }
				}
			},
			transformResponse(baseQueryReturnValue: Record<'message', string>) {
				localStorage.removeItem('refreshToken')
				localStorage.removeItem('accessToken')
				localStorage.removeItem('retry')
				return baseQueryReturnValue
			},
			invalidatesTags: ['auth']
		}),
		refresh: build.mutation<
			Record<'accessToken' | 'refreshToken', string>,
			void
		>({
			query() {
				const refreshToken = JSON.parse(
					String(localStorage.getItem('refreshToken'))
				)
				return {
					url: '/auth/refresh',
					method: 'PATCH',
					body: { refreshToken }
				}
			},
			transformResponse(
				baseQueryReturnValue: Record<'accessToken' | 'refreshToken', string>
			) {
				localStorage.removeItem('retry')
				localStorage.setItem(
					'accessToken',
					JSON.stringify(baseQueryReturnValue.accessToken)
				)
				localStorage.setItem(
					'refreshToken',
					JSON.stringify(baseQueryReturnValue.refreshToken)
				)
				return baseQueryReturnValue
			},
			invalidatesTags: ['auth']
		})
	}),
	overrideExisting: true
})

export const {
	useLoginMutation,
	useRegisterMutation,
	useForgotPassMutation,
	useResetPassMutation,
	useLogoutMutation,
	useRefreshMutation
} = api
