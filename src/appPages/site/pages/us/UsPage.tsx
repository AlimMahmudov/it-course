import React from 'react'
import AboutUs from './sections/aboutUs/AboutUs'
import Certificate from './sections/certificate/Certificate'
import Review from '../school/sections/review/Review'
import Telegram from '../home/sections/telegram/Telegram'
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs'
const breadcrumbs = [
	{ label: 'Главная', href: '/' },
	{ label: 'О нас', href: '#' }
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
