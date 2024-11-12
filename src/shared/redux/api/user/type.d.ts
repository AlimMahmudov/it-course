namespace UserTypes {
	type info_key =
		| 'comments'
		| 'my_purchases'
		| 'subscriptions'
		| 'payment_cards'
	interface User {
		purchased_courses: IPuschasedCourse[]
		id: string
		fullname: string
		email: string
		tel: string
		profile_pic: string
		birthdate: string
		country: string
		city: string
		gender: 'main' | 'woman'
		occupation: string
		created_at: string
		updated_at: string
		role: 'user'
	}
}
