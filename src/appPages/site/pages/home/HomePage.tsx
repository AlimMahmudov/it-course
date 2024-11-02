import React from 'react'
import Hero from './sections/hero/Hero'
import Article from './sections/article/Article'
import Subscribe from './sections/subscribe/Subscribe'
import Left from './sections/left/Left'
import Telegram from './sections/telegram/Telegram'

const HomePage = () => {
	return (
		<div>
			<Hero />
			<Article />
			<Subscribe />
			<Left />
			<Telegram />
		</div>
	)
}

export default HomePage
