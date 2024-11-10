// interface User {}

interface User {
	id: number
	email: string
	password: string
}

interface IChildren {
	children: React.ReactNode
}

interface ICourse {
	id: string
	title: string
	description: string
	description2: string
	access: string
	price: number
	duration: {
		modules: number
		materials: number
	}
	course_about: {
		descriptions: string[]
		this_for: string
		learning: string[]
	}
	results: {
		descriptions: string[]
		outcomes: string
	}
	program: {
		modules: IModule[]
	}
	master_class_leader: {
		name: string
		title: string
	}
}
interface IModule {
	name: string
	materials: {
		video_url: string
		title: string
		id: string
	}[]
}

interface IUser {
	purchased_courses: IPuschasedCourse[]
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
