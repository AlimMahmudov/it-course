'use client'
import React, { FC, ReactNode } from 'react'
import scss from './SiteLayout.module.scss'
import Header from './header/Header'
import Footer from './footer/Footer'

interface SiteLayoutProps {
	children: ReactNode
}

const SiteLayout: FC<SiteLayoutProps> = ({ children }) => {
	return (
		<div id={scss.SiteLayout}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default SiteLayout
