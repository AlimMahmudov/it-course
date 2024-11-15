import Breadcrumbs from '@/shared/components/breadcrumbs/Breadcrumbs'
import Left from '../home/sections/left/Left'
import Telegram from '../home/sections/telegram/Telegram'
import Subscribe from './sections/Subscribe'
const breadcrumbs = [
	{ label: 'Главная', href: '/' },
	{ label: 'Пакет участия', href: '#this' }
]
const SubscriptionsPage = () => {
	return (
		<>
			<Breadcrumbs items={breadcrumbs} />
			<Subscribe />
			<Left />
			<Telegram />
		</>
	)
}

export default SubscriptionsPage
