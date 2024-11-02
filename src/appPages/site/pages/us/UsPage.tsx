import React from 'react'
import AboutUs from './sections/aboutUs/AboutUs'
import Certificate from './sections/certificate/Certificate'
import Review from '../school/sections/review/Review'
import Telegram from '../home/sections/telegram/Telegram'

const UsPage = () => {
	return (
		<div>
			<AboutUs />
			<Certificate />
			<Review />
			<Telegram />
		</div>
	)
}

export default UsPage
