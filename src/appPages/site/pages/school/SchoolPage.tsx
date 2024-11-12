import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs'
import Telegram from '../home/sections/telegram/Telegram'
import School from './sections/aboutSchool/School'
import Courses from './sections/courses/Courses'
import Master from './sections/master/Master'
import Pack from './sections/pack/Pack'
import Review from './sections/review/Review'
const breadcrumbs = [
	{ label: 'Главная', href: '/' },
	{ label: 'О школе', href: '#this' }
]
const SchoolPage = () => {
	return (
		<>
			<Breadcrumbs items={breadcrumbs} />
			<School />
			<Courses />
			<Master />
			<Pack />
			<Review />
			<Telegram />
		</>
	)
}

export default SchoolPage
