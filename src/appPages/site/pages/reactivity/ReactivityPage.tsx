import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs'
import Faq from '../master_class/sections/faq/Faq'
import Reactivity from './sections/Reactivity'
const breadcrumbs = [
	{ label: 'Главная', href: '/' },
	{ label: 'Мастер классы', href: '/master_class' },
	{ label: 'Реактивное программирование на Java', href: '#this' }
]
const ReactivityPage = () => {
	return (
		<>
			<Breadcrumbs items={breadcrumbs} />
			<Reactivity />
			<Faq />
		</>
	)
}

export default ReactivityPage
