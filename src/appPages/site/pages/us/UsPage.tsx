import Breadcrumbs from '@/shared/components/breadcrumbs/Breadcrumbs'
import Telegram from '../home/sections/telegram/Telegram'
import Review from '../school/sections/review/Review'
import AboutUs from './sections/aboutUs/AboutUs'
import Certificate from './sections/certificate/Certificate'
const breadcrumbs = [
	{ label: 'Главная', href: '/' },
	{ label: 'О нас', href: '#this' }
]
const UsPage = () => {
	return (
		<div>
			<Breadcrumbs items={breadcrumbs} />
			<AboutUs />
			<Certificate />
			<Review />
			<Telegram />
		</div>
	)
}

export default UsPage
