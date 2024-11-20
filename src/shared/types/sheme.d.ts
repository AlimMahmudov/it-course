// interface User {}

interface User {
	id: number
	email: string
	password: string
}

interface IChildren {
	children: React.ReactNode
}

interface IModule {
	name: string
	materials: {
		video_url: string
		title: string
		id: string
	}[]
}

interface IArticles {
	id: number
	isSubscribe: boolean
	mainArticles: {
		image: string
		description: string
		data: string
	}
	article_content: {
		title: string
		description: string
		image: string | StaticImageData
		article_subtitle: string
		faq: Array<string>
		description_after_subscribe: {
			first: string
			second: string
			third: string
			four: string
		}
		fuck_after_subscribe: Array<string>
	}
}



interface IProcessPaymentArg {
	fullname: string
	tel: string
	email: string
	card_number: string
	password: string
	expiration_date: string
	card_cvc: string
	card_type: 'Visa' | 'MasterCard'
	agree: boolean
	phone_code: string | number
}
