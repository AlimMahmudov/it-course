namespace UserTypes {
	type info_key =
		| 'comments'
		| 'my_purchases'
		| 'subscriptions'
		| 'payment_cards'
	type purchases_key =
		| 'master_classes'
		| 'courses'
		| 'subscriptions'
	interface AddPaymentCardArg {
		card_number: string
		expiration_date: string
		card_type: string
	}
	interface PaymentCard {
		id: string
		user_id: string
		card_number: string
		expiration_date: string
		card_type: 'Visa' | 'MasterCard'
		is_active: boolean
	}
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
	}
	interface Instructor {
		id: string
		fullname: string
		profile_pic: string
		occupation: string
	}
}
