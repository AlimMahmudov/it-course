'use client'
import React from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface IChildren {
	children: React.ReactNode
	isView?: boolean
	idx?: number
	className?: string
	onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
	ref?: React.RefCallback<any> | React.RefObject<any>
}

const Animate: React.FC<IChildren> = ({
	children,
	isView = false,
	idx,
	ref: _ref,
	...rest
}) => {
	const controls = useAnimation()
	const ref = React.useRef<HTMLDivElement>(null)
	const isInView = useInView((_ref as React.RefObject<HTMLDivElement>) || ref, {
		once: true
	})

	React.useEffect(() => {
		if (isInView && isView) {
			controls.start({})
		} else {
			controls.start({})
		}
	}, [isInView, controls, isView])

	return (
		<motion.div
			ref={_ref || ref}
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
