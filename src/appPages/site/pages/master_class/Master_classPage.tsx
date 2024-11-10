import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs'
import MasterClasses from './sections/masterclasses/MasterClasses'
const breadcrumbs = [
	{ label: 'Главная', href: '/' },
	{ label: 'Мастер классы', href: '#' }
]
const Master_classPage = () => {
	return (
		<>
			<Breadcrumbs items={breadcrumbs} />
			<MasterClasses />
		</>
	)
}

export default Master_classPage
