namespace PlansTypes {
	interface Plan {
		name: string
		duration: string
		price: string
		benefits: string[]
		access_to_course_id: string | null
		id: string
		is_active: boolean
		created_at: string
		updated_at: string
	}
}
