'use client'
import React, { useLayoutEffect } from 'react'
import { useWindowSize } from 'usehooks-ts'



const Effects: React.FC = () => {
	const size = useWindowSize()

	useLayoutEffect(() => {
		document.documentElement.style.setProperty(
			'--viewport-height',
			`${size.height}px`
		)
		document.documentElement.style.setProperty(
			'--viewport-width',
			`${size.width}px`
		)

		const updateHeaderHeight = () => {
			const header = document.querySelector('[data-header]')
			if (header) {
				document.documentElement.style.setProperty(
					'--header-height',
					`${header.getBoundingClientRect().height}px`
				)
			}
		}

		updateHeaderHeight()

		window.addEventListener('resize', updateHeaderHeight)

		return () => {
			window.removeEventListener('resize', updateHeaderHeight)
		}
	}, [size])

	return null
}

export default Effects
