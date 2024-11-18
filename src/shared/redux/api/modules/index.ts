import { api as index } from '..'

const api = index.injectEndpoints({
	endpoints: build => ({
		getMaterialComments: build.query<ModuleTypes.MaterialComment[], string>({
			query: material_id => ({
				url: `/material/${material_id}/comments`,
				method: 'GET'
			}),
			providesTags: ['comments']
		}),
		sendComment: build.mutation<
			{ message: string },
			{ body: ModuleTypes.SendCommentArg; material_id: string }
		>({
			query: arg => ({
				url: `/material/${arg.material_id}/comments/send`,
				method: 'POST',
				body: arg.body
			}),
			invalidatesTags: ['comments']
		}),
		deleteComment: build.mutation<{ message: string }, { comment_id: string }>({
			query: arg => ({
				url: `/material/comments/${arg.comment_id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['comments', 'auth']
		})
	}),
	overrideExisting: true
})

export const {
	useGetMaterialCommentsQuery,
	useSendCommentMutation,
	useDeleteCommentMutation
} = api
