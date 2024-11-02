import React from 'react'
import Home from './sections/home/Home'
import Article from './sections/article/Article'
import Subscribe from './sections/subscribe/Subscribe'
import Left from './sections/left/Left'
import Telegram from './sections/telegram/Telegram'

const HomePage = () => {
	return (
		<div>
			<Home />
			<Article />
			<Subscribe />
			<Left />
			<Telegram />
		</div>
	)
}

export default HomePage
