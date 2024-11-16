import { api as index } from '..'

const api = index.injectEndpoints({
	endpoints: build => ({
		getCourses: build.query<CoursesTypes.Course[], void>({
			query: () => ({
				url: '/courses',
				method: 'GET'
			})
		}),
		getCourseById: build.query<CoursesTypes.Course, { course_id: string }>({
			query: arg => ({
				url: `/course/${arg.course_id}`,
				method: 'GET'
			})
		}),
		getCourseModules: build.query<
			CoursesTypes.CourseModule[],
			{ course_id: string; materials_returned?: boolean }
		>({
			query: arg => ({
				url: `/modules/${arg.course_id}${
					arg.materials_returned ? `?materials_returned=${true}` : ''
				}`,
				method: 'GET'
			})
		})
	}),
	overrideExisting: true
})

export const {
	useGetCoursesQuery,
	useGetCourseByIdQuery,
	useGetCourseModulesQuery
} = api
