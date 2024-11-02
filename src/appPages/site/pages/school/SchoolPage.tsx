import React from 'react'
import School from './sections/aboutSchool/School'
import Courses from './sections/courses/Courses'
import Master from './sections/master/Master'
import Pack from './sections/pack/Pack'
import Review from './sections/review/Review'
import Telegram from '../home/sections/telegram/Telegram'

const SchoolPage = () => {
	return (
		<div>
			<School />
			<Courses />
			<Master />
			<Pack />
			<Review />
			<Telegram />
		</div>
	)
}

export default SchoolPage
