namespace SubscriptionsTypes {
	interface Subscription {
		name: string
		duration: string
		price: string
		subscription_benefits: string[]
		access_to_course_id: string | null
		id: string
		is_active: boolean
		created_at: string
		updated_at: string
	}
}
