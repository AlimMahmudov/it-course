import { api as index } from '..'

const api = index.injectEndpoints({
	endpoints: build => ({
		upload: build.mutation<BucketTypes.FileResponse, File>({
			query: file => {
				const formData = new FormData()
				formData.append('file', file)
				formData.append('path', 'profile_pictures')
				return {
					url: '/bucket/upload',
					method: 'POST',
					body: formData
				}
			}
		})
	}),
	overrideExisting: true
})

export const {useUploadMutation} = api
