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

interface IPuschasedCourse {
	id: string
	materials: {
		completeds: string[]
	}
	modules: {
		completeds: string[]
	}
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
