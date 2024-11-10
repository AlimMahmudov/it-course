import React from 'react'
import Subscribe from './sections/Subscribe'
import Left from '../home/sections/left/Left'
import Telegram from '../home/sections/telegram/Telegram'
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs'
const breadcrumbs = [
	{ label: 'Главная', href: '/' },
	{ label: 'Пакет участия', href: '#' }
]
const SubscribePage = () => {
	return (
		<>
			<Breadcrumbs  items={breadcrumbs} />
			<Subscribe />
			<Left />
			<Telegram />
		</>
	)
}

export default SubscribePage
