import React from 'react'
import Reactivity from './sections/Reactivity'
import Faq from '../master_class/sections/faq/Faq'
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs'
const breadcrumbs = [
	{ label: 'Главная', href: '/' },
	{ label: 'Мастер классы', href: '/master_class' },
	{ label: 'Реактивное программирование на Java', href: '#' }
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