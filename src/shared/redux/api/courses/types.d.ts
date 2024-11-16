namespace CoursesTypes {
	interface CourseModule {
		id: string
		name: string
		created_at: string
		updated_at: string
		materials: []
	}
	interface Course {
		id: string
		title: string
		description: string
		access_level: string
		price: string
		duration: {
			modules: number
			materials: number
		}
		course_details: {
			descriptions: string[]
			this_for: string
			learning: string[]
		}
		results: {
			descriptions: string[]
			outcomes: string
		}
		instructor: {
			id: string
			fullname: string
			profile_pic: string
			specialization: string
		}
		module_ids: null | string[]
		is_available: boolean
	}
}
