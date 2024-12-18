namespace UserTypes {
	type info_key = 'comments' | 'my_purchases' | 'plans' | 'payment_cards'
	type purchases_key = 'master_classes' | 'courses' | 'plans'
	type TUserPlans = {
		id: string
		plan_id: string
		start_date: string
		end_date: string
		plan_name: string
		payment_card_number: string
		subscription_status: string
		subscription_is_active: boolean
		subscription_price: string
		rate: string
	}

	interface UserProgress {
		id: string
		user_id: string
		course_id: string
		completed_materials: string[]
		completed_modules: string[]
		started_at: string
		is_completed: boolean
	}

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
		id: string
		fullname: string
		email: string
		tel: string
		profile_pic: string
		birthdate: string
		country: string
		city: string
		gender: 'man' | 'woman'
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
