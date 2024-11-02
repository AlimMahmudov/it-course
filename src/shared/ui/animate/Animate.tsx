'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface IChildren {
	children: React.ReactNode
	idx?: number
	_key?: string
	className?: string
	onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
	ref?: React.RefCallback<any> | React.RefObject<any>
}

const Animate: React.FC<IChildren> = ({
	children,
	idx,
	_key,
	ref: _ref,
	...rest
}) => {
	return (
		<motion.div
			key={_key}
			ref={_ref}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.2 * (Number(idx || 0) + 1) }}
			className={rest.className}
			onClick={rest.onClick}
		>
			{children}
		</motion.div>
	)
}

export default Animate
